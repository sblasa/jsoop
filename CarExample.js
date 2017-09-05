var Car = function Car(year, make, model) {
    this.Year = year;
    this.Make = make;
    this.Model = model;

    this.MyCarName = function MyCarName() {
        return theOtherCar.Year + " " + theOtherCar.Make + " " + theOtherCar.Model;
    }

    return {

        Year: this.Year,
        Make: this.Make,
        Model: this.Model,
        MyCarName: this.MyCarName
    }
}

var myCar = new Car ("2017", "Mini Cooper", "Hardtop");
var theOtherCar = new Car("2016", "Subaru", "Outback");

console.log(myCar.MyCarName());