abstract class PaymentProcessor {
  abstract processPayment(amount: number): void;
  
  validatePayment(amount: number): boolean {
    return amount > 0;
  }
}

class CreditCardProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    if (this.validatePayment(amount)) {
      console.log(`Processing credit card payment of $${amount}`);
    }
  }
}

class PayPalProcessor extends PaymentProcessor {
  processPayment(amount: number): void {
    if (this.validatePayment(amount)) {
      console.log(`Processing PayPal payment of $${amount}`);
    }
  }
}

// Usage
const creditCard = new CreditCardProcessor();
creditCard.processPayment(100);

const paypal = new PayPalProcessor();
paypal.processPayment(50);