import { alienLazerShotSprites } from "../animations/alienLazerShotSprites";
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

// logic for moving an alient attack and  checking if the attack has hit either the defender or one of the shields

// the name of the func is quite the mouthful I know
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
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  const defender = document.querySelector(".defender")! as HTMLDivElement;
  // selects all alien attack HTML Div elements
  let alienLazerShots = document.querySelectorAll(
    ".alien-lazer-shot"
  ) as NodeListOf<HTMLDivElement>;

  // loops through the alien attacks
  alienLazerShots.forEach((alienLazerShot) => {
    alienLazerShot.y += game.speed;
    alienLazerShot.style.top = alienLazerShot.y + "px";

    // a
    alienLazerShotSprites(timestamp, scene, game, alienLazerShot);

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
