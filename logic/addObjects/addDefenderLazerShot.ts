import { IPlayer } from "../models/player";
import { player } from "../player/player";

// logic for rendering the alien lazer attacks

// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

// class that renders one defender lazer attack when the constructor is called
// additionally each instance contains reference to the html div element the lazer is render into
export class AddDefenderLazerShot {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  // additionally TS had some time issue with the X and Y properties on the Div HTML element so the element was converted to any
  lazerShot!: any;

  constructor() {
    this.render();
    this.config(player);
  }

  // creates a div element gives it the appropriate class for a defender lazer attack
  private render() {
    this.lazerShot = document.createElement("div");
    this.lazerShot.classList.add("lazer-shot");
  }

  // positions the lazer right above the defender and appends it to the game screen
  private config(player: IPlayer) {
    this.lazerShot.y = player.y - player.height - 25;
    this.lazerShot.style.top = this.lazerShot.y + "px";
    this.lazerShot.style.left = player.x + player.width / 2 - 12 + "px";
    gameArea.appendChild(this.lazerShot);
  }
}
