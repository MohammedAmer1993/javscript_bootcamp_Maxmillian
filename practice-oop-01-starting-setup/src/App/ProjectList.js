import { ProjectItem } from "./ProjectItem.js";
export class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    this.projectItems = document.querySelectorAll(`#${type}-projects li`);
    for (const project of this.projectItems) {
      this.projects.push(
        new ProjectItem(project.id, this.switchStatusHandler.bind(this))
      );
    }
    this.setDrop();
  }

  setDrop() {
    const list = document.querySelector(`#${this.type}-projects ul`);

    list.addEventListener("dragenter", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
        list.parentElement.classList.add("droppable");
      }
    });

    list.addEventListener("dragover", (event) => {
      if (event.dataTransfer.types[0] === "text/plain") {
        event.preventDefault();
      }
    });

    list.addEventListener("dragleave", (event) => {
      if (event.relatedTarget.closest(`#${this.type}-projects ul`) !== list) {
        list.parentElement.classList.remove("droppable");
      }
    });

    list.addEventListener("drop", (event) => {
      list.parentElement.classList.remove("droppable");
      const projId = event.dataTransfer.getData("text/plain");
      if (this.projects.find((pro) => pro.id === projId)) {
        return;
      }
      document
        .getElementById(projId)
        .querySelector("button:last-of-type")
        .click();
    });
  }

  setAddFuncCllBck(addFuncHandler) {
    this.addFuncCllBck = addFuncHandler;
  }

  switchStatusHandler(id) {
    const project = this.projects.find((el) => el.id === id);
    this.projects = this.projects.filter((el) => el.id !== id);
    this.addFuncCllBck(project);
  }

  addFuncHandler(project) {
    const liElm = document.getElementById(project.id);
    const btn = liElm.querySelector("button:last-of-type");
    btn.textContent = this.type === "active" ? "Finish" : "Activate";
    const ulElm = document.querySelector(`#${this.type}-projects ul`);
    ulElm.append(liElm);
    this.projects.push(project);
    project.update(this.switchStatusHandler.bind(this));
  }
}
