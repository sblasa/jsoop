var Auto = function Auto (year, make, model) {
    this.Year = year;
    this.Make = make;
    this.Model = model;
}

var Car = function Car(year, make, model, moonroof) {
    Auto.call(this, year, make, model);
    this.MoonRoofYN = moonroof;
}

Car.prototype = Object.create(Auto.prototype);
Car.prototype.constructor = Car;

var myAuto = new Auto ("2017", "Subaru", "Outback");
var myCar = new Car("2013", "Toyota", "Prius", "Yes");

console.log(myAuto.Make);
console.log(myCar.Make);

var printAutoName = function printAutoName (sampleAuto) {
    if(sampleAuto.MoonRoofYN != null)  {
        console.log(sampleAuto.Year + " " + sampleAuto.Make + " " + sampleAuto.Model + " " + sampleAuto.MoonRoofYN);    
    } else if (sampleAuto) {
        console.log(sampleAuto.Year + " " + sampleAuto.Make + " " + sampleAuto.Model);

    } else {
        console.log("Not an auto.");
    }
}

printAutoName(myAuto);
printAutoName(myCar);
printAutoName("yikes!");


