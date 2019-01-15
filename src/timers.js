const john = 'John';
const arya = 'Arya';
const sensa = 'Sensa';
//const forTheNorth = 'ForTheNorth';
const say = hero => sentence => console.log(`${hero} says : ${sentence}`);
const johnSay = say(john); // may be used this way setTimeout(johnSay, 1000, 'hello');
const aryaSay = say(arya);
const sensaSay = say(sensa);


const interval = setInterval(sensaSay, 1000, 'For the north');
setTimeout(() => {
    johnSay('hello Ladies Stark');
    setTimeout(aryaSay, 0, 'thank you for needle');
}, 2000)
setTimeout(() => clearInterval(interval), 10000)

//const sensaSayN = say(forTheNorth);
//const q1 = setInterval(setTimeout(sensaSayN, 1000), 10000);
//clearTimeout(q1);




