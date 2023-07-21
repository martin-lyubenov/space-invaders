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
  startGame.classList.add("hidden");
  const defenderInstance = new AddDefender(player);
  const defender = defenderInstance.defender;

  player.height = defender.offsetHeight;
  player.width = defender.offsetWidth;

  new AddAlienCluster(game);
  new AddShields();
  sounds.backgroundMusic.play();

  for (let i = 0; i < 3; i++) {
    new AddPlayerLife();
  }

  window.requestAnimationFrame(gameAction);
}
