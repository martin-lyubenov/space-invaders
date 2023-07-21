import { IGameObject, ISceneObject } from "../models/generalInfo";

export function alienFiringCycle(
  {
    scene,
    game,
    AddAlienLazerShot,
  }: {
    scene: ISceneObject;
    game: IGameObject;
    AddAlienLazerShot: any; //TODO check why it would not accpet typeof AddAlienLazerShot
  },
  timestamp: number
) {
  const aliens = document.querySelectorAll(".alien");
  let remainingAliens = Array.from(aliens).filter(
    (alien) => alien.classList.contains("dead-alien") === false
  );
  // picks a random postion to make sure a random alien fires every time
  let randomAlienPosition = Math.round(remainingAliens.length * Math.random());
  if (timestamp - scene.lastAlienLazerShot > game.alienFireInterval) {
    new AddAlienLazerShot(remainingAliens[randomAlienPosition]);
    scene.lastAlienLazerShot = timestamp;
  }
}
