import { IGameObject } from "../models/generalInfo";
import { IPlayer } from "../models/player";
import { ISounds } from "../models/sounds";

// logic for setting up the player controlls

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

// object that will hold all of player controls -> left and right arrows and the spacebar
let keys: {
  [key: string]: boolean;
} = {};

// checks if the player is pressing any of the controls
function onKeyDown(e: KeyboardEvent) {
  keys[e.code] = true;
}

// checks if the player is pressing any of the controls
function onKeyUp(e: KeyboardEvent) {
  keys[e.code] = false;
}

// movement controlls
export function playerMovementControlls({
  player,
  game,
  gameArea,
}: {
  player: IPlayer;
  game: IGameObject;
  gameArea: HTMLDivElement;
}) {
  // if the player is pressing or holding the left arrow, move the player to the left
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.playerMovementMultiplier;
  }

  // if the player is pressing or holding the left arrow, move the player to the right
  if (keys.ArrowRight && player.x + player.width + 20 < gameArea.offsetWidth) {
    player.x += game.speed * game.playerMovementMultiplier;
  }
}

// shooting controlls
export function playerShootingControlls(
  {
    player,
    game,
    sounds,
    AddDefenderLazerShot,
  }: {
    player: IPlayer;
    game: IGameObject;
    sounds: ISounds;
    AddDefenderLazerShot: any;
  },
  timestamp: number
) {
  // if the player is pressing the spacebar render a lazer attack and create the appropriate sound
  if (keys.Space && timestamp - player.lastTimeShot > game.fireInterval) {
    new AddDefenderLazerShot(player);
    sounds.defenderShooting.play();
    player.lastTimeShot = timestamp;
  }
}
