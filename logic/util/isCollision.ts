// a func that checks if 2 html elements are in contact with each other
//  if they are - return true otherwise return false
export function isCollision(
    firstElement: HTMLDivElement,
    secondElement: HTMLDivElement
  ) {
    const firstRect = firstElement.getBoundingClientRect();
    const secondRect = secondElement.getBoundingClientRect();
  
    return !(
      firstRect.top > secondRect.bottom ||
      firstRect.bottom < secondRect.top ||
      firstRect.right < secondRect.left ||
      firstRect.left > secondRect.right
    );
  }