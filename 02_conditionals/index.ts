//? Conditional Statements in TypeScript
if (10 > 5) {
    console.log("10 is greater than 5");
} else if (10 < 5) {
    console.log("10 is less than 5");
} else {
    console.log("10 is equal to 5");
}

//? Ternary Operator
let age: number = 22 > 20 ? 22 : 20;
console.log(`Age is: ${age}`);

//? Switch Statement
let day: string = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the work week");
        break;
    case "Wednesday":
        console.log("Midweek day");
        break;
    case "Friday":
        console.log("End of the work week");
        break;
    case "Saturday":
        console.log("Weekend fun");
        break;
    case "Sunday":
        console.log("Rest day");
        break;
    default:
        console.log("Just another day");
        break;
}