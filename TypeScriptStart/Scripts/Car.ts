class Car {
    engine: string;

    constructor(engine: string) {
        this.engine = engine;
    }

    start() {
        alert('Start engine of ' + this.engine);
    }

    stop() {
        alert('Stop engine of ' + this.engine);
    }
}

window.onload = function () {
    let car = new Car("Opel");
    car.start();
    car.stop();
}