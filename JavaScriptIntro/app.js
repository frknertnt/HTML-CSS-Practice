
let userName = "furkan" + "ertantu";
let hobbies = ["Sports", "Cooking", "Reading"];
let job = {
    title: "Developer",
    place: "New York",
    salary: 50000
};

let age = 26;
let totalAdultYear;


function calculateAdultYears(userAge) {
    return userAge - 18;
}

console.log();

totalAdultYear = calculateAdultYears(age);
console.log(totalAdultYear);

age = 45;
totalAdultYear = calculateAdultYears(age);
console.log(totalAdultYear);

let person = {
    name: "Max", //Properties
    greet(){ // Method
        console.log("Hello");
    }
};

person.greet();