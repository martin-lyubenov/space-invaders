import { IPlayer } from "../models/player";

const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

export let player: IPlayer = {
  x: 100,
  y: gameArea.offsetHeight - 50,
  width: 0,
  height: 0,
  lastTimeShot: 0,
  lives: 3,
};
