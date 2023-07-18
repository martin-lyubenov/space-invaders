document.addEventListener("keydown", onKeyDown);
document.addEventListener("keyup", onKeyUp);

let keys = {};
function onKeyDown(e) {
  keys[e.code] = true;
}

function onKeyUp(e) {
  keys[e.code] = false;
}

// movement controlls
export function playerMovementControlls({ player, game, gameArea }) {
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.playerMovementMultiplier;
  }

  if (keys.ArrowRight && player.x + player.width + 20 < gameArea.offsetWidth) {
    player.x += game.speed * game.playerMovementMultiplier;
  }
}

// shooting controlls
export function playerShootingControlls(
  { player, game, sounds, AddDefenderLazerShot },
  timestamp
) {
  if (keys.Space && timestamp - player.lastTimeShot > game.fireInterval) {
    new AddDefenderLazerShot(player);
    sounds.defenderShooting.play();
    player.lastTimeShot = timestamp;
  }
}
