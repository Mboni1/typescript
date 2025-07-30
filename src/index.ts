
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
        console.log(`Dealer draws: ${newCard.value} of ${newCard.suit}`);
        console.log(`Dealer's hand: ${getStrHand(dealerHand)} (Total: ${handValue})`);
    }
    
    return handValue;
}

function playGame() {
    let dealerHand: ICard[] = [];
    let playerHand: ICard[] = [];
    const deck = new Deck();
    let balance = 100;

    while (balance > 0) {
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

        // Check for blackjacks
        if (playerValue === 21 && dealerValue !== 21) {
            const winnings = bet * 2.5;
            balance += winnings;
            console.log(`Blackjack! You won $${winnings}`);
            continue;
        } else if (dealerValue === 21) {
            console.log(`Dealer has blackjack! ${getStrHand(dealerHand)} (Total: 21)`);
            continue;
        }

        // Player's turn
        const finalPlayerValue = playerTurn(playerHand, deck);
        if (finalPlayerValue > 21) {
            console.log("You bust and lost...");
            continue;
        }

        // Dealer's turn
        const finalDealerValue = dealerTurn(dealerHand, deck);
        
        // Determine winner
        if (finalDealerValue > 21) {
            const winnings = bet * 2;
            balance += winnings;
            console.log(`Dealer busts! You won $${winnings}`);
        } else if (finalPlayerValue > finalDealerValue) {
            const winnings = bet * 2;
            balance += winnings;
            console.log(`You win! $${winnings}`);
        } else if (finalDealerValue === finalPlayerValue) {
            balance += bet;
            console.log("Push (tie).");
        } else {
            console.log("You lost to the dealer.");
        }
    }

    console.log("You ran out of money!");
}

// Start the game
playGame();