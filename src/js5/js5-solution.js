const getActiveUsers = people => people.filter(isActive);

const isActive = person => person.isActive;

const findMatchingEyeColours = (people, sourcePerson) => {
  return sourcePerson != undefined && "eyeColor" in sourcePerson
    ? people.filter(filter_matchesEyeColour(sourcePerson))
    : [];
};

const filter_matchesEyeColour = person2 => {
  return person1 => {
    return person1.eyeColor == person2.eyeColor && person1.id != person2.id;
  };
};

const getEmailAddress = (people, id) => {
  let result = people.find(person => {
    return person.id == id;
  });
  return result ? result.email : undefined;
};

const getActiveUsersWithInvalidEmail = people => {
  let activeUsers = getActiveUsers(people);
  return activeUsers.filter(filter_hasInvalidEmail);
};

const isValidEmail = text => text.indexOf("@") != -1;

const filter_hasInvalidEmail = person =>
  "email" in person ? !isValidEmail(person.email) : true;

const addRandomMobileNumbers = people => {
  return people.map(function(person) {
    person.mobileNumber = generateRandomMobileNumber();
    return person;
  });
};

const addSpaceToString = (string, position) =>
  string.slice(0, position) + " " + string.slice(position);

const repeat0 = times => {
  let repeatedString = "";
  while (times > 0) {
    repeatedString += "0";
    times--;
  }
  return repeatedString;
};

const addLeading0 = (integer, length) => {
  return (repeat0(length) + integer).slice(-length);
};

const generateRandomMobileNumber = () => {
  let nineDigitNumber = getRandomInteger(9);
  let paddedNumber = addLeading0(nineDigitNumber, 9);
  return "07" + addSpaceToString(paddedNumber, 3);
};

const getRandomInteger = digits => {
  return Math.floor(Math.random() * Math.pow(10, digits));
};

export {
  getActiveUsers,
  findMatchingEyeColours,
  getEmailAddress,
  getActiveUsersWithInvalidEmail,
  addRandomMobileNumbers
};
