var time = 60;
var score = 0;
var hit;


function increaseScore(){
    score += 10;
    document.querySelector("#scoreval").textContent = score;
}

function getNewHit(){
    hit = Math.floor(Math.random()*10);
    document.querySelector("#hitval").textContent = hit;
}

function makeBubble(){
    var clutter = "";

    for(var i = 1; i<=102; i++){
        var rn = Math.floor(Math.random()*10)
        clutter += `<div class="bubble">${rn}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer(){
    var timer = setInterval(function () {
        if(time > 0){
            time--;
            document.querySelector("#timerval").textContent = time;
        } else {
            clearInterval(timer);
            document.querySelector("#pbtm").innerHTML = `<h1>Game Over!</h1>`;
        }
        
    }, 1000);
}

document.querySelector("#pbtm").addEventListener("click", function(dets){
     var clickedNum = Number(dets.target.textContent);
     if(clickedNum === hit){
        increaseScore();
        makeBubble();
        getNewHit();
     }
})

getNewHit();
runTimer();
makeBubble();
