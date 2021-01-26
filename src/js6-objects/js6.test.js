import challenge from "./index";

const {
  getFurniturePrice,
  addFurnitureStoreLocation,
  makeSpaceship,
  addUserName,
  splitFullNameToFirstAndLast,
  accessGivenKey,
  getUserAddress,
  addSafeAllergens
} = challenge;

describe("getFurniturePrice() tests", () => {
  const table = { name: "lack", price: 6 };
  const cabinet = { name: "brimnes", price: 55 };

  it("Should return the correct price", () => {
    expect(getFurniturePrice(table)).toBe(6);
    expect(getFurniturePrice(cabinet)).toBe(55);
  });
});

describe("addFurnitureStorLocation() tests", () => {
  const table = { name: "lack", price: 6 };
  const cabinet = { name: "brimnes", price: 55 };

  it("Should return an object", () => {
    expect(typeof addFurnitureStoreLocation(table, "Bristol")).toBe("object");
  });

  const tableWithLocation = addFurnitureStoreLocation(table, "Bristol");
  const cabinetWithLocation = addFurnitureStoreLocation(cabinet, "Cardiff");

  it("Should add a property of location", () => {
    expect(tableWithLocation).toHaveProperty("location");
    expect(cabinetWithLocation).toHaveProperty("location");
  });

  it("Should still have all of the old properties", () => {
    expect(tableWithLocation).toHaveProperty("name");
    expect(tableWithLocation).toHaveProperty("price");
    expect(cabinetWithLocation).toHaveProperty("name");
    expect(cabinetWithLocation).toHaveProperty("price");
  });

  it("Should exactly match given object", () => {
    expect(tableWithLocation).toMatchObject({ name: "lack", price: 6, location: "Bristol" });
    expect(cabinetWithLocation).toMatchObject({ name: "brimnes", price: 55, location: "Cardiff" });
  });
});

describe("makeSpaceship() tests", () => {
  it("Should return an object", () => {
    expect(typeof makeSpaceship("rocinante", 8, "epstein drive", true)).toBe("object");
  });

  const rocinante = { name: "rocinante", noOfSeats: 8, engineType: "epstein drive", canTravelSolarSystems: true };
  const enterprise = {
    name: "uss enterprise (ncc-1701-d)",
    noOfSeats: 5,
    engineType: "impulse drive",
    canTravelSolarSystems: true
  };
  it("Should create an object with the provided arguments as values", () => {
    expect(makeSpaceship("rocinante", 8, "epstein drive", true)).toMatchObject(rocinante);
    expect(makeSpaceship("uss enterprise (ncc-1701-d)", 5, "impulse drive", true)).toMatchObject(enterprise);
  });
});

describe("addUserName() tests", () => {
  const user1 = { name: "john smith", username: "johnnyboiii" };
  const user2 = { name: "jane doe", username: "killerZ" };
  it("Should return and object", () => {
    expect(typeof addUserName(user1, "XXjohnyboiXX")).toBe("object");
  });

  it("Shouldn't change the username if one already exists", () => {
    expect(addUserName(user1, "XXjohnyboiXX").username).toBe("johnnyboiii");
    expect(addUserName(user1, "XXjohnyboiXX")).toMatchObject(user1);
    expect(addUserName(user2, "butterflyflowerqueen").username).toBe("killerZ");
    expect(addUserName(user2, "butterflyflowerqueen")).toMatchObject(user2);
  });

  const user3 = { name: "paul blart" };
  const user4 = { name: "gimli son of gloin" };
  it("Should change the username if none exists", () => {
    expect(addUserName(user3, "mallcop12").username).toBe("mallcop12");
    expect(addUserName(user3, "mallcop12")).toMatchObject({ name: "paul blart", username: "mallcop12" });
    expect(addUserName(user4, "ih8elves").username).toBe("ih8elves");
    expect(addUserName(user4, "ih8elves")).toMatchObject({ name: "gimli son of gloin", username: "ih8elves" });
  });
});

