// import { ToolKit } from "./ToolKit.js";
export class ProjectItem {
  constructor(id, switchFuncCllBck) {
    this.id = id;
    this.setListnerStatusBtn(switchFuncCllBck);
    this.hasToolKit = false;
    import("./ToolKit.js").then((file) => {
      this.toolKit = new file.ToolKit(this, this.hasToolKit);
      this.setShowToolKit();
    });
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
