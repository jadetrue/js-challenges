var data = require('./js5-data');
var solution = require('./js5-solution');
var people = data.people;

test('getActiveUsers', () => {
  var result = solution.getActiveUsers(people);
  expect(result.length).toBe(3);
  expect(result[0].name).toBe('Estrada Nolan');
  expect(result[1].name).toBe('Laverne Andrews');
});

test('findMatchingEyeColours', () => {
  expect(solution.findMatchingEyeColours(people, people[0]).length).toBe (1);
  expect(solution.findMatchingEyeColours(people, people[0])[0].name).toBe('Laverne Andrews');
  expect(solution.findMatchingEyeColours(people, people[5]).length).toBe(0);
  expect(solution.findMatchingEyeColours(people, people[4])[0].name).toBe('Hull Woodward');
  expect(solution.findMatchingEyeColours(people, people[1]).length).toBe(0);
});

test('getEmailAddress', () => {
  expect(solution.getEmailAddress(people, 2321)).toBe('mariastanley@eyeris.com');
  expect(solution.getEmailAddress(people, 5151)).toBeUndefined();
  expect(solution.getEmailAddress(people, 4138)).toBeUndefined();
});

test('getActiveUsersWithInvalidEmail', () => {
  var result = solution.getActiveUsersWithInvalidEmail(people);
  expect(result.length).toBe(2);
  expect(result[0].name).toBe('Laverne Andrews');
  expect(result[1].name).toBe('Maria Stanley');
});

test('addRandomMobileNumbers', () => {
  var regex = new RegExp(/^(07\d{3}\s\d{6}$)/);
  var result = solution.addRandomMobileNumbers(people);
  for(var index=0; index < people.length; index++) {
    var mobile = result[index].mobileNumber;
    expect(regex.test(mobile)).toBeTruthy();
  }
});
