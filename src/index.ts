const items = [
  { price: 2 },
  { quantity: 4 },
  { discount: 0.1 }
];

export function calculateTotal(
    price:number,
    quantity:number,
    discount:number
): number {
    const result= price * quantity *(1-discount);
    console.log("calculatedTotal:",result);
    return result;
}
