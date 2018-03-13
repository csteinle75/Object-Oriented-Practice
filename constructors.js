// Hey PunchCode Hackers! Enjoy!
// Make sure to open your js consoles!

//          __  _ ___ __  _
//   __  __/ /_(_) (_) /_(_)__  _____/
// / /_/ / /_/ / / / /_/ /  __(__  )
// \__,_/\__/_/_/_/\__/_/\___/____/

// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true
function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}

//                          __                  __
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  )
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/
//
// Only add code to *THIS* section!


function Dog (anObject){
  //default property values
  this.color = '';
  this.hungry = true;
  this.status = 'normal';
  //setting property values
  if (typeof anObject === 'object'){
    anObject.hasOwnProperty('color') ? this.color = anObject.color : this.color = ''
    anObject.hasOwnProperty('hungry') ? this.hungry = anObject.hungry : this.hungry = true
    anObject.hasOwnProperty('status') ? this.status = anObject.status : this.status = 'normal'
    anObject.hasOwnProperty('owner') ? this.owner = anObject.owner : undefined
  } 
}

function Human(anObject) {
  //default property values
  this.cool = false;
  //setting property values
  if (typeof anObject === 'object'){
    anObject.hasOwnProperty('cool') ? this.cool = anObject.cool : this.cool = false
  }
}

Human.prototype.pet = function(aDog){
  aDog.status = 'happy'
}
Human.prototype.feed = function(aDog){
  aDog.hungry = false 
}


//class variation
/*
class Dog {
  constructor(anObject){
    this.color = '';
    this.hungry = true;
    this.status = 'normal';
    if (typeof anObject === 'object'){
      anObject.hasOwnProperty('color') ? this.color = anObject.color : this.color = ''
      anObject.hasOwnProperty('hungry') ? this.hungry = anObject.hungry : this.hungry = true
      anObject.hasOwnProperty('status') ? this.status = anObject.status : this.status = 'normal'
      anObject.hasOwnProperty('owner') ? this.owner = anObject.owner : undefined
   } 
  }
}
class Human {
  constructor(anObject){
    this.cool = false;
    //setting property values
    if (typeof anObject === 'object'){
      anObject.hasOwnProperty('cool') ? this.cool = anObject.cool : this.cool = false
    }
  }
  pet (aDog){
    aDog.status = 'happy'
  }
  feed (aDog){
    aDog.hungry = false
  }
}
*/

//Object.create() variation
/*
const Dog = {
  color: '',
  hungry: true,
  status: 'normal'
}

const Human = {
  cool: false,
  pet: aDog => aDog.status = 'happy',
  feed: aDog => aDog.hungry = false
}

var sadie = Object.create(Dog)
sadie.color = 'black'
sadie.hungry = false

var moonshine = Object.create(Dog)
moonshine.color = 'blue-red'

var atticus = Object.create(Dog)

var mason = Object.create(Human)
var julia = Object.create(Human)
julia.cool = true
*/

//        __
//   ____/ /___  ____ ______
//  / __  / __ \/ __ `/ ___/
// / /_/ / /_/ / /_/ (__  )
// \__,_/\____/\__, /____/
//            /____/

var sadie = new Dog({
  color: "black",
  hungry: false
});

var moonshine = new Dog({
  color: "blue-red"
});

var atticus = new Dog();


//     __
//    / /_  __  ______ ___  ____ _____  _____
//   / __ \/ / / / __ `__ \/ __ `/ __ \/ ___/
//  / / / / /_/ / / / / / / /_/ / / / (__  )
// /_/ /_/\__,_/_/ /_/ /_/\__,_/_/ /_/____/

var mason = new Human();

var julia = new Human({
  cool: true
});


//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D

it("should make Sadie happy when Mason pets her", function(){
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function(){
  expect(sadie.color).toBe('black');
});

it("should be make Moonshine hungry and Sadie not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function(){
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});


it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function(){
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function(){
  sadie.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});