const dag = 6;
const hr = document.querySelector('#hr');
const mn = document.querySelector('#mn');
const sc = document.querySelector('#sc');

setInterval(() => {

    console.log('hi');
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * dag;
    let ss = day.getSeconds() * dag;
    hr.style.transform = `rotateZ(${(hh) + (mm / 12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;
    sc.style.transform = `rotateZ(${ss}deg)`;

}, 1000)
