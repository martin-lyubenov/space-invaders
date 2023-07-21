import { IGameObject, ISceneObject } from "../models/generalInfo";

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
  // adding extra live
  if (scene.score / 1000 >= game.extraLivesCounter) {
    let livesCounter = document.querySelector(
      ".lives-counter"
    )! as HTMLDivElement;
    let live = document.createElement("div");
    live.classList.add("one-live");
    livesCounter.appendChild(live);
    game.extraLivesCounter++;
  }
}
