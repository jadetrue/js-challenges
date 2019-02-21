
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

let addSpaceToString = (string, position) => string.slice(0, position) + " " + string.slice(position);
let addLeading0 = (integer, length) => ("0".repeat(length) + integer).slice(-length);
let getRandomInteger = (digits) => Math.floor(Math.random() * Math.pow(10, digits));

function generateRandomMobileNumber() {
  let nineDigitNumber = getRandomInteger(9);
  let paddedNumber = addLeading0(nineDigitNumber, 9);
  return "07" + addSpaceToString(paddedNumber, 3);
}

export function addRandomMobileNumbers(people){
  return people.map((person) => {
    person.mobileNumber = generateRandomMobileNumber();
    return person;
  });
}
