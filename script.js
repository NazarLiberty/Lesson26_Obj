// 2
let car = {
    brand: "Mitsubizi",
    model: "Evolution",
    year: 2009,
    "Average speed": 86
}
let alertObj = function (obj) {
    let keyOutput = ""
    for (let keyValue in obj) {
        if (typeof obj[keyValue] == "function") continue
        keyOutput += `${keyValue} - ${obj[keyValue]}
`
    }
    return alert(keyOutput);
}
car.seller = function (price) {
    this.price = `${price}$`;
};
let timeCalculate = function (distance, speed) {
    let hours = 0;
    let restTime = 0;
    let minutes = distance / (speed / 60); // min
    minutes = Math.floor(minutes);
    for (let i = minutes; i >= 60; i--) {
        if (i % 60 == 0) {
            hours++;
            minutes -= 60;
        }
    }
    for (let i = hours; i >= 1; i--) {
        if (i % 4 == 0) restTime++;
    }
    return `You need ${hours} hours and ${minutes} minutes, with ${restTime} hours of brake to beat this distance`;
}
let userDistance = prompt("Type the distance (km) you want to check with average speed")
alertObj(car)
alert(timeCalculate(userDistance, car["Average speed"]));
// 3

let theTime = {
    hours: 0,
    minutes: 0,
    seconds: 0
}
let alertTime = function (obj) {
    let keyValue;
    let keyOutput = "";
    for (keyValue in obj) {
        keyValue = obj[keyValue];
        if (keyValue < 10) keyValue = `0${keyValue}`;
        keyOutput.slice;
        if (keyOutput.length >= 6) {
            keyOutput += `${keyValue}`;
        }
        else keyOutput += `${keyValue}:`;
    }
    return keyOutput
}

let secondsAdder = (sec) => {
    theTime.seconds += sec;
    for (let i = theTime.seconds; i > 59; i--) {
        if (i % 60 == 0) {
            theTime.seconds -= 60;
            theTime.minutes++
        }
    }
}
let minutesAdder = (min) => {
    theTime.minutes += min;
    for (let i = theTime.minutes; i > 59; i--) {
        if (i % 60 == 0) {
            theTime.minutes -= 60;
            theTime.hours++
        }
    }
}
let hoursAdder = (hour) => {
    theTime.hours += hour;
}
alert(alertTime(theTime))
let userSecondsAdder = +prompt("Type how many seconds you want to add to yout timer")
let userMinutesAdder = +prompt("Type how many minutes you want to add to yout timer")
let userHoursAdder = +prompt("Type how many hours you want to add to yout timer")
secondsAdder(userSecondsAdder);
minutesAdder(userMinutesAdder);
hoursAdder(userHoursAdder);
alert(alertTime(theTime));