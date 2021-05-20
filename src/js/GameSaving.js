export default class GameSaving {
  constructor(data) {
    const parsData = JSON.parse(data);
    this.id = parsData.id;
    this.created = parsData.created;
    this.userInfo = {
      id: parsData.userInfo.id,
      name: parsData.userInfo.name,
      level: parsData.userInfo.level,
      points: parsData.userInfo.points,
    };
  }
}
