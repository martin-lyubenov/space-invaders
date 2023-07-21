import { IGameObject, ISceneObject } from "../models/generalInfo";

// logic for animation the alien lazer attack
// the way the attacks are animated is as follows -> each frame the game checks the background spire and the sprite change interval ( located in the "game" object) and changes the sprite simulating movement

export function alienLazerShotSprites(
  timestamp: number,
  scene: ISceneObject,
  game: IGameObject,
  alienLazerShot: HTMLDivElement
): void {
  if (
    timestamp - scene.lastAlienLazerShotSpriteInterval >
    game.alienLazerShotSpriteChangeInterval
  ) {
    if (alienLazerShot.style.backgroundImage.includes("type-1")) {
      alienLazerShot.style.backgroundImage =
        "url('./images/aliens/attack-type-2.png')";
    } else if (alienLazerShot.style.backgroundImage.includes("type-2")) {
      alienLazerShot.style.backgroundImage =
        "url('./images/aliens/attack-type-1.png')";
    } else {
      alienLazerShot.style.backgroundImage =
        "url('./images/aliens/attack-type-2.png')";
    }

    scene.lastAlienLazerShotSpriteInterval = timestamp;
  }
}
