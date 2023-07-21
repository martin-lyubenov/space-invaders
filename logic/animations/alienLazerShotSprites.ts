import { IGameObject, ISceneObject } from "../models/generalInfo";

// logic for animating the alien lazer attack
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
    // check the current sprite and adjusts is according to the sprite attack interval
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

    // adjusts the sprite interval, this makes sure tha animation does not occur too often
    scene.lastAlienLazerShotSpriteInterval = timestamp;
  }
}
