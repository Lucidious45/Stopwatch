class Stopwatch{
    constructor(){
        var hr = 0;
        var min = 0;
        var sec = 0;
        var stoptime = true;
        

/*         this.status = "paused";
 */    }


    start () {
/*         if (this.status = "paused") {
            this.status = "running"
            this.time = setInterval(this.runningTime, 100);
        } else {
            console.log("A timer has already been started.")
        }
 */
        if (stoptime == true) {
            stoptime = false;
            timerCycle();
        }
    }

    /* start2 () {
                if (!this.time) {
                    this.time = setInterval(this.test, 1000);
                } else {
                    console.log("A timer has already been started.")
                }
            }

    test(){
        return console.log("timer werkt")
    } */

    end (){
        if (stoptime == false) {
            stoptime = true;
          }
    }

    timerCycle() {
        if (stoptime == false) {
        sec = parseInt(sec);
        min = parseInt(min);
        hr = parseInt(hr);
    
        sec = sec + 1;
    
        if (sec == 60) {
          min = min + 1;
          sec = 0;
        }
        if (min == 60) {
          hr = hr + 1;
          min = 0;
          sec = 0;
        }
    
        if (sec < 10 || sec == 0) {
          sec = '0' + sec;
        }
        if (min < 10 || min == 0) {
          min = '0' + min;
        }
        if (hr < 10 || hr == 0) {
          hr = '0' + hr;
        }
    
        timer.innerHTML = hr + ':' + min + ':' + sec;
    
        setTimeout("timerCycle()", 1000);
      }
    }

    reset() {
        this.time = clearInterval(this.time)
        console.log("Your timer has been set back to 0")
    }


    showTime(){
        console.log("The timer is at " + this.runningTime);
    }
}
let timer = new Stopwatch();
