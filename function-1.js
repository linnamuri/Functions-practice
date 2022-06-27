//string methods
let johnSnowHealth = 100
//johnSnowHealth = 100 + ''
johnSnowHealth = String(johnSnowHealth)
console.log(johnSnowHealth)

let theWinnerIs = 'Jamie is the winner'

let newWinner = theWinnerIs.replace('Jamie','John')
console.log(newWinner)

//let newWinner=theWinnerIs.toLowerCase().replace('jamie','john')
//console.log(newWinner)
//convert-string-to-kbab-case
//convert it to lower case
//newWinnerLower = newWinner.toLowerCase()
//newWinner = newWinner.toLowerCaase().replaceAll(',"-')

//let newWinnerLower = newWinner.toLowerCase()
//let newWinnerSplit = newWinnerLower.split(' ')
//let newWinnerKebab = newWinnerSplit.join('-')

//console.log(newWinner,'-------------',newWinnerKebab)


// you can chain methods ...inified by chaining commands

//let newWinnerKebab = newWinner.toLocaleLowerCase().split('').john("-")

//console.log(newWinner,'-------------',newWinnerKebab)


//functions
//lets create a function that will check to see if John's alive

function isJohnAlive()
{
    if(johnSnowHealth>0){
    console.log("john is alive")
    } else{
        console.log("Rip jon snow")
    }
}

isJohnAlive()

//lets create a function that will be used every time jon is attacked

function surpriseAttack(attack)
{
    johnSnowHealth -= attack
    isJohnAlive()
}

surpriseAttack(20)
surpriseAttack(34)

//create a function that allows two people to greet each other

function greeting(person1,person2)
{
console.log(`${person1}  and ${person2} say hello to each other`)
}

greeting("isha","Arya")
greeting("stacy",'john')
