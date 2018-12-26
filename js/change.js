export function coffeeShop(coffeeType, payment) {
    let change = 0;
    let choose = coffeeType;
    let sum = payment;
    const coffee3in1 = 30;
    const coffeeBlack = 35;
    const coffeeMilk = 40;
    const latte = 45;

    if (choose === 1) {change = sum - coffee3in1}
    else if (choose === 2) {change = sum - coffeeBlack}
    else if (choose === 3) {change = sum - coffeeMilk}
    else if (choose === 4) {change = sum - latte}
    else if (choose >= 5) {change = sum}

    if (sum >= 100) {change = sum}

    return change;
}
console.log(coffeeShop(1,500));