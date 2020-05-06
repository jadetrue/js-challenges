import challenge from "./index";
import data from "./data";

beforeEach(() => {
  const mockFetch = () => {
    return jest.fn().mockImplementation(() =>
      Promise.resolve({
        json: () => JSON.parse(data),
      })
    );
  };

  window.fetch = mockFetch();
});

test("Should return mock data", async () => {
  // Set up variable and check fetch arguments are correct
  const data = await challenge.getData();
  expect(fetch).toHaveBeenLastCalledWith("./data");

  expect(data.length).toBe(7);
  expect(data[6]).toMatchObject({
    id: "007",
    name: "J",
    age: 50,
    height: 150,
    interests: ["reading", "juggling", "knitting"],
    employed: false,
  });
});

describe("Get person tests", () => {
  test("Should return single person with id 003", async () => {
    const data = await challenge.getPerson("003");
    expect(fetch).toHaveBeenLastCalledWith("./data");

    expect(data.id).toBe("003");
    expect(data).toMatchObject({
      id: "003",
      name: "Joanna",
      age: 78,
      height: 140,
      interests: ["knitting", "baking", "MMA"],
      employed: false,
    });
  });

  test("Should return single person with id 006", async () => {
    const data = await challenge.getPerson("006");
    expect(fetch).toHaveBeenLastCalledWith("./data");

    expect(data.id).toBe("006");
    expect(data).toMatchObject({
      id: "006",
      name: "Paula",
      age: 27,
      height: 160,
      interests: ["baking", "hiking", "shooting"],
      employed: false,
    });
  });
});

test("Should return names of all people in data file", async () => {
  const data = await challenge.getNames();
  expect(fetch).toHaveBeenLastCalledWith("./data");

  expect(data.length).toBe(7);
  expect(data).toMatchObject(["Peter", "Georgia", "Joanna", "Buzz", "Travis", "Paula", "J"]);
});

test("Should filter people by employment", async () => {
  const data = await challenge.getEmployedPeople();
  expect(fetch).toHaveBeenLastCalledWith("./data");

  expect(data.length).toBe(3);
  expect(data[0].id).toBe("001");
  expect(data[0].name).toBe("Peter");
  expect(data[2].id).toBe("005");
  expect(data[2].name).toBe("Travis");
});

describe("Filter interests", () => {
  test("Should filter people by swimming", async () => {
    const data = await challenge.filterByInterest("swimming");
    expect(fetch).toHaveBeenLastCalledWith("./data");

    expect(data.length).toBe(2);
    expect(data[0].id).toBe("001");
    expect(data[0].name).toBe("Peter");
    expect(data[1].id).toBe("005");
    expect(data[1].name).toBe("Travis");
  });

  test("Should filter people by shooting", async () => {
    const data = await challenge.filterByInterest("shooting");
    expect(fetch).toHaveBeenLastCalledWith("./data");

    expect(data.length).toBe(2);
    expect(data[0].id).toBe("004");
    expect(data[0].name).toBe("Buzz");
    expect(data[1].id).toBe("006");
    expect(data[1].name).toBe("Paula");
  });

  test("Should filter people by knitting", async () => {
    const data = await challenge.filterByInterest("knitting");
    expect(fetch).toHaveBeenLastCalledWith("./data");

    expect(data.length).toBe(3);
    expect(data[0].id).toBe("003");
    expect(data[0].name).toBe("Joanna");
    expect(data[1].id).toBe("005");
    expect(data[1].name).toBe("Travis");
    expect(data[2].id).toBe("007");
    expect(data[2].name).toBe("J");
  });
});
