
function getActiveUsers(people) {
  return people.filter(isActive);
}

function isActive(person) {
  return person.isActive;
}

function findMatchingEyeColours(people, sourcePerson) {
  if(sourcePerson != undefined && ('eyeColor' in sourcePerson)) {
    return people.filter(filter_matchesEyeColour(sourcePerson));
    }
  return [];
  }

function filter_matchesEyeColour(person2) {
  return function(person1) {
    return (person1.eyeColor == person2.eyeColor) && (person1.id != person2.id);
  };
}

function getEmailAddress(people, id){
  var result = people.find(function(person) {
    return person.id==id;
  });

  return (result) ? result.email : undefined;
  
}

function getActiveUsersWithInvalidEmail(people) {
    var activeUsers = getActiveUsers(people);
    return activeUsers.filter(filter_hasInvalidEmail);
}

function filter_hasInvalidEmail(person) {
  if ('email' in person) return (!person.email.includes('@'));
      return true;
}

function addRandomMobileNumbers(people){
  return people.map(function(person) {
    person.mobileNumber = generateRandomMobileNumber();
    return person;
  });
}

function addSpaceToString(string, position) {
  return string.slice(0, position) + " " + string.slice(position);
}

function addLeading0(integer, length) {
  return ("0".repeat(length) + integer).slice(-length);
}

function generateRandomMobileNumber() {
  var nineDigitNumber = getRandomInteger(9);
  var paddedNumber = addLeading0(nineDigitNumber, 9);
  return "07" + addSpaceToString(paddedNumber, 3);
}

function getRandomInteger(digits) {
  return Math.floor(Math.random() * Math.pow(10, digits));
}

module.exports = {
  getActiveUsers: getActiveUsers,
  findMatchingEyeColours: findMatchingEyeColours,
  getEmailAddress: getEmailAddress,
  getActiveUsersWithInvalidEmail: getActiveUsersWithInvalidEmail,
  addRandomMobileNumbers: addRandomMobileNumbers
};