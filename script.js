let hour = 0;
let minute = 0;
let second = 0;
let millisecond = 0;

let h = document.querySelector("#hour");
let minu = document.querySelector("#minute");
let seco = document.querySelector("#second");
let milli = document.querySelector("#millisecond");

let cron;

function start(){
    stop(); // evita intervalos duplicados
    cron = setInterval(timer, 10);
}

function timer (){
    millisecond += 10;

    if (millisecond === 1000){
        millisecond = 0;
        second++;
    }
    if (second === 60){
        second = 0;
        minute++;
    }
    if (minute === 60){
        minute = 0;
        hour++;
    }

    h.innerHTML = returnData(hour);
    minu.innerHTML = returnData(minute);
    seco.innerHTML = returnData(second);
    milli.innerHTML = millisecond.toString().padStart(3, "0");
}

function returnData(input) {
  return input < 10 ? `0${input}` : input;
}

function reset(){
    stop();
    hour = 0;
    minute = 0;
    second = 0;
    millisecond = 0;
    h.innerHTML = "00";
    minu.innerHTML = "00";
    seco.innerHTML = "00";
    milli.innerHTML = "000";
}

function stop(){
    clearInterval(cron);
}
