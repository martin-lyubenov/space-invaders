import { IGameObject, ISceneObject } from "../models/generalInfo";
import { IIsCollision } from "../models/isCollision";
import { IPlayer } from "../models/player";

type defenderAlienLazerShotCollisionChecker = {
  (
    defender: HTMLDivElement,
    isCollision: IIsCollision,
    alienLazerShot: HTMLDivElement,
    player: IPlayer,
    gameArea: HTMLDivElement,
    gameOver: HTMLDivElement,
    scene: ISceneObject
  ): void;
};

type shieldAlienLazerShotCollisionChecker = {
  (alienLazerShot: HTMLDivElement, isCollision: IIsCollision): void;
};

export function alienLazerShotsMovmentAndCollisionChecker(
  {
    game,
    scene,
    player,
    gameArea,
    isCollision,
    defenderAlienLazerShotCollisionChecker,
    shieldAlienLazerShotCollisionChecker,
    gameOver,
  }: {
    game: IGameObject;
    scene: ISceneObject;
    player: IPlayer;
    gameArea: HTMLDivElement;
    isCollision: IIsCollision;
    defenderAlienLazerShotCollisionChecker: defenderAlienLazerShotCollisionChecker;
    shieldAlienLazerShotCollisionChecker: shieldAlienLazerShotCollisionChecker;
    gameOver: HTMLDivElement;
  },
  timestamp: number
) {
  const defender = document.querySelector(".defender")! as HTMLDivElement;
  let alienLazerShots = document.querySelectorAll(
    ".alien-lazer-shot"
  ) as NodeListOf<HTMLDivElement>;
  alienLazerShots.forEach((alienLazerShot) => {
    alienLazerShot.y += game.speed;
    alienLazerShot.style.top = alienLazerShot.y + "px";
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

    // removes the lazer shot from the dom when it reaches the end of the screen
    if (
      alienLazerShot.y + alienLazerShot.offsetHeight >
      gameArea.offsetHeight - alienLazerShot.offsetHeight / 2
    ) {
      alienLazerShot.remove();
    }

    // checks if the alien lazer shot has hit the defender
    defenderAlienLazerShotCollisionChecker(
      defender,
      isCollision,
      alienLazerShot,
      player,
      gameArea,
      gameOver,
      scene
    );

    // checks if the alien lazer shot has hit a shield
    shieldAlienLazerShotCollisionChecker(alienLazerShot, isCollision);
  });
}
