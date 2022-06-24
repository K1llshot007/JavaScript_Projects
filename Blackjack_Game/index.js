//make a dealer tab
const player = {
    name: "Abhinav",
    chips:500
}
let cards = []
let index = 0
let sum  = 0
let message = ""
let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let playerEl = document.getElementById("player-el")
let freshCard = 0
let isAlive = false

playerEl.textContent = player.name + " : $" + player.chips

cardGenerator = () => {
    freshCard = Math.floor(Math.random()*13) + 1
    if (freshCard === 1) {
        cards.push(11)
    } else if(freshCard>10){
        cards.push(10)
        
    }
    else{
        cards.push(freshCard)
    }
    // cards.push(freshCard)
    console.log(freshCard)
}

startGame = () => {
    
    cardGenerator()
    cardGenerator()
    cardsEl.textContent += cards[index] + " "
    
    index++
    cardsEl.textContent += cards[index] + " "
    adder()
    renderGame()
    index++
    document.getElementById("error-msg").textContent = "Happy Playing"

}

newCard = () => {
    

    if (sum === 0 || sum>=21) {
        isAlive = false
        document.getElementById("error-msg").textContent = "Sorry you Can't draw another card"
                
    } else {
        isAlive=true
        sum=0
        cardGenerator()
        cardsEl.textContent += cards[index] + " "
        adder()
        // sum += newCard
        renderGame()
        index++
        document.getElementById("error-msg").textContent = "Happy Playing"

    }

}
adder = () => {
    for (let sumIndex = 0; sumIndex < cards.length; sumIndex++) {
        sum += cards[sumIndex];
        console.log(sum)
        
    }
    console.log(sum)
    // sum += cards[index]
    sumEl.textContent = "Sum: " + sum
    
}

renderGame = () => {
    /*need to add numbers as soon as they are generated*/
    //first get the numbers from array
    //add the numbers as they are entered like displaying cards

    if (sum < 21) {
        console.log("Do you want to draw another card")
        message = "Do you want to draw another card"
        isAlive =true
    
    }
    else if (sum === 21) {
        console.log("BlackJAck !!")
        // let hasBlackjack = false
        message = "Blackjack !!"
        isAlive=false
    }
   
    
    else {
        console.log("Sorry")
        isAlive = false
        message = "Sorry"
        
    }
    
    messageEl.textContent = message
}

checkGameCondition = () => {
    
}

reset = () => {
    messageEl.textContent = "Want to play Blackjack ??"
    sum = 0
    sumEl.textContent = "Sum: "
    index = 0
    cardsEl.textContent = "Cards: "
    cards=[]
}

console.log(sum)
console.log(index)
console.log(cards)
