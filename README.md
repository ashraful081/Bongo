## Solution to question #1

A simple and a complex solution is provided in `./anagram.js` respectively.

## Solution to question #2

```java
interface Vehicle {
  int set_num_of_wheels()
  int set_num_of_passengers()
  boolean has_gas()
}
```


  - a) Design patterns in JavaScript are reusable solutions applied to commonly occurring problems in writing JavaScript web applications.

    To create car and plane class I'd like to use `Constructor Design Pattern`. This is a special function that name starts with capital latter or ES6 class that is used to initialize the newly created objects once a memory is allocated.

    #### Cretae Car and Plane class
	
	```js
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
    ```
	
	Run:

    ```js
      let car = new Car(4,5,true);
      car.car_details();
	  
	  let plane = new Plane(2,50,false);
      plane.plane_details();
    ```
	
	
  - b) An example of an actual design pattern in JavaScript to do something similar is the Factory Pattern.


    Create a factory

    ```js
      class VehicleFactory{
			constructor(wheels,passengers,gas=true){
				this.set_num_of_wheels=wheels;
				this.set_num_of_passengers=passengers;
				this.has_gas=gas;
			}
			
		}

		class Car extends VehicleFactory{
			constructor(wheels,passengers,gas){
				super(wheels,passengers,gas);
			}
			car_details(){
				console.log('The car has ' + this.set_num_of_wheels + ' wheels, ' + this.set_num_of_passengers + ' passengers and the car has gas ' + this.has_gas); 
			}
		}

		class Plane extends VehicleFactory{
			constructor(wheels,passengers,gas){
				super(wheels,passengers,gas);
			}
			plane_details(){
				console.log('The plane has ' + this.set_num_of_wheels + ' wheels, ' + this.set_num_of_passengers + ' passengers and the plane has gas ' + this.has_gas); 
			}
		}
    ```


    Now we can create a Car and a Plane using the factory function:

    ```js
      let car = new Car(4,6,true);
      car.car_details();
	  
	  let plane = new Plane(2,100,false);
      plane.plane_details();
    ```

## Solution to question #3

A minimal video player has been implemented in `./video_player/index.html`.

    ```js
	  /** just toggling the button, for play or pause the video. */
      function togglePlayPause() {
		  if (video.paused) {
			play.className = "pause";
			video.play();
		  }
		  else {
			play.className = "play";
			video.pause();
		  }
		}
		
		
		
		/** Video Forward & Rewind. */
		function mediaRewind() {
		  video.currentTime -= 5;
		}
		
		function mediaForward() {
		  video.currentTime += 5;
		}
    ```
