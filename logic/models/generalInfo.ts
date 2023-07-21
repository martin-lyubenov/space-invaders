export interface IGameObject {
    speed: number;
    playerMovementMultiplier: number;
    lazerShotMovementMultiplier: number;
    alienClusterMultiplier: number;
    alienPos: number;
    alienDirection: number;
    alienSpriteChangeInterval: number;
    alienLazerShotSpriteChangeInterval: number;
    alienFireInterval: number;
    fireInterval: number;
    extraLivesCounter: number;
    mothershipSpawnInterval: number;
    mothershipMovementMultiplier: number;
    maxAlienClusterSize: number;
}

export interface ISceneObject { 
    score: number;
    lastAlienSpriteInterval:number;
    lastAlienLazerShotSpriteInterval: number;
    lastAlienLazerShot: number;
    lastSpawnMothership:number;
    isActive: boolean;
}