console.log('test ahoy')

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

let filteredArray = [];

function draw() {
  people.forEach(person => {

    document.getElementById(person.location).innerText += person.picture;
    console.log(people.picture)
  })
}

initDraw()


function attack(location) {
  console.log(location);
}

// prompting for user input - save response to a variable
const promptedMsg = window.prompt("prompt message")