const citizens = [
  '🤵', '🙆‍♀️', '👷', '🤴', '🕵️', '👩‍🍳', '💂', '🧜‍♂️', '🏐', '👩‍⚕️', '🦹'
]

const locations = [
  '🏤', '🏥', '🏭', '🏢', '🏣'
]

const people = [{
  name: 'Jimbo',
  picture: '🤵',
  location: '🏤'
},
{
  name: 'Sammy',
  picture: '🙆‍♀️',
  location: '🏤'
},
{
  name: 'Michael',
  picture: '👷',
  location: '🏤'
},
{
  name: 'Robert',
  picture: '👷',
  location: '🏥'
},
{
  name: 'Terry',
  picture: '🤴',
  location: '🏥',
},
{
  name: 'Bill',
  picture: '🕵️',
  location: '🏥',
},
{
  name: 'Marie',
  picture: '👩‍🍳',
  location: '🏭',
},
{
  name: 'Mykeal',
  picture: '💂',
  location: '🏭',
},
{
  name: 'Phil',
  picture: '🧜‍♂️',
  location: '🏭',
},
{
  name: 'Wilson',
  picture: '🏐',
  location: '🏢',
},
{
  name: 'Wendy',
  picture: '👩‍⚕️',
  location: '🏢',
},
{
  name: 'Jeremy',
  picture: '🦹',
  location: '🏢',
}
]

let timeLeft = 8; // hrs till dawn
let hunter = "";

function trainHunter() {
  let hunterObj = people[arrayRNG(people)];
  console.log(hunterObj);
  hunter = hunterObj.name;
}
//initial hunter selection
trainHunter();

// basic draw to html field, add per person
function draw() {
  people.forEach(person => document.getElementById(person.location).innerText += person.picture);
  document.getElementById('hrs').innerText = timeLeft;
}

// empties html field
function clearLocations() {
  locations.forEach(location => document.getElementById(location).innerText = "");
}

// randomizes location, per person
function relocate() {
  people.forEach(person => person.location = locations[arrayRNG(locations)]);
}

// redefine citizen pictures at random
function newCitizens() {
  people.forEach(person => person.picture = citizens[arrayRNG(citizens)])
}

// RNG function for arrays - time to re- aRayNG :D
function arrayRNG(array) {
  if (array) {
    let rng = Math.floor(Math.random() * array.length)
    // console.log(array.length);
    // console.log('rng', rng)
    return rng;
  }
}
// calling function tests
// arrayRNG(locations)
// arrayRNG(people)

function attack(location) {
  console.log(location);
  timeLeft--;

  if (winCondition(location)) {
    console.log("You've converted everyone!")
    window.alert('You Win!')
    reset();
    return
  }

  if (loseCondition(location)) {
    window.alert('You Lose!');
    reset();
    return
  }

  if (!winCondition() && !loseCondition()) {
    console.log('!win !lose trigger - continues game')
    bite(location)
    redraw();
  }
}

function hunterCheck(location) {
  let hunterPresent = (people.find(person => person.location == location && person.name == hunter))
  if (hunterPresent) {
    console.log(`${hunterPresent.name}, the Vampire Hunter, is here!`);
    return (hunterPresent.name == hunter)
  }
}

// check win condition - if only 1 remains and is the hunter - returns true
function winCondition(location) {
  let normies = people.filter(person => person.picture != '🦇');
  if (normies.length <= 1 && hunterCheck(location)) {
    // console.log('win condition trigger')
    return true;
  }
}

function loseCondition(location) {
  if (hunterCheck(location) || timeLeft <= 0) {
    // console.log('lose condition trigger')
    if (timeLeft <= 0) {
      // console.log('lose condition trigger - out of time')
      return true
    }
    // console.log('lose condition trigger - vampire hunter on location')
    console.log('The vampire hunter got you!')
    return true
  }
}

function bite(location) {
  people.forEach(person => {
    if (person.location == location && person.picture != '🦇') {
      person.picture = '🦇';
      console.log('bitten')
      return
    }
  });
}

// empty draw points and redraw after position changes due to additive functions
function redraw() {
  clearLocations();
  relocate();
  draw();
  console.log('redrawn')
}

function reset() {
  newCitizens();
  timeLeft = 8;
  trainHunter()
  redraw();
}


// initial draw
draw();

// function initDraw() {
//   people.forEach(person => {
//     document.getElementById(person.location).innerText += person.picture;
//     console.log(people.picture)
//   })
// }
// initDraw()

// function position() {
//   locations.forEach(location => {
//     console.log(location)

//     let filteredPeople = people.filter(person => person.location == location)
//     // console.log(filteredPeople)

//     let pictures = filteredPeople.map(person => person.picture)
//     // console.log(pictures)

//     document.getElementById(location).innerText = pictures;
//   })
// }
// position()
