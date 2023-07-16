let time_el = document.querySelector(".time");
let start_el = document.querySelector(".Start");
let stop_el = document.querySelector(".Stop");
let reset_el = document.querySelector(".Reset");

let seconds =0;
let interval =null;


// Timer 
function timer (){
    seconds++;

    let hours=Math.floor( seconds/(60*60));
    let minutes = Math.floor((seconds-(hours*60*60))/60);
    let second=seconds%60;
    if(second<10) second="0"+second;
    if(minutes<10) minutes="0"+ minutes;
    if(hours<10) hours="0"+hours;

    time_el.innerHTML=`${hours}:${minutes}:${second}`;
}

//Start The watch
function start(){
    if(interval){
        return
    }
    interval=setInterval(timer,1000);

}
start_el.addEventListener("click",start);

//Stop The Watch
function stop(){
    clearInterval(interval);
    interval=null;
}
stop_el.addEventListener("click",stop);

//Reset The Watch
function reset(){
    stop();
    seconds=0 ;
    time_el.textContent ="00:00:00";
}
reset_el.addEventListener("click",reset);

