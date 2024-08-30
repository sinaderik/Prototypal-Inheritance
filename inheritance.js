class Person {
    talk() {
        console.log('talking...')
    }
}

const p1 = new Person
const p2 = new Person

Person.prototype.talk = function () {
    console.log('new way of talking')
}

// p1.talk()
// p2.talk()

console.log(p1.__proto__ === Person.prototype)

p1.__proto__.talk = function () {
    console.log('Im talking')
}
// p1.talk()
// p2.talk()

// when we use this keyword in constructor function to create method the method
// get copied to every one of instances that we have and if we have a bug in our function 
// we must modify the logic in all of the instances which is not reasonable 

function Animal() {
    this.walk = function () {
        console.log('walking...')
    }
}
const cat = new Animal()
const dog = new Animal()
cat.walk = function () {
    console.log('fast walking...')
}
cat.walk()
dog.walk()

// When you define your function on prototype and decide to change the logic 
// you need to change only its prototype and all of instances get update 

function AirPlane() {

}
AirPlane.prototype.fly = function () {
    console.log('flying...')
}
const plane1 = new AirPlane()
const plane2 = new AirPlane()

AirPlane.prototype.fly = function () {
    console.log('fly better...')
}

plane1.fly()
plane2.fly()