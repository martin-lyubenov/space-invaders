import { IPlayer } from "../models/player";

// module hold object that contain general information about the player state.

// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

export let player: IPlayer = {
  x: 100,
  y: gameArea.offsetHeight - 50,
  width: 0,
  height: 0,
  lastTimeShot: 0,
  lives: 3,
};
