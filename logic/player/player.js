const gameArea = document.querySelector(".game-area");

export let player = {
  x: 100,
  y: gameArea.offsetHeight - 50,
  width: 0,
  height: 0,
  lastTimeShot: 0,
  lives: 3,
};
