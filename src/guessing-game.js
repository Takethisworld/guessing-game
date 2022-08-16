class GuessingGame {
    constructor() {

    this.setRange=(min, max)=> {
    this.min=min;
    this.max=max;
    }

    this.guess=()=>this.min + Math.ceil((this.max - this.min)/2);

    this.lower=()=>this.max=this.guess()

    this.greater=()=>this.min=this.guess()
}
}
module.exports = GuessingGame;
