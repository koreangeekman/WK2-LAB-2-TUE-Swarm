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

function draw() {
  people.forEach(person => document.getElementById(person.location).innerText += person.picture);
}
// initial draw
draw()

function relocate() {
  people.forEach(person => person.location = locations[arrayRNG(locations)]);
}

function clearLocations() {
  locations.forEach(location => document.getElementById(location).innerText = "");
}

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

  clearLocations();
  relocate();
  draw();
}
