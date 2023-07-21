import { IGameObject, ISceneObject } from "../models/generalInfo";

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
};

export let scene: ISceneObject = {
  score: 0,
  lastAlienSpriteInterval: 0,
  lastAlienLazerShotSpriteInterval: 0,
  lastAlienLazerShot: 0,
  lastSpawnMothership: 0,
  isActive: true,
};
