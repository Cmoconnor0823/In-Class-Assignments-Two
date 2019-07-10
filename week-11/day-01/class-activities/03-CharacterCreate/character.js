function character(name, profession, gender, age, strength, hp, ps) {
    this.name = name;
    this.profession = profession;
    this.gender = gender;
    this.age = age;
    this.strength = strength;
    this.hp = hp;
    this.ps = function () {
        console.log(this.name + " name")
        console.log(this.profession + " profession")
        console.log(this.gender + " gender")
        console.log(this.age + " age")
        console.log(this.strength + " stregnth")
        console.log(this.hp + " hp")
        console.log("\n-------------\n");
    }
};

var IronMan = new character("Tony", "Scientist", "Male", 30, 50, 100);
var Captain = new character("Steve", "Captain", "Male", 70, 50, 150);

IronMan.ps();
Captain.ps();

function isAlive(character) {
    if (character.hp > 0) {
        console.log(character.name + " is still Alive!");
        console.log("\n-------------\n");
        return true;
    }
    console.log(this.name + " Died");
    console.log("\n-------------\n");
    return false;
};

function attack(character2) {
character2.hp -= this.strength;
}
isAlive(IronMan);
isAlive(Captain);

console.log("\n-------------\n");

character.attack(character2);