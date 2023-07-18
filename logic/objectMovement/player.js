export function playerMovement({player}) {
  const defender = document.querySelector(".defender");
  defender.style.left = player.x + "px";
  defender.style.top = player.y - player.height + "px";
}
