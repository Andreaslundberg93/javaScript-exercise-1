let userNumber = 10;
let tries = 1;
let random = Math.floor(Math.random() * userNumber +1)
console.log(random)


number = prompt("Guess a number between 1-10")

while(number != random){
if(number > random){
    alert("The number is too high!")
    number = prompt("Try again!")

    }
    else if (number < random){
        alert("The number is too low!")
        number = prompt("Try again!")
        
    }
    tries = tries +1
   

}
alert("Correct! It took you "+ tries +" turns to get it right!")







