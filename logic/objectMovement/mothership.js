// TODO must fix problem with mothership sound
export function mothershipMovement({game, mothershipCurrentSound}) {
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
}
