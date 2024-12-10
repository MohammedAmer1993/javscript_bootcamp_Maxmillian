import { difference } from "lodash";
import { ProjectList } from "./App/ProjectList.js";
console.log(difference([2,3,5], [2,6,7]));
class App {
  static init() {
    console.log("hiiiiiiiiiiiiiiiiiiiiiiiiiiiiii")
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
