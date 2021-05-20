import GameSavingLoader from "../GameSavingLoader";
import GameSaving from "../GameSaving";
import read from "../reader";

test("test GameSavingLoader ", () =>
  GameSavingLoader.load().then((saving) => {
    const data = new GameSaving(
      '{"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}}'
    );
    expect(saving).toEqual(expect.objectContaining(data));
  }));

// Подскажите в чем проблема? уже голову всю сломал в попытках реализовать. подтолкните в нужную сторону.
test("the fetch fails with an error", async () => {
  jest.mock("../reader");
  read.mockResolvedValue(new Error("err"));
  console.log(await GameSavingLoader.load());
  await expect(GameSavingLoader.load()).rejects.toMatch("error");
});
