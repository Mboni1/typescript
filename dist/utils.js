"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getDecision = getDecision;
exports.getHandValue = getHandValue;
exports.shuffleArray = shuffleArray;
exports.getBet = getBet;
exports.getStrHand = getStrHand;
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
function getDecision() {
    while (true) {
        const decision = prompt("Your action: (hit/stand): ").toLowerCase();
        if (decision === "stand" || decision === "hit")
            return decision;
        console.log("Please enter either 'hit' or 'stand'");
    }
}
function getHandValue(cards) {
    let value = 0;
    let aces = 0;
    for (const card of cards) {
        if (card.value === 1) {
            aces++;
            continue;
        }
        value += Math.min(card.value, 10);
    }
    if (aces === 0)
        return value;
    if (value >= 11)
        return value + aces;
    return value + 11 + (aces - 1);
}
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}
function getBet(balance) {
    while (true) {
        const bet = prompt("Enter your bet: ");
        try {
            const numBet = Number(bet);
            if (numBet > 0 && numBet <= balance) {
                return numBet;
            }
            console.log(`Invalid bet. You have $${balance} available.`);
        }
        catch (_a) {
            console.log("Please enter a valid number.");
        }
    }
}
function getStrHand(hand, hideSecondCard = false) {
    let str = "";
    for (const [idx, card] of hand.entries()) {
        if (idx !== 0)
            str += ", ";
        if (idx === 1 && hideSecondCard) {
            str += "[hidden]";
            break;
        }
        str += `${getCardName(card.value)} of ${card.suit}`;
    }
    return str;
}
function getCardName(value) {
    switch (value) {
        case 1: return "Ace";
        case 11: return "Jack";
        case 12: return "Queen";
        case 13: return "King";
        default: return value.toString();
    }
}
//# sourceMappingURL=utils.js.map