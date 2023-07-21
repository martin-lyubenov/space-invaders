// the HTML element will always exist this is why a non-null assertion operator (!) is used
const livesCounter = document.querySelector(
  ".lives-counter"
)! as HTMLDivElement;

// class that renders one player life when the constructor is called
// additionally each instance contains reference to the html div element the defender is render into
export class AddPlayerLife {
  // the HTML element will always exist this is why a non-null assertion operator (!) is used
  playerLife!: HTMLDivElement;

  constructor() {
    this.render();
    this.config();
  }

  // creates a div element gives it the appropriate class for the life
  private render() {
    this.playerLife = document.createElement("div");
    this.playerLife.classList.add("one-life");
  }

  // apends the life to the screen div element
  private config() {
    livesCounter.appendChild(this.playerLife);
  }
}