describe("splitFullNameToFirstAndLast() tests", () => {
  const customer1 = { fullName: "Barry Chuckle" };
  const customer2 = { fullName: "Paul Chuckle" };

  it("Should split up basic names", () => {
    expect(splitFullNameToFirstAndLast(customer1)).toMatchObject({
      fullName: "Barry Chuckle",
      firstName: "Barry",
      lastName: "Chuckle"
    });

    expect(splitFullNameToFirstAndLast(customer2)).toMatchObject({
      fullName: "Paul Chuckle",
      firstName: "Paul",
      lastName: "Chuckle"
    });
  });
});

describe("accessGivenKey() tests", () => {
  const person = { name: "Joe Bloggs", height: 170, eyeColour: "blue", likesIceCream: false };

  it("Should access the eyeColour property", () => {
    expect(accessGivenKey(person, "eyeColour")).toBe("blue");
  });

  it("Should access the height property", () => {
    expect(accessGivenKey(person, "height")).toBe(170);
  });

  it("Should access the name property", () => {
    expect(accessGivenKey(person, "name")).toBe("Joe Bloggs");
  });

  it("Should access the likesIceCream property", () => {
    expect(accessGivenKey(person, "likesIceCream")).toBe(false);
  });
});

describe("getUserAddress() tests", () => {
  const user1 = {
    id: 101,
    name: "Harry Potter",
    address: {
      line1: "4 Privet Drive",
      line2: "Little Whinging",
      city: "Surrey",
      postcode: "CR3 0AA"
    }
  };

  const user2 = {
    id: 102,
    name: "Paddington Bear",
    address: {
      line1: "32",
      line2: "Windsor Gardens",
      city: "London",
      postcode: "W9 3RG"
    }
  };

  it("Should be able to get the address from the user object", () => {
    expect(getUserAddress(user1)).toBe("4 Privet Drive Little Whinging Surrey CR3 0AA");
    expect(getUserAddress(user2)).toBe("32 Windsor Gardens London W9 3RG");
  });
});

describe("addSafeAllergens() tests", () => {
  const allergenList = [
    "celery",
    "gluten",
    "crustaceans",
    "eggs",
    "fish",
    "lupin",
    "milk",
    "molluscs",
    "mustard",
    "peanuts",
    "sesame",
    "soybeans",
    "sulphites",
    "tree nuts"
  ];

  const customer1 = {
    id: 103,
    name: "Jordan Jordanson",
    allergies: []
  };

  it("Should include all allergens as safe if none present on the object allergies array", () => {
    expect(addSafeAllergens(customer1, allergenList).safeAllergens).toMatchObject([
      "celery",
      "gluten",
      "crustaceans",
      "eggs",
      "fish",
      "lupin",
      "milk",
      "molluscs",
      "mustard",
      "peanuts",
      "sesame",
      "soybeans",
      "sulphites",
      "tree nuts"
    ]);
  });

  const customer2 = {
    id: 104,
    name: "Peter Peterson",
    allergies: [
      "celery",
      "gluten",
      "crustaceans",
      "eggs",
      "fish",
      "lupin",
      "milk",
      "molluscs",
      "mustard",
      "peanuts",
      "sesame",
      "soybeans",
      "sulphites",
      "tree nuts"
    ]
  };

  it("Should include no allergens if all are found on the customer object", () => {
    expect(addSafeAllergens(customer2, allergenList).safeAllergens).toMatchObject([]);
  });

  const customer3 = {
    id: 105,
    name: "Mandy Manderson",
    allergies: ["eggs", "fish", "lupin", "molluscs", "mustard", "sesame", "soybeans", "sulphites"]
  };

  it("Should include some allergens if some are present on customer allergen list", () => {
    expect(addSafeAllergens(customer3, allergenList).safeAllergens).toMatchObject([
      "celery",
      "gluten",
      "crustaceans",
      "milk",
      "peanuts",
      "tree nuts"
    ]);
  });
});
