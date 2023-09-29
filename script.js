let val1 = 0;
let val2 = 0;

const rollDice = () => {
    val1 = parseInt((Math.random()*6) + 1);
    val2 = parseInt((Math.random()*6) + 1);
    update1();
    update2();
    const sum = val1+val2;
    total.textContent = `Total: ${sum}`;
    
}

const update1 = () => {
    display1.textContent = val1;
}

const update2 = () => {
    display2.textContent = val2;
}

const rolling = document.querySelector("roll");
const totalAmount = document.querySelector("total");
roll.addEventListener("click", rollDice);