const gameArea = document.querySelector(".game-area");

// class to render a single shield, private class used only in this module
class AddSingleShield {
  singleShield;

  constructor() {
    this.render();
    return this.singleShield;
  }

  render() {
    this.singleShield = document.createElement("div");
    this.singleShield.classList.add("shield", "shield-full-hp");
  }
}

// class to render all 4 shields
export class AddShields {
  shieldField;

  constructor() {
    this.render();
    return this.shieldField;
  }

  render() {
    this.shieldField = document.createElement("div");
    this.shieldField.classList.add("shield-field");

    for (let i = 1; i <= 4; i++) {
      const singleShield = new AddSingleShield();
      this.shieldField.appendChild(singleShield);
    }

    this.shieldField.style.width = gameArea.offsetWidth / 1.25 + "px";
    this.shieldField.style.top = gameArea.offsetHeight - 200 + "px";
    this.shieldField.style.left = gameArea.offsetWidth / 10 + "px";

    gameArea.appendChild(this.shieldField);
  }
}
