import { alienLazerShotSprites } from "../animations/alienLazerShotSprites";
import { IGameObject, ISceneObject } from "../models/generalInfo";
import { IIsCollision } from "../models/isCollision";
import { IPlayer } from "../models/player";

// logic for moving an alient attack and  checking if the attack has hit either the defender or one of the shields

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

    // animates the alien attack
    alienLazerShotSprites(timestamp, scene, game, alienLazerShot);

    // removes the alien attack from the dom when it reaches the end of the game screen
    if (
      alienLazerShot.y + alienLazerShot.offsetHeight >
      gameArea.offsetHeight - alienLazerShot.offsetHeight / 2
    ) {
      alienLazerShot.remove();
    }

    // checks if the alien attack has hit the defender
    defenderAlienLazerShotCollisionChecker(
      defender,
      isCollision,
      alienLazerShot,
      player,
      gameArea,
      gameOver,
      scene
    );

    // checks if the alien attack has hit a shield
    shieldAlienLazerShotCollisionChecker(alienLazerShot, isCollision);
  });
}
