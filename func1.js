// function addTwoNumbers(num1,num2){
//     console.log(num1+num2*num2);

// }
// addTwoNumbers(3.142,6)

// function areaofcircle(pi,radius){
//      return (pi*radius*2)
// }
// console.log(areaofcircle(3.142,16))
        
// function celcius_farhenhiet(f){
//     return 9/5*(f)+32
// }
// console.log(celcius_farhenhiet(5));


// function LoginUserMessage(username){
//     if (username===undefined){
//         console.log('PLEASE ENTER A USER NAME');
//         return
//     }
//     console.log(`${username} just logged in`)
// }
// LoginUserMessage('ronaldo');
// let username;
// username="anything"
// console.log(username);
         
function checkoddeven(num){

    if(num==0){
        return "0";
    }
    else if(num%2==0){
        return "Even";
    }
    else{
        return "odd"
    }
}
console.log(checkoddeven(0))
