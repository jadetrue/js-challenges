var data = require("./js5-data");
var solution = require("./js5-solution");
if (typeof __CHALLENGE__ !== "undefined" && __CHALLENGE__)
  solution = require("./js5-challenge");
var people = data.people;

test("getActiveUsers", function() {
  var result = solution.getActiveUsers(people);
  expect(result.length).toBe(3);
  expect(result[0].name).toBe("Estrada Nolan");
  expect(result[1].name).toBe("Laverne Andrews");
});

test("findMatchingEyeColours", function() {
  expect(solution.findMatchingEyeColours(people, people[0]).length).toBe(1);
  expect(solution.findMatchingEyeColours(people, people[0])[0].name).toBe(
    "Laverne Andrews"
  );
  expect(solution.findMatchingEyeColours(people, people[5]).length).toBe(0);
  expect(solution.findMatchingEyeColours(people, people[4])[0].name).toBe(
    "Hull Woodward"
  );
  expect(solution.findMatchingEyeColours(people, people[1]).length).toBe(0);
});

test("getEmailAddress", function() {
  expect(solution.getEmailAddress(people, 2321)).toBe(
    "mariastanley@eyeris.com"
  );
  expect(solution.getEmailAddress(people, 5151)).toBeUndefined();
  expect(solution.getEmailAddress(people, 4138)).toBeUndefined();
});

test("getActiveUsersWithInvalidEmail", function() {
  var result = solution.getActiveUsersWithInvalidEmail(people);
  expect(result.length).toBe(2);
  expect(result[0].name).toBe("Laverne Andrews");
  expect(result[1].name).toBe("Maria Stanley");
});

test("addRandomMobileNumbers", function() {
  var regex = new RegExp(/^(07\d{3}\s\d{6}$)/);
  var result = solution.addRandomMobileNumbers(people);
  for (var index = 0; index < people.length; index++) {
    var mobile = result[index].mobileNumber;
    expect(regex.test(mobile)).toBeTruthy();
  }
});

test("addRandomMobileNumbers - random number", function() {
  var mockMath = Object.create(global.Math);
  mockMath.random = function() {
    return 0.123456789;
  };
  global.Math = mockMath;
  var result = solution.addRandomMobileNumbers(people);
  expect(result[0].mobileNumber).toBe("07123 456789");
});

test("addRandomMobileNumbers - random number", function() {
  var mockMath = Object.create(global.Math);
  mockMath.random = function() {
    return 0.012345678;
  };
  global.Math = mockMath;
  var result = solution.addRandomMobileNumbers(people);
  expect(result[0].mobileNumber).toBe("07012 345678");

  mockMath.random = function() {
    return 0.002345678;
  };
  global.Math = mockMath;
  result = solution.addRandomMobileNumbers(people);
  expect(result[0].mobileNumber).toBe("07002 345678");

  mockMath.random = function() {
    return 0.000045678;
  };
  global.Math = mockMath;
  result = solution.addRandomMobileNumbers(people);
  expect(result[0].mobileNumber).toBe("07000 045678");
});
