class Stopwatch{
    constructor(){
        this.time;
        this.runningTime = 0;

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
            if (!this.time) {
            this.time = setInterval(this.runningTime, 100);
        } else {
            console.log("A timer has already been started.")
        }
    }

    start2 () {
                if (!this.time) {
                    this.time = setInterval(this.test, 1000);
                } else {
                    console.log("A timer has already been started.")
                }
            }

    test(){
        return console.log("timer werkt")
    }

    end (){
        
    }

    reset() {
        this.time = clearInterval(this.time)
        console.log("Your timer has been set back to" + this.time)
    }

    pause(){

    }

    showTime(){
        console.log("The timer is at " + this.time);
    }
}
let timer = new Stopwatch();
