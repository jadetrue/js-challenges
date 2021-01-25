import challenge from "./index";

const { getFurniturePrice } = challenge;

describe("getFurniturePrice() tests", () => {
  const table = { name: "lack", price: 6 };
  const cabinet = { name: "brimnes", price: 55 };

  it("Should return the correct price", () => {
    expect(getFurniturePrice(table)).toBe(6);
    expect(getFurniturePrice(cabinet)).toBe(55);
  });
});
