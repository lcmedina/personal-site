function updateClock() {
    let today = new Date();
    let min = today.getMinutes();
    if (min < 10) {
        min = `0${min}`;
    }
    let hour = today.getHours();
    let ampm = "AM";
    if (hour > 12) {
        hour -= 12;
        ampm = "PM";
    }
    let time = `${hour}:${min} ${ampm}`;
    document.getElementById('displayTime').innerHTML = time;
}
setInterval(updateClock, 1000);