import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  static async load() {
    let jsonProm = await read();
    jsonProm = await json(jsonProm);
    return new GameSaving(jsonProm);
  }
}
