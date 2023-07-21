import { AddPlayerLife } from "../addObjects/addPlayerLife";
import { IGameStart } from "../models/buttons";

// the HTML element will always exist this is why a non-null assertion operator (!) is used
const startGame = document.querySelector(".start-game")! as HTMLDivElement;

// start game
export function onGameStart({
  gameAction,
  player,
  game,
  AddAlienCluster,
  AddShields,
  sounds,
  AddDefender,
}: IGameStart) {
  // hides the start game screen
  startGame.classList.add("hidden");
  // creates a new defender HTML div element
  const defenderInstance = new AddDefender(player);
  const defender = defenderInstance.defender;

  // sets some player stats, needed in other parts of the game
  player.height = defender.offsetHeight;
  player.width = defender.offsetWidth;

  // add a new alien cluster
  new AddAlienCluster(game);
  // addes a new field of shields
  new AddShields();
  // start the background music
  sounds.backgroundMusic.play();

  // gives the player 3 lives
  for (let i = 1; i <= 3; i++) {
    new AddPlayerLife();
  }

  // start the game engine
  window.requestAnimationFrame(gameAction);
}
