
const people = ['Guadalupe', 'Ollie', 'Aki'];

function writeCards(namesArr, eventName){
    const messages=[]

    for(let i=0;i<namesArr.length;i++){
        messages.push(`Thank you, ${people[i]}, for the wonderful ${eventName} gift!`)
        console.log(messages);
    }
    return messages;
}

writeCards(people, "surprise")

function countDown(num) {
    while (num >= 0) {
        console.log(num)
        num--
    }
    
}
countdown()