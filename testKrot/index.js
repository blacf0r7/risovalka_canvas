let hours = document.getElementById("hours");
let min = document.getElementById("minutes");
let seconds = document.getElementById("seconds");
let start  = document.getElementById("start")
let inputs = document.getElementsByClassName("input-time");

// console.log("inputi", inputs);
// ДОВЕСТИ ДО УМА
start.onclick = () => {
    let h = inputs[0].value;
    let m = inputs[1].value;
    let s = inputs[2].value;
    const timer = setInterval(() => {
        seconds.innerText = s;
        min.innerText = m;
        hours.innerText = h;
        s = s - 1;
        if (s == 0) {
            m--;
            s = 60;
        }
        if (m == 0) {
            h--;
            m = 60;
        }
        if (h < 0) {
            clearInterval(timer);
            seconds.innerText = 0;
            min.innerText = 0;
            hours.innerText = 0;
        }
    }, 1000);
}




