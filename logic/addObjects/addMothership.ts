import { ISounds } from "../models/sounds";

// logic for rendering the alien mothership

// the HTML element will always exist this is why a non-null assertion operator (!) is used
const gameArea = document.querySelector(".game-area")! as HTMLDivElement;

// class that renders one Mothership when the constructor is called
// additionally each instance contains reference to the html div element the Mothership is render into
export class AddMothership {
  // the HTML elements will always exist this is why a non-null assertion operator (!) is used
  mothership!: HTMLDivElement;
  mothershipCurrentSound!: HTMLAudioElement;

  constructor(sounds: ISounds) {
    this.render();
    this.config(sounds);
  }

  // creates a div element gives it the appropriate class for a mothership
  private render() {
    this.mothership = document.createElement("div");
    this.mothership.classList.add("alien", "mothership");
  }

  // positions the mothership, gives it a random movement sound effect and appends it to the game screen
  private config(sounds: ISounds) {
    this.mothership.x = gameArea.offsetWidth;
    this.mothership.style.left = this.mothership.x + "px";
    this.mothership.style.top = 0 + "px";

    // gives the mothership a random sound effect
    if (Math.round(Math.random()) === 0) {
      this.mothershipCurrentSound = sounds.mothershipSoundHighPitch;
    } else {
      this.mothershipCurrentSound = sounds.mothershipSoundLowPitch;
    }

    gameArea.appendChild(this.mothership);
  }
}
