
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
  })
};

function generateRandomMobileNumber() {
  var prefix="07";
  var firstBit=getRandomInteger(100, 1000);
  var secondBit=getRandomInteger(100000, 1000000);
  return prefix + firstBit + " " + secondBit;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min) ) + min;
}
