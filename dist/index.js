"use strict";
class PaymentProcessor {
    validatePayment(amount) {
        return amount > 0;
    }
}
class CreditCardProcessor extends PaymentProcessor {
    processPayment(amount) {
        if (this.validatePayment(amount)) {
            console.log(`Processing credit card payment of $${amount}`);
        }
    }
}
class PayPalProcessor extends PaymentProcessor {
    processPayment(amount) {
        if (this.validatePayment(amount)) {
            console.log(`Processing PayPal payment of $${amount}`);
        }
    }
}
const creditCard = new CreditCardProcessor();
creditCard.processPayment(100);
const paypal = new PayPalProcessor();
paypal.processPayment(50);
//# sourceMappingURL=index.js.map