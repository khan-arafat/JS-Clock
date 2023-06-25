const secondHand = document.querySelector('.sec-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');
function setDate(){
    const now = new Date();
    const sec = now.getSeconds();
    const secDegrees = ((sec/60)*360) + 90;
    secondHand.style.transform = `rotate(${secDegrees}deg)`;

    const mins = now.getMinutes();
    const minDegrees = ((mins/60)*360) + 90;
    minHand.style.transform = `rotate(${minDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours/12)*360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);