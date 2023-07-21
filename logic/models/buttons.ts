import { IGameObject, ISceneObject } from "./generalInfo";
import { IPlayer } from "./player";
import { ISounds } from "./sounds";
import { AddDefender } from "../addObjects/addDefender";
import { AddAlienCluster } from "../addObjects/addAlienCluster";
import { AddShields } from "../addObjects/addShields";

export interface IGameStart {
  gameAction: (timestamp: number) => void;
  player: IPlayer;
  game: IGameObject;
  AddDefender: typeof AddDefender;
  AddAlienCluster: typeof AddAlienCluster;
  AddShields: typeof AddShields;
  sounds: ISounds;
}

export interface IGameRestart {
  gameArea: HTMLDivElement;
  gameOver: HTMLDivElement;
  player: IPlayer;
  scene: ISceneObject;
  onGameStartConfigObj: IGameStart;
}
