import { IGameObject, ISceneObject } from "../models/generalInfo";

// module hold objects that contain general information about the game state ( but not about the player, his state is in the player folder)

// general state info about the game state
export let game: IGameObject = {
  speed: 2,
  playerMovementMultiplier: 2,
  lazerShotMovementMultiplier: 3,
  alienClusterMultiplier: 0.4,
  alienPos: 0,
  alienDirection: 1,
  alienSpriteChangeInterval: 500,
  alienLazerShotSpriteChangeInterval: 50,
  alienFireInterval: 2000,
  fireInterval: 800,
  extraLivesCounter: 1,
  mothershipSpawnInterval: 50000,
  mothershipMovementMultiplier: 5,
  maxAlienClusterSize: 55,
  maxPlayerLives: 5,
};

// general state info about scene
// most of the values start at 0 but are updated through the game
export let scene: ISceneObject = {
  score: 0,
  lastAlienSpriteInterval: 0,
  lastAlienLazerShotSpriteInterval: 0,
  lastAlienLazerShot: 0,
  lastSpawnMothership: 0,
  isActive: true, // checks if the game is still active, if set to false the game will stop
};
