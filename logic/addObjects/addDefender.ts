import { IPlayer } from "../models/player";

const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

export class AddDefender {
  defender!: HTMLDivElement;

  constructor(player: IPlayer) {
    this.render(player);
  }

  private render(player: IPlayer) {
    this.defender = document.createElement("div");
    this.defender.classList.add("defender");
    this.defender.style.left = player.x + "px";
    this.defender.style.top = player.y + "px";
    gameArea.appendChild(this.defender);
  }
}
