class ProjectList {
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

class ProjectItem {
  constructor(id, switchFuncCllBck) {
    this.id = id;
    this.setListnerStatusBtn(switchFuncCllBck);
    this.hasToolKit = false;
    this.toolKit = new ToolKit(this, this.hasToolKit);
    this.setShowToolKit();
    this.setDrag();
  }

  setDrag() {
    const item = document.getElementById(this.id);
    item.addEventListener("dragstart", (event) => {
      event.dataTransfer.setData("text/plain", this.id);
      event.dataTransfer.effectAllowed = "move";
    });
  }

  setShowToolKit() {
    // if (this.hasToolKit) {
    //   return;
    // }
    this.moreInfoBtn = document.querySelector(
      `#${this.id} button:first-of-type`
    );
    this.moreInfoBtn.addEventListener(
      "click",
      this.toolKit.showDiv.bind(this.toolKit, this.id)
    );
  }

  setListnerStatusBtn(switchFuncCllBck) {
    let statusBtn = document.querySelector(`#${this.id} button:last-of-type`);
    let newNode = statusBtn.cloneNode("true");
    statusBtn.replaceWith(newNode);
    statusBtn = newNode;
    statusBtn.addEventListener("click", switchFuncCllBck.bind(null, this.id));
  }

  update(swietchCllBckFunc) {
    this.setListnerStatusBtn(swietchCllBckFunc);
  }

  setHasToolValue(value) {
    this.hasToolKit = value;
  }
}

class ToolKit {
  constructor(project, value) {
    this.setHasToolValue(value);
    this.project = project;
  }
  showDiv(id) {
    if (this.hasToolKit) {
      return;
    }
    this.divEl = document.createElement("div");
    this.divEl.classList.add("card");
    const el = document.getElementById(id);
    this.textExtraInfo = el.dataset.extraInfo;
    const offsettop = el.offsetTop;
    const offsetleft = el.offsetLeft;
    const height = el.offsetHeight;
    const scroll = el.parentElement.scrollTop;

    const left = offsetleft;
    const top = offsettop + height - scroll - 20;

    this.divEl.style.position = "absolute";
    this.divEl.style.top = top + "px";
    this.divEl.style.left = left;

    const tmpelatNode = document.getElementById("snipt");
    const nodeBody = document.importNode(tmpelatNode.content, true);
    const para = nodeBody.querySelector("p");
    para.textContent = this.textExtraInfo;
    this.divEl.append(nodeBody);

    el.append(this.divEl);
    this.divEl.addEventListener("click", this.detach.bind(this));
    this.hasToolKit = true;
  }

  detach(event) {
    console.log(event);
    this.divEl.remove();

    this.hasToolKit = false;
    this.project.setShowToolKit();
    this.project.setHasToolValue(this.hasToolKit);
  }

  setHasToolValue(value) {
    this.hasToolKit = value;
  }
}

class App {
  static init() {
    const activeProjects = new ProjectList("active");
    const finishedProjects = new ProjectList("finished");
    activeProjects.setAddFuncCllBck(
      finishedProjects.addFuncHandler.bind(finishedProjects)
    );
    finishedProjects.setAddFuncCllBck(
      activeProjects.addFuncHandler.bind(activeProjects)
    );
  }
}

App.init();
