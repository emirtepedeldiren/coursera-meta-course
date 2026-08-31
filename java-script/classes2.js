class GymBike {
    constructor(position,gears){
        this.position = position;
        this.gears = gears ;
    }
}

class Treadmill {
    constructor(position,modes){
        this.position = position;
        this.modes = modes ;
    }
}

class Gym {
    constructor(openHrs,gymBikePos,treadmillPos){
        this.openHrs = openHrs;
        this.gymBike = new GymBike(gymBikePos,8);
        this.treadmill = new Treadmill(treadmillPos,5);

    }
}

var fitnessGym = new Gym ("9-23","Right Corner","Left Corner");

console.log(fitnessGym.openHrs)
console.log(fitnessGym.gymBike)
console.log(fitnessGym.treadmill)

