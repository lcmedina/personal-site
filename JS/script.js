function updateClock() {
    let today = new Date();
    let time = today.getHours() + ":" + today.getMinutes();
    document.getElementById('displayTime').innerHTML = time;
}
setInterval(updateClock, 1000);