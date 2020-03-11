export class Person {
  constructor(data) {
    this.isVegetarian = data.isVegetarian;
    this.name = data.name;
    this.age = data.age;
    this.height = data.height;
  }

  get canFitOnANameCard() {
    return this.name.length <= 6;
  }
  get lifeExpectancy() {
    return this.isVegetarian ? 90 : 95;
  }

  get yearsRemaining() {
    return this.lifeExpectancy - this.age;
  }

  get canRideOnARollercoaster() {
    return this.height >= 120;
  }

  get canBuyBeer() {
    return this.age >= 18;
  }

  getSummary() {
    const vegetarianMessage = this.isVegetarian
      ? "is a vegetarian"
      : "likes meat";
    const deadMessage =
      this.yearsRemaining < 0
        ? "should be dead"
        : "has " + this.yearsRemaining + " years to live";
    return (
      this.name +
      " " +
      vegetarianMessage +
      ", is " +
      this.height +
      "cm tall and " +
      deadMessage
    );
  }
}
