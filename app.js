class Stopwatch{
    constructor(){
        this.time = 0;
        this.runningTime = 0;
        this.status = "paused";
    }

    update() {
        if (this.status=="running") {
          this.time += this.delay;
        }
      }
    
    start () {
        if (this.status = "paused") {
            this.status = "running"
            this.time = setInterval(function(){runningTime.update();}, 100);
        } else {
            console.log("A timer has already been started.")
        }

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
