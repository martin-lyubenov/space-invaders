import { ISounds } from "../models/sounds";

export class AddMothership {
  mothership!: HTMLDivElement;
  mothershipCurrentSound!: HTMLAudioElement;

  constructor(gameArea: HTMLDivElement, sounds: ISounds) {
    this.render(gameArea, sounds);
  }

  private render(gameArea: HTMLDivElement, sounds: ISounds) {
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
