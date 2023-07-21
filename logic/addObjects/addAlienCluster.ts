import { IGameObject } from "../models/generalInfo";

const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

// class to render a single Alien
class AddSingleAlien {
  alien!: HTMLDivElement;
  constructor() {
    this.render();
  }
  private render() {
    this.alien = document.createElement("div");
    this.alien.classList.add("alien");
  }
}

// class to render the whole alien cluster
export class AddAlienCluster {
  // TODO, check if you can extend the HTMLdivElement interface in TS to remove the x does not exist
  // this is HTMLDivElement, however TS does not support element.x value for some reason
  alienCluster!: HTMLDivElement;

  constructor(game: IGameObject) {
    this.render(game);
  }

  private render(game: IGameObject) {
    this.alienCluster = document.createElement("div");
    this.alienCluster.classList.add("alien-cluster");

    for (let i = 0; i < game.maxAlienClusterSize; i++) {
      const alienInstance = new AddSingleAlien();
      const alien = alienInstance.alien;

      if (i < 11) {
        alien.classList.add("alien-40pts");
      } else if (i < 33) {
        alien.classList.add("alien-20pts");
      } else {
        alien.classList.add("alien-10pts");
      }
      this.alienCluster.appendChild(alien);
    }
    this.alienCluster.style.top = gameArea.offsetHeight + "px";
    this.alienCluster.style.top = 0 + "px";
    gameArea.appendChild(this.alienCluster);
  }
}
