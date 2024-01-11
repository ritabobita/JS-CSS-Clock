
function setDate() {
    const now = new Date();
    const secondHand = document.querySelector('.second-hand')
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    //minutes
    const minuteHand = document.querySelector('.min-hand')
    const mins = now.getMinutes()
    const minuteDegrees = ((mins / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${minuteDegrees}deg)`;

    //hours
    const hourHand = document.querySelector('.hour-hand')
    const hours = now.getHours()
    const hourDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
}

setInterval(setDate, 1000);