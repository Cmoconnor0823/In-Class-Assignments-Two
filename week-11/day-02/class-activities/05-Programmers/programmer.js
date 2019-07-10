
function programmer(name, job, age, lang){
    this.name = name;
    this.job = job;
    this.age = age;
    this.lang = lang;
    this.printInfo = function(){
        console.log(this.name + " name");
        console.log(this.job + " job");
        console.log(this.age + " age");
        console.log(this.lang + " lang");
    };
    
}

var jamie = new programmer("Jamie", "student", "22", "JavaScript")

jamie.printInfo();