// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.


// Create "Person" constructor function
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"


// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results

// TODO: answers

function Person(Name, Age, Hobby) {
    this.Name = Name;
    this.Age = Age;
    this.Hobby = Hobby;

}

Person.prototype.Speak = function () {
    return ` Hello, My name is ${this.Name} and I'm ${this.Age} years old, I love ${this.Hobby} `
}

const Me = new Person("abdikani", "19", "computer programming")
console.log(Me.Speak())

