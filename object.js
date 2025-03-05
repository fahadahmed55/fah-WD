let person = {
    name : "jordrn",
    age : "9",
    city : "karachi",
}
console.log(person)
let personStr = JSON.stringify(person)
console.log(personStr);

let person1 = JSON.parse(personStr)
console.log(person1);