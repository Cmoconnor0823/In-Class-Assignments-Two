var DigitalPet = function () {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
}
console.log("game on")

this.feed = function () {
    if (this.hungry === true) {
        console.log("Yummy")
        this.hungry = false;
        this.sleepy = true;
    }
    else {
        console.log(" No More! I'm Full")
    }
};


this.rest = function () {
    if (this.sleepy === true) {
        console.log("ZZZzzzzzZZZZzzzzzZZZzzzz")
        this.sleepy = false;
        this.bored = true;
        this.birthday();
    }
    else {
        console.log("Good Morning Sunshine!!! ^.^")
    }
    ;
}

this.play = function () {
    if (this.bored === true) {
        console.log("Come On! Pleas Play with me!");
        this.bored = false;
        this.hungry = true;
    }
    else {
        console.log("I'm done playing for now, maybe later?")

    }
};

this.birthday = function () {
    this.age++;
    console.log("Happy Birthday to me! I am " + this.age + "sleep cycles old!")
}

var dog = new DigitalPet();

dog.outside = false;

dog.howl = function () {
    console.log("Ahwoooohhhh");
};

dog.letOut = function () {
    if (this.outside === false){
        console.log("Yay Outside Outside Outside!!!!!")
    this.outside = true;
    this.howl();
}
else {
    console.log("But I am outside silly")
}
};
