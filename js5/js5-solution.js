function filter(array, func) {
  var filteredArray = [];
  for(var index = 0; index < array.length; index++){
    if (func(array[index])) filteredArray.push(array[index]);
  }
  return filteredArray;
}

exports.getActiveUsers = function(people) {
  return filter(people, function(person) {
    return person.isActive;
  });
};

exports.findMatchingEyeColours = function(people, sourcePerson){ // takes person object
 var matches = [];
 if(sourcePerson != undefined && sourcePerson.hasOwnProperty('eyeColor')){
   matches = filter(people, function(person) {
    return (person.eyeColor == sourcePerson.eyeColor && person.id != sourcePerson.id);
   });
  }
return matches;
};

exports.getEmailAddress = function(people, id){
  for(var personIndex = 0; personIndex < people.length; personIndex++){
      var person = people[personIndex];
      if(person.id==id){
          return person.email;
      }
    }
};

exports.getActiveUsersWithInvalidEmail = function(people) {
    var activeUsers = exports.getActiveUsers(people);
    return filter(activeUsers, function(person) {
      if (person.hasOwnProperty('email')) return (!person.email.includes('@'));
      return true;
    });
    
};

exports.addRandomMobileNumbers = function(people){
  for(var index = 0; index < people.length; index++){
    people[index].mobileNumber = generateRandomMobileNumber();
  }
  return people;
};

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