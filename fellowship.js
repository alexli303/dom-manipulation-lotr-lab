// Project Name: Design CSS
// Client: Personal Web
// Author: Alex Li
// Developer @GA in DENVER
// console.log("Linked.");

// Dramatis Personae
var hobbits = [
  'Frodo Baggins',
  'Samwise \'Sam\' Gamgee',
  'Meriadoc \'Merry\' Brandybuck',
  'Peregrin \'Pippin\' Took'
];

var buddies = [
  'Gandalf the Grey',
  'Legolas',
  'Gimli',
  'Strider',
  'Boromir'
];

var lands = ['The Shire', 'Rivendell', 'Mordor'];
var body = document.querySelector('body');


// Part 1
var centerOfWorld = document.createElement('section');
centerOfWorld.setAttribute("id", "middle-earth");

function makeMiddleEarth() {
  // var centerOfWorld = document.createElement('section');
  // centerOfWorld.setAttribute("id", "middle-earth");
  // create a section tag with an id of middle-earth
  // inside, add each land as an article tag
  // inside each article tag include an h1 with the name of the land
  // append middle-earth to your document body

  for (var i = 0; i < lands.length; i++){
    var landElement = document.createElement('h1');
    var article = document.createElement('article');
    landElement.innerHTML = lands[i];
    article.append(landElement);
    centerOfWorld.append(article);
    body.append(centerOfWorld)
  }
}

makeMiddleEarth();


// Part 2

function makeHobbits() {
  // display an unordered list of hobbits in the shire (which is the first article tag on the page)
  // give each hobbit a class of hobbit

  var firstlocation = centerOfWorld.querySelector('h1');
  var list = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++){
    var hobbitsElements = document.createElement('li');
    hobbitsElements.innerHTML = hobbits[i];
    hobbitsElements.className = "hobbit";
    list.append(hobbitsElements);
    firstlocation.append(list);
  }
}

makeHobbits()

// Part 3

function keepItSecretKeepItSafe() {
  // create a div with an id of 'the-ring'
  // give the div a class of 'magic-imbued-jewelry'
  // add an event listener so that when a user clicks on the ring, the nazgulScreech function (provided) is invoked
  // add the ring as a child of Frodo
  var theRing = document.createElement('div');

  var Frodo = centerOfWorld.querySelector('li');
  theRing.setAttribute("id", "the-ring");
  theRing.className = "magic-imbued-jewelry";
  theRing.addEventListener("click",nazgulScreech)
  Frodo.appendChild(theRing);
}

keepItSecretKeepItSafe();

// Part 4


function makeBuddies() {
  // create an aside tag
  // attach an unordered list of the 'buddies' in the aside
  // insert your aside as a child element of rivendell
  var newAsideTag = document.createElement('aside');
  var list = document.createElement("ul");

  var rivendell = document.getElementsByTagName("h1")[1];

  for (var i = 0; i < buddies.length; i++){
    var friends = document.createElement('li');
    friends.innerHTML = buddies[i];
    list.append(friends);
    newAsideTag.append(list);
    rivendell.append(newAsideTag);

  }
}

makeBuddies()

// Part 5
function beautifulStranger() {
  // change the 'Strider' textnode to 'Aragorn'
  var strider = document.getElementsByTagName("li")[7];
  strider.innerHTML = 'Aragorn';
}

beautifulStranger()

// Part 6

function leaveTheShire() {
  // assemble the hobbits and move them to Rivendell
  var rivendell = document.getElementsByTagName("h1")[1];
  var list = document.createElement("ul");
  for (var i = 0; i < hobbits.length; i++){
    var hobbitsElements = document.createElement('li');
    hobbitsElements.innerHTML = hobbits[i];
    hobbitsElements.className = "hobbit";
    list.append(hobbitsElements);
    rivendell.append(list);
  }
}

leaveTheShire()


// Part 7


function forgeTheFellowShip() {
  // create a new div called 'the-fellowship' within rivendell
  // add each hobbit and buddy one at a time to 'the-fellowship'
  // after each character is added make an alert that they have joined your party
  var the_fellowship = document.createElement('div');
  var rivendell = document.getElementsByTagName("h1")[1];
  for (var i = 0; i < hobbits.length; i++){
    the_fellowship.innerHTML += hobbits[i];
    the_fellowship.innerHTML += buddies[i];
    //alert(hobbits[i] + " " + buddies[i]);
    rivendell.append(the_fellowship);
  }
}

//forgeTheFellowShip()


// Part 8

function theBalrog() {
  // change the 'Gandalf' textNode to 'Gandalf the White'
  // apply style to the element
  // make the background 'white', add a grey border
  var gandalf = document.querySelector("li");
  gandalf.textNode = "Gandalf the White";
  gandalf.background = "white";
}
//theBalrog();

// Part 9

function hornOfGondor() {
  // pop up an alert that the horn of gondor has been blown
  // Boromir's been killed by the Uruk-hai!
  // put a linethrough on boromir's name
  // Remove Boromir from the Fellowship
  alert("horn of gondor has been blown");
}


// Part 10

function itsDangerousToGoAlone(){
  // take Frodo and Sam out of the fellowship and move them to Mordor
  // add a div with an id of 'mount-doom' to Mordor
}


// Part 11

function weWantsIt() {
  // Create a div with an id of 'gollum' and add it to Mordor
  // Remove the ring from Frodo and give it to Gollum
  // Move Gollum into Mount Doom
}


// Part 12

function thereAndBackAgain() {
  // remove Gollum and the Ring from the document
  // remove all the baddies from the document
  // Move all the hobbits back to the shire
}
