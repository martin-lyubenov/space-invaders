export function pointsUpdate(points, scene, game) {
  points.textContent = scene.score;
  // adding extra live
  if (scene.score / 1000 >= game.extraLivesCounter) {
    let livesCounter = document.querySelector(".lives-counter");
    let live = document.createElement("div");
    live.classList.add("one-live");
    livesCounter.appendChild(live);
    game.extraLivesCounter++;
  }
}
