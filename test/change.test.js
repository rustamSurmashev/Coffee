import {coffeeShop} from "../js/change";

test('Should show change', () =>{
    const payment = 500;
    const coffeeType = 4;
    const result = coffeeShop(coffeeType, payment);
    expect(result).toBe(499);
   });
