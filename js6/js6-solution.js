
export function getActiveUsers(people) {
  return people.filter(person => person.isActive);
}

export function findMatchingEyeColours(people, sourcePerson){ // takes person object
 let matches = [];
 if(sourcePerson != undefined && sourcePerson.hasOwnProperty('eyeColor')){
   matches = people.filter(person => (person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id));
  }
return matches;
}

export function getEmailAddress(people, id){
 let result = people.find(person => (person.id == id) && ('email' in person));
 if (result) return result.email;
}

export function getActiveUsersWithInvalidEmail(people) {
    let activeUsers = getActiveUsers(people);
    return activeUsers.filter((person) => {
      if ('email' in person) return (!person.email.includes('@'));
      return true;
    });
    
};

export function addRandomMobileNumbers(people){
  return people.map((person) => {
    person.mobileNumber = generateRandomMobileNumber();
    return person;
  });
}

function addSpaceToString(string, position) {
  return string.slice(0, position) + " " + string.slice(position);
}

function addLeading0(integer, totalSize) {
  return ("0".repeat(totalSize) + integer).slice(-totalSize);
}

function generateRandomMobileNumber() {
  var nineDigitNumber = getRandomInteger(0, 1000000000);
  var paddedNumber = addLeading0(nineDigitNumber, 9);
  return "07" + addSpaceToString(paddedNumber, 3);
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
