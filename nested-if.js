/*const money = 1000;
if (money > 800) {
    console.log("You have enough money.");
} else {
    if (money > 500) {
        console.log("You have a moderate amount of money.");
    }
    else {
        if (money > 200) {
            console.log("You have a small amount of money.");
        }
        else {
            console.log("You have very little money.");
        }
    }
}
*/
// TERNARRY OPERATOR
const price = 1000;
const isLeader = true;
price= isLeader=== true ? price - 200 : price;
const finalPrice = price > 500 ? price - 100 : price;
console.log(`The final price is: $${finalPrice}`);
