setInterval(setClock, 1000);

function setClock() {
    const currentDate = new Date();
    const secondsRatio = currentDate.getSeconds() / 60;
    // console.log(currentDate.getSeconds());
    // console.log('currentDate.getSeconds() / 60', currentDate.getSeconds() / 60);
    const minutesRatio = (secondsRatio + currentDate.getMinutes()) / 60;
    // console.log(currentDate.getMinutes())
    // console.log('currentDate.getMinutes() / 60', currentDate.getMinutes() / 60);
    const hoursRatio = (minutesRatio + currentDate.getHours()) / 12

}
// setClock();

