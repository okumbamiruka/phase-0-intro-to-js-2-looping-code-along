// Code your solutions in this file
function writeCards(names, surprise) {
    let cards = [];
    for (let i = 0; i < names.length; i++) {
        let message = `Thank you, ${names[i]}, for the wonderful ${surprise} gift!`;
        cards.push(message);
    }
    return cards;
}


function countDown(num) {
    while (num >= 0) {
        console.log(num);
        num--;
    }
}

countDown(10)