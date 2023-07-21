import { AddPlayerLife } from "../addObjects/addPlayerLife";
import { IGameObject, ISceneObject } from "../models/generalInfo";

// logic for updating the player points

export function pointsUpdate({
  points,
  scene,
  game,
}: {
  points: HTMLDivElement;
  scene: ISceneObject;
  game: IGameObject;
}) {
  points.textContent = scene.score.toString();

  const lives = document.querySelectorAll(".one-life");

  // for every 1000 points the player is awared an extra life
  // the player cannot have more than 5 lives
  if (
    scene.score / 1000 >= game.extraLivesCounter &&
    lives.length <= game.maxPlayerLives
  ) {
    new AddPlayerLife();
    game.extraLivesCounter++;
  }
}
