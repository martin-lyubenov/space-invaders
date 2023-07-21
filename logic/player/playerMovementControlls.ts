import { IGameObject } from "../models/generalInfo";
import { IPlayer } from "../models/player";
import { ISounds } from "../models/sounds";

document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

let keys: {
  [key: string]: boolean;
} = {};

function onKeyDown(e: KeyboardEvent) {
  keys[e.code] = true;
}

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
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.playerMovementMultiplier;
  }

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
  if (keys.Space && timestamp - player.lastTimeShot > game.fireInterval) {
    new AddDefenderLazerShot(player);
    sounds.defenderShooting.play();
    player.lastTimeShot = timestamp;
  }
}
