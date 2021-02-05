import * as challenge from "./solution";
import people from "./mockApi.json";

const { getData, getNames, getEmployedPeople, findPersonWithId } = challenge;

beforeEach(() => {
  const mockFetch = jest.fn().mockImplementation((args) =>
    Promise.resolve({
      json: () => require(args)
    })
  );

  window.fetch = mockFetch;
});

describe("getData() tests", () => {
  it("Fetch should have been called once", () => {
    getData("./mockApi.json");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Should return the data", async () => {
    const data = await getData("./mockApi.json");
    expect(data).toStrictEqual(people);
  });
});

describe("getNames() tests", () => {
  it("Fetch should have been called once", () => {
    getNames("./mockApi.json");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Should return an array of names", async () => {
    const namesArr = await getNames("./mockApi.json");
    expect(Array.isArray(namesArr)).toBe(true);
    expect(namesArr).toStrictEqual(["Peter", "Georgia", "Joanna", "Buzz", "Travis", "Paula", "J"]);
  });
});

describe("getEmployedPeople() tests", () => {
  const mockApiResponse = [
    {
      id: "001",
      name: "Peter",
      age: 47,
      height: 170,
      interests: ["swimming", "reading", "juggling"],
      isEmployed: true
    },
    {
      id: "004",
      name: "Buzz",
      age: 32,
      height: 190,
      interests: ["shooting", "MMA", "writing"],
      isEmployed: true
    },
    {
      id: "005",
      name: "Travis",
      age: 22,
      height: 160,
      interests: ["swimming", "watching TV", "knitting"],
      isEmployed: true
    }
  ];

  it("Fetch should have been called once", () => {
    getEmployedPeople("./mockApi.json");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("Should return an array of employed people objects", async () => {
    const employedPeopleArr = await getEmployedPeople("./mockApi.json");

    expect(Array.isArray(employedPeopleArr)).toBe(true);
    expect(employedPeopleArr.length).toBe(3);
    expect(employedPeopleArr).toStrictEqual(mockApiResponse);
  });
});

describe("findPersonWithId() tests", () => {
  const dummyId001 = {
    id: "001",
    name: "Peter",
    age: 47,
    height: 170,
    interests: ["swimming", "reading", "juggling"],
    isEmployed: true
  };

  const dummyId005 = {
    id: "005",
    name: "Travis",
    age: 22,
    height: 160,
    interests: ["swimming", "watching TV", "knitting"],
    isEmployed: true
  };

  it("Should return a single object", async () => {
    const returnFromFunction = await findPersonWithId("./mockApi.json", "001");
    expect(typeof returnFromFunction).toBe("object");
    expect(returnFromFunction).toHaveProperty("id");
  });

  it("Should return a person with the id of 001", async () => {
    const personId001 = await findPersonWithId("./mockApi.json", "001");
    expect(personId001).toStrictEqual(dummyId001);
  });

  it("Should return a person with the id of 005", async () => {
    const personId005 = await findPersonWithId("./mockApi.json", "005");
    expect(personId005).toStrictEqual(dummyId005);
  });

  it("Should return a message of 'Person not found' when no person has a matching ID", async () => {
    const notFound = await findPersonWithId("./mockApi.json", "020");
    expect(notFound).toBe("Person not found");
  });
});
