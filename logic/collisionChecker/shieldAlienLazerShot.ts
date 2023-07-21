import { IIsCollision } from "../models/isCollision";

export function shieldAlienLazerShotCollisionChecker(
  alienLazerShot: HTMLDivElement,
  isCollision: IIsCollision
) {
  let shields = document.querySelectorAll(
    ".shield"
  ) as NodeListOf<HTMLDivElement>;
  shields.forEach((shield) => {
    if (
      isCollision(shield, alienLazerShot) &&
      shield.classList.contains("shield-destroyed") === false
    ) {
      if (shield.classList.contains("shield-full-hp")) {
        shield.classList.remove("shield-full-hp");
        shield.classList.add("shield-1hit");
      } else if (shield.classList.contains("shield-1hit")) {
        shield.classList.remove("shield-1hit");
        shield.classList.add("shield-2hits");
      } else if (shield.classList.contains("shield-2hits")) {
        shield.classList.remove("shield-2hits");
        shield.classList.add("shield-3hits");
      } else if (shield.classList.contains("shield-3hits")) {
        shield.classList.add("shield-destroyed");
      }
      alienLazerShot.remove();
    }
  });
}
