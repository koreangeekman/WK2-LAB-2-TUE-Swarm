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

// basic draw to html field, add per person
function draw() {
  people.forEach(person => document.getElementById(person.location).innerText += person.picture);
}
// initial draw
draw()

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

  people.forEach(person => {
    if (person.location == location && person.picture != '🦇') {
      person.picture = '🦇';
    }
  });

  if (checkWin()) {
    window.alert('You Win!')
    reset();
    return
  }
  redraw(); // doubles the redraw if win condition
}

// check win condition - returns boolean
function checkWin() {
  let normies = people.filter(person => person.picture != '🦇');
  if (!normies.length) { return true; }
}

// empty draw points and redraw after position changes
function redraw() {
  clearLocations();
  relocate();
  draw();
  console.log('redrawn')
}

function reset() {
  newCitizens();
  redraw();
}