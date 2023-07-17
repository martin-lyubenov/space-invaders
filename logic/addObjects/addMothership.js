export class AddMothership {
  mothership;
  mothershipCurrentSound;

  constructor(gameArea, sounds) {
    this.render(gameArea, sounds);
    return this.mothership;
  }

  render(gameArea, sounds) {
    this.mothership = document.createElement("div");
    this.mothership.classList.add("alien", "mothership");
    this.mothership.x = gameArea.offsetWidth;
    this.mothership.style.left = this.mothership.x + "px";
    this.mothership.style.top = 0 + "px";

    if (Math.round(Math.random()) === 0) {
      this.mothershipCurrentSound = sounds.mothershipSoundHighPitch;
    } else {
      this.mothershipCurrentSound = sounds.mothershipSoundLowPitch;
    }

    gameArea.appendChild(this.mothership);
  }
}
