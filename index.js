

function writeCards(name, event) {
    const cards = [];
    for (let i = 0; i < name.length; i++ ) {
       cards.push (`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return cards;
}
writeCards(cards)

let count = 10

function countDown(count) {
    while(count >= 0)
    console.log(count--)
}
