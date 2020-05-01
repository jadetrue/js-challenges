import challenge from "./index";

test("test", async () => {
  const mockMath = Object.create(global.Math);
  mockMath.random = () => 0.4;
  global.Math = mockMath;
  try {
    const res = await challenge.test();
    expect(res).toBe("Hello");
  }
  catch (e) {
    expect(e).toBe("Goodbye");
  }
});
