import { AddAlienLazerShot } from "./addObjects/addAlienLazerShot.js";
import { AddDefenderLazerShot } from "./addObjects/addDefenderLazerShot.js";
import { AddMothership } from "./addObjects/addMothership.js";
import { deathAndPoints } from "./deathAndPoints/deathAndPoints.js";
import { game, scene } from "./generalGameInfo/generalInfo.js";
import { alienClusterMovement } from "./objectMovement/alienCluster.js";
import { lazerShotsMovement } from "./objectMovement/lazerShots.js";
import { player } from "./player/player.js";
import { keys } from "./player/playerMovement.js";
import { sounds } from "./sounds.js";
import {
  onGameStart,
  gameOverAction,
  gameRestart,
  isCollision,
} from "./utilityFuncs.js";

const startButton = document.querySelector(".start-button");
export let gameArea = document.querySelector(".game-area");
export const gameOver = document.querySelector(".game-over");
const points = document.querySelector(".points");
// const lives = document.querySelector('.lives-counter');

// backgournd music loop
sounds.backgroundMusic.addEventListener("ended", function () {
  this.currentTime = 0;
  this.play();
});

// start game button event listener
startButton.addEventListener("click", onGameStart);

// game over and restart game event listener
gameOver.addEventListener("click", gameRestart);

// game engine
export function gameAction(timestamp) {
  const defender = document.querySelector(".defender");

  // movement keys
  if (keys.ArrowLeft && player.x > 0) {
    player.x -= game.speed * game.playerMovementMultiplier;
  }

  if (keys.ArrowRight && player.x + player.width + 20 < gameArea.offsetWidth) {
    player.x += game.speed * game.playerMovementMultiplier;
  }

  // apply movement
  defender.style.left = player.x + "px";
  defender.style.top = player.y - player.height + "px";

  // shooting
  if (keys.Space && timestamp - player.lastTimeShot > game.fireInterval) {
    // LazerShotMaker.addDefenderLazerShot(player);
    new AddDefenderLazerShot(player);
    sounds.defenderShooting.play();
    player.lastTimeShot = timestamp;
  }

  // add lazer movement
  let lazerShots = document.querySelectorAll(".lazer-shot");
  lazerShotsMovement(lazerShots, game, isCollision);

  // adding alient cluster movment
  let alienCluster = document.querySelector(".alien-cluster");
  alienClusterMovement(alienCluster, game, gameArea);

  // alien death and points
  let aliens = document.querySelectorAll(".alien");
  deathAndPoints(aliens, lazerShots, isCollision, sounds, scene);

  // respawn aliens
  let alienRespawnChecker = Array.from(aliens).filter((alien) =>
    alien.classList.contains("dead-alien")
  );
  if (alienRespawnChecker.length === 55) {
    aliens.forEach((alien) => {
      alien.classList.remove("dead-alien");
    });
  }

  // aliens sprite animation
  if (
    timestamp - scene.lastAlienSpriteInterval >
    game.alienSpriteChangeInterval
  ) {
    aliens.forEach((alien) => {
      if (alien.classList.contains("alien-40pts")) {
        if (alien.style.backgroundImage.includes("-40pts-1")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-40pts-2.png')";
        } else if (alien.style.backgroundImage.includes("-40pts-2")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-40pts-1.png')";
        } else {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-40pts-2.png')";
        }
      }

      if (alien.classList.contains("alien-20pts")) {
        if (alien.style.backgroundImage.includes("-20pts-1")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-20pts-2.png')";
        } else if (alien.style.backgroundImage.includes("-20pts-2")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-20pts-1.png')";
        } else {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-20pts-2.png')";
        }
      }

      if (alien.classList.contains("alien-10pts")) {
        if (alien.style.backgroundImage.includes("-10pts-1")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-10pts-2.png')";
        } else if (alien.style.backgroundImage.includes("-10pts-2")) {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-10pts-1.png')";
        } else {
          alien.style.backgroundImage =
            "url('./images/aliens/enemy-10pts-2.png')";
        }
      }

      scene.lastAlienSpriteInterval = timestamp;
    });
  }

  // aliens firing back (in self defence)
  let remainingAliens = Array.from(aliens).filter(
    (alien) => alien.classList.contains("dead-alien") === false
  );
  // picks a random postion to make sure a random alien fires every time
  let randomAlienPosition = Math.round(remainingAliens.length * Math.random());
  if (timestamp - scene.lastAlienLazerShot > game.alienFireInterval) {
    new AddAlienLazerShot(remainingAliens[randomAlienPosition]);
    scene.lastAlienLazerShot = timestamp;
  }

  // add movment and collision to alien lazer shots
  let alienLazerShots = document.querySelectorAll(".alien-lazer-shot");
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

    if (
      alienLazerShot.y + alienLazerShot.offsetHeight >
      gameArea.offsetHeight - alienLazerShot.offsetHeight / 2
    ) {
      alienLazerShot.remove();
    }

    if (isCollision(defender, alienLazerShot)) {
      let lives = document.querySelectorAll(".one-live");
      alienLazerShot.remove();
      if (lives.length > 1) {
        player.x = 100;
        player.y = gameArea.offsetHeight - 50;
        defender.style.left = player.x + "px";
        defender.style.top = player.y + "px";
        lives[lives.length - 1].remove();
      } else {
        lives[lives.length - 1].remove();
        gameOverAction();
      }
    }

    let shields = document.querySelectorAll(".shield");
    shields.forEach((shield) => {
      if (
        isCollision(shield, alienLazerShot) &&
        shield.classList.contains("shield-destroyed") === false
      ) {
        if (shield.classList.contains("shield-full-hp")) {
          shield.classList.remove("shield-full-hp");
          shield.classList.add("shield-1hit");
        } else if (shield.classList.contains("shield-1hit")) {
          shield.classList.remove("shield-1hit");
          shield.classList.add("shield-2hits");
        } else if (shield.classList.contains("shield-2hits")) {
          shield.classList.remove("shield-2hits");
          shield.classList.add("shield-3hits");
        } else if (shield.classList.contains("shield-3hits")) {
          shield.classList.add("shield-destroyed");
        }
        alienLazerShot.remove();
      }
    });
  });

  // add mothership
  if (
    timestamp - scene.lastSpawnMothership >
    game.mothershipSpawnInterval + 50000 * Math.random()
  ) {
    new AddMothership(gameArea, sounds);
    scene.lastSpawnMothership = timestamp;
  }

  // add mothership movement
  let motherships = document.querySelectorAll(".mothership");
  motherships.forEach((mothership) => {
    mothership.x -= game.speed;
    mothership.style.left = mothership.x + "px";

    if (mothership.classList.contains("dead-alien") === false) {
      mothershipCurrentSound.play();
    }

    if (mothership.x + mothership.offsetWidth <= 0) {
      mothership.remove();
    }
  });

  points.textContent = scene.score;
  // adding extra live
  if (scene.score / 1000 >= game.extraLivesCounter) {
    let livesCounter = document.querySelector(".lives-counter");
    let live = document.createElement("div");
    live.classList.add("one-live");
    livesCounter.appendChild(live);
    game.extraLivesCounter++;
  }

  if (scene.isActive) {
    window.requestAnimationFrame(gameAction);
  }
}

// Bug fixes:
// respawn aliens animation gets fuck up after respawning - may have to give remove alien cluster and add it again
