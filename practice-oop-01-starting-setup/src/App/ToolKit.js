export class ToolKit {
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
