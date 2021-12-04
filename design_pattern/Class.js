//Car Class
class Car{  
    constructor(wheels,passengers,gas=true){
        this.set_num_of_wheels=wheels;
        this.set_num_of_passengers=passengers;
        this.has_gas=gas;
    }
    get wheels(){
        return this.set_num_of_wheels;
    }
    get passengers(){
        return this.set_num_of_passengers;
    }
    get gas(){
        return this.has_gas;
    }

    car_details(){
        console.log('The car has ' + this.wheels + ' wheels, ' + this.passengers + ' passengers and the car has gas ' + this.gas); 
    }
}

//Plane Class
class Plane{
    constructor(wheels,passengers,gas=true){
        this.set_num_of_wheels=wheels;
        this.set_num_of_passengers=passengers;
        this.has_gas=gas;
    }
    get wheels(){
        return this.set_num_of_wheels;
    }
    get passengers(){
        return this.set_num_of_passengers;
    }
    get gas(){
        return this.has_gas;
    }

    plane_details(){
        console.log('The plane has ' + this.wheels + ' wheels, ' + this.passengers + ' passengers and the plane has gas ' + this.gas); 
    }
}

//Test Car Class
let car = new Car(4,5,true);
car.car_details();

//Test Plane Class
let plane = new Plane(2,50,false);
plane.plane_details();

