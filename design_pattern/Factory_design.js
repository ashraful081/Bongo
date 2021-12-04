//Main factory class
class VehicleFactory{
    constructor(wheels,passengers,gas=true){
        this.set_num_of_wheels=wheels;
        this.set_num_of_passengers=passengers;
        this.has_gas=gas;
    }
    
}

//Car Class
class Car extends VehicleFactory{
    constructor(wheels,passengers,gas){
        super(wheels,passengers,gas);
    }
    car_details(){
        console.log('The car has ' + this.set_num_of_wheels + ' wheels, ' + this.set_num_of_passengers + ' passengers and the car has gas ' + this.has_gas); 
    }
}

//Plane Class
class Plane extends VehicleFactory{
    constructor(wheels,passengers,gas){
        super(wheels,passengers,gas);
    }
    plane_details(){
        console.log('The plane has ' + this.set_num_of_wheels + ' wheels, ' + this.set_num_of_passengers + ' passengers and the plane has gas ' + this.has_gas); 
    }
}

//Test Car Class
let car = new Car(4,6,true);
car.car_details();

//Test Plane Class
let plane = new Plane(2,100,false);
plane.plane_details();

