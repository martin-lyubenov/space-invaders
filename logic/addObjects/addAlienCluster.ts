import { IGameObject } from "../models/generalInfo";

// logic for rendering the alien cluster capsulated in a single module with 2 classes

// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

// first class to renders a single Alien when the constructor is called.
// additionally each instance contains reference to the html div element the alien is render into
//private class used only in this module
class AddSingleAlien {
  // the HTML element will always exist this is way a non-null assertion operator is used
  alien!: HTMLDivElement;
  constructor() {
    this.render();
  }

  // creates a div element gives it the appropriate class for a single alien
  private render() {
    this.alien = document.createElement("div");
    this.alien.classList.add("alien");
  }
}

// second class renders the whole alien cluster when the constructor is called.
// additionally each instance contains reference to the html div element the alien cluster is render into
export class AddAlienCluster {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  alienCluster!: HTMLDivElement;

  constructor(game: IGameObject) {
    this.render(game);
    this.config();
  }

  // creates a div element gives it the appropriate class for the alien cluster
  private render(game: IGameObject) {
    this.alienCluster = document.createElement("div");
    this.alienCluster.classList.add("alien-cluster");

    for (let i = 0; i < game.maxAlienClusterSize; i++) {
      const alienInstance = new AddSingleAlien();
      const alien = alienInstance.alien;

      // visually there are 3 different types of aliens, the "if" check makes sure to split them accordingly
      if (i < 11) {
        alien.classList.add("alien-40pts");
      } else if (i < 33) {
        alien.classList.add("alien-20pts");
      } else {
        alien.classList.add("alien-10pts");
      }
      this.alienCluster.appendChild(alien);
    }
  }

  // apends the alien cluster to the screen div element
  private config() {
    this.alienCluster.style.top = gameArea.offsetHeight + "px";
    this.alienCluster.style.top = 0 + "px";
    gameArea.appendChild(this.alienCluster);
  }
}
