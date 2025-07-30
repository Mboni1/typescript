import Deck from "./deck";
import { ICard } from "./type";
import { getBet, getDecision, getHandValue, getStrHand } from "./utils";

function playerTurn(playerHand: ICard[], deck: Deck): number {
    let handValue = getHandValue(playerHand);

    while (true) {
        const action = getDecision();
        if (action !== "hit") return handValue;

        const newCard = deck.deal(1)[0];
        playerHand.push(newCard);
        handValue = getHandValue(playerHand);
        console.log(`Your hand: ${getStrHand(playerHand)} (Total: ${handValue})`);

        if (handValue > 21) {
            return handValue;
        }
    }
}

function dealerTurn(dealerHand: ICard[], deck: Deck): number {
    let handValue = getHandValue(dealerHand);

    while (handValue < 17) {
        const newCard = deck.deal(1)[0];
        dealerHand.push(newCard);
        handValue = getHandValue(dealerHand);
    }
}
let dealerHand: Icard[] = [];
let playerHand: Icard[] = [];
const deck: Deck = new Deck();
let  balance = 100;

while (balance > 0){
    console.log(`\nPlayer funds $${balance}`);
    const bet = getBet(balance);
    balance -= bet;

        // Deal the cards
        deck.reset();
        playerHand = deck.deal(2);
        dealerHand = deck.deal(2);

        const playerValue = getHandValue(playerHand);
        const dealerValue = getHandValue(dealerHand);

    console.log(`Your hand: ${getStrHand(playerHand)} (Total: ${playerValue})`);
    console.log(`Dealer's hand: ${getStrHand(dealerHand, true)}`);
    if (playerValue === 21) {
        balance += bet * 2.5;
        console.log(`Blackjack! you won $${bet * 2.5}`);
        continue;
    } else if (dealerValue === 21) {
        console.log(`Dealer's hand: ${getStrHand(dealerHand)},(Total: 21)`);
        continue;
    }
    const finalPlayerValue = playerTurn(playerHand, deck);
    if (finalPlayerValue > 21) {
        console.log("You bust and lost...");
        continue;
    }
    const finalDealerValue = dealerTurn(dealerHand, deck);
    if(finalDealerValue > 21 || finalPlayerValue > finalDealerValue){
        balance += bet * 2;
        console.log(`Your won $${bet * 2}`);
    }
    else if (finalDealerValue === finalPlayerValue) {
        balance += bet 
        console.log("Push (tie).")
    }else {
        console.log("You lost to the dealer.")
    }
}
console.log(" You ran out of money!");