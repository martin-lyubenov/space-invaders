import { IPlayer } from "../models/player";
// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

// logic for rendering the mighty defender

// class that renders the defender when the constructor is called
// additionally each instance contains reference to the html div element the defender is render into
export class AddDefender {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  defender!: HTMLDivElement;

  constructor(player: IPlayer) {
    this.render(player);
    this.config();
  }

  // creates a div element gives it the appropriate class for the defender
  private render(player: IPlayer) {
    this.defender = document.createElement("div");
    this.defender.classList.add("defender");
    this.defender.style.left = player.x + "px";
    this.defender.style.top = player.y + "px";
  }

  // apends the defender to the screen div element
  private config() {
    gameArea.appendChild(this.defender);
  }
}
