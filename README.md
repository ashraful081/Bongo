## Solution to question #1

I'v written a function that detects if two strings are an anagram or not in anagram.js

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

  - b) I'm going to use the constructor design pattern for this solution


    ```js
	 class Vehicle {
	    constructor(wheels, passengers, gas = true) {
		this.set_num_of_wheels = wheels;
		this.set_num_of_passengers = passengers;
		this.has_gas = gas;
	    }
	}

	class Car extends Vehicle {
	    constructor(wheels, passengers, gas) {
		super(wheels, passengers, gas);
	    }
	    car_details() {
		console.log('The car has ' + this.set_num_of_wheels + ' wheels, ' + this.set_num_of_passengers + ' passengers and the car has gas ' + this.has_gas);
	    }
	}

	class Plane extends Vehicle {
	    constructor(wheels, passengers, gas) {
		super(wheels, passengers, gas);
	    }
	    plane_details() {
		console.log('The plane has ' + this.set_num_of_wheels + ' wheels, ' + this.set_num_of_passengers + ' passengers and the plane has gas ' + this.has_gas);
	    }
	}

	let car = new Car(4, 6, true);
	car.car_details();

	let plane = new Plane(2, 100, false);
	plane.plane_details();
    ```

## Solution to question #3

A minimal video player has been implemented in `./video_player/index.html`.

just toggling the button, for play or pause the video.

```js
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
```
    
    
Video Forward & Rewind.
    
```js
function mediaRewind() {
  video.currentTime -= 5;
}

function mediaForward() {
  video.currentTime += 5;
}
```
