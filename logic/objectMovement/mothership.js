// TODO must fix problem with mothership sound
export function mothershipMovement(motherships, game) {
  motherships.forEach((mothership) => {
    mothership.x -= game.speed;
    mothership.style.left = mothership.x + "px";

    if (mothership.x + mothership.offsetWidth <= 0) {
      mothership.remove();
    }
  });
}


