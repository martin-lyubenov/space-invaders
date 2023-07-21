import { IPlayer } from "../models/player";

export function playerMovement({ player }: { player: IPlayer }) {
  const defender = document.querySelector(".defender")! as HTMLDivElement;
  defender.style.left = player.x + "px";
  defender.style.top = player.y - player.height + "px";
}
