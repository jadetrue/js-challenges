import challenge from "./index";

const {
  getEmployeeQuotes,
  getTheManagers,
  getNumberOfKeys,
  findMostExpensiveItem,
  settotalPrice,
  totalShoppingBasket
} = challenge;

describe("Foundation level challenges", () => {
  const employeeData = [
    {
      name: "Edith Gibson",
      quote: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
      yearsEmployed: 14,
      isManagement: true
    },
    {
      name: "Adam Holmes",
      quote: "I detest life-insurance agents; they always argue that I shall some day die, which is not so.",
      yearsEmployed: 1,
      isManagement: false
    },
    {
      name: "Fenton Perry",
      quote:
        "The Fifth Amendment is an old friend and a good friend. It is one of the great landmarks in man's struggle to be free of tyranny, to be decent and civilized.",
      yearsEmployed: 19,
      isManagement: false
    },
    {
      name: "Adelaide Owens",
      quote: "Columbus found a world, and had no chart save one that Faith deciphered in the skies.",
      yearsEmployed: 9,
      isManagement: false
    },
    {
      name: "Adison Crawford",
      quote: "Only learn to seize good fortune, for good fortune is always here.",
      yearsEmployed: 7,
      isManagement: true
    }
  ];

  describe("getEmployeeQuotes() tests", () => {
    it("Should return an array of just the quote from the data provided", () => {
      expect(getEmployeeQuotes(employeeData)).toStrictEqual([
        "Your body is precious. It is our vehicle for awakening. Treat it with care.",
        "I detest life-insurance agents; they always argue that I shall some day die, which is not so.",
        "The Fifth Amendment is an old friend and a good friend. It is one of the great landmarks in man's struggle to be free of tyranny, to be decent and civilized.",
        "Columbus found a world, and had no chart save one that Faith deciphered in the skies.",
        "Only learn to seize good fortune, for good fortune is always here."
      ]);
    });
  });

  describe("getTheManagers() tests", () => {
    it("Should return an array containing only employees where isManagement is true", () => {
      expect(getTheManagers(employeeData)).toStrictEqual([
        {
          name: "Edith Gibson",
          quote: "Your body is precious. It is our vehicle for awakening. Treat it with care.",
          yearsEmployed: 14,
          isManagement: true
        },
        {
          name: "Adison Crawford",
          quote: "Only learn to seize good fortune, for good fortune is always here.",
          yearsEmployed: 7,
          isManagement: true
        }
      ]);
    });
  });

  describe("getNumberOfKeys() tests", () => {
    const object1 = { a: 1, b: 2 };
    const object2 = { a: 1, b: 2, c: 3, d: 4 };
    const object3 = { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6 };

    it("Should return a number", () => {
      expect(typeof getNumberOfKeys(object1)).toBe("number");
    });

    it("Should accurately count the number of keys", () => {
      expect(getNumberOfKeys(object1)).toBe(2);
      expect(getNumberOfKeys(object2)).toBe(4);
      expect(getNumberOfKeys(object3)).toBe(6);
    });
  });
});

describe("Intermediate level challenges", () => {
  const shoppingBasket = [
    {
      name: "jeans",
      price: 30,
      hasFreeShipping: false,
      quantity: 2
    },
    {
      name: "hoodie",
      price: 35,
      hasFreeShipping: false,
      quantity: 1
    },
    {
      name: "pants",
      price: 5,
      hasFreeShipping: true,
      quantity: 5
    },
    {
      name: "socks",
      price: 5,
      hasFreeShipping: true,
      quantity: 1
    },
    {
      name: "shirt",
      price: 20,
      hasFreeShipping: false,
      quantity: 3
    }
  ];

  const shoppingBasketWithTotals = [
    {
      name: "hoodie",
      price: 35,
      hasFreeShipping: false,
      quantity: 1,
      totalPrice: 35
    },
    {
      name: "jeans",
      price: 30,
      hasFreeShipping: false,
      quantity: 2,
      totalPrice: 60
    },
    {
      name: "shirt",
      price: 20,
      hasFreeShipping: false,
      quantity: 3,
      totalPrice: 60
    },
    {
      name: "pants",
      price: 5,
      hasFreeShipping: true,
      quantity: 5,
      totalPrice: 25
    },
    {
      name: "socks",
      price: 5,
      hasFreeShipping: true,
      quantity: 1,
      totalPrice: 5
    }
  ];

  describe("findMostExpensiveItem() tests", () => {
    it("Should return a single object", () => {
      expect(findMostExpensiveItem(shoppingBasket)).toHaveProperty("name");
      expect(findMostExpensiveItem(shoppingBasket).name).toBe("hoodie");
    });

    it("Should return the most expensive item which is a hoodie", () => {
      expect(findMostExpensiveItem(shoppingBasket)).toStrictEqual({
        name: "hoodie",
        price: 35,
        hasFreeShipping: false,
        quantity: 1
      });
    });
  });

  describe("settotalPrice() tests", () => {
    it("Should return an array", () => {
      expect(Array.isArray(settotalPrice(shoppingBasket))).toBe(true);
    });

    it("Should not modify original array of objects", () => {
      expect(settotalPrice(shoppingBasket)).not.toStrictEqual(shoppingBasket);
    });

    it("Should add a totalPrice key to each object", () => {
      settotalPrice(shoppingBasket).forEach((item) => {
        expect(item).toHaveProperty("totalPrice");
      });
    });

    it("Should accurately total each shopping item", () => {
      expect(settotalPrice(shoppingBasket).sort((a, b) => a.price - b.price)).toStrictEqual(
        shoppingBasketWithTotals.sort((a, b) => a.price - b.price)
      );
    });
  });

  describe("totalShoppingBasket() tests", () => {
    it("Should return a number", () => {
      expect(typeof totalShoppingBasket(shoppingBasketWithTotals)).toBe("number");
    });

    it("Should accurately total all objects", () => {
      expect(totalShoppingBasket(shoppingBasketWithTotals)).toBe(185);
    });
  });
});
