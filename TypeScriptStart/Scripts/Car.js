var Car = (function () {
    function Car(engine) {
        this.engine = engine;
    }
    Car.prototype.start = function () {
        alert('Start engine of ' + this.engine);
    };
    Car.prototype.stop = function () {
        alert('Stop engine of ' + this.engine);
    };
    return Car;
}());
window.onload = function () {
    var car = new Car("Opel");
    car.start();
    car.stop();
};
//# sourceMappingURL=Car.js.map