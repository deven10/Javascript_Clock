
const second = document.getElementById('second');
const minute = document.getElementById('minute');
const hour = document.getElementById('hour');

set Interval(updateClock,1000);
function updateClock(){

    let day =new Date();
    let ss = day.getSeconds()*deg;
    let mm = day.getMinutes()*deg;
    let hh = day.getHours()*30;

    hour.style.transform = 'rotateZ(${hh+(mn/12)})';
    minute.style.transform = 'rotateZ(${mm}deg)';
    second.style.transform = 'rotateZ(${ss}deg)';
}

updateClock();



 