import ICard from "./card";
import { IDealable ,Suit } from "./type";
import { shuffleArray } from "./utils";


class Deck implements IDealable {
    private deck: ICard[] = [];

    constructor() {
        this.reset()
    }
    reset() {
        const cards = this.makeDeck();
        this.deck = shuffleArray(cards);
    
    }
    deal (num: number): ICard[] {
        const dealtCards: ICard[] = [];
      
        for (let i = 0; i < num; i++) {
            const card = this.deck.pop();
            dealtCards.push(card!)
        }
        return dealtCards
    }
    private makeDeck() {
        const cards: ICard[] = []
        const suits = [Suit.Hearts, Suit.Diamonds, Suit.Clubs, Suit.Spades]
        for (let suit =0; suit < 4; suit++){
            for (let value = 1; value <= 13; value++) {
                const card = new ICard(value,suits[suit])
                cards.push(card);
            }
        }
        return cards
    }
}
export default Deck