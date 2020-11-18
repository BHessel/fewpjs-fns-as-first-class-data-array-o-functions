//1
function wakeDog(dogName, dogBreed){
    let string = `Wake ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

//2
function leashDog(dogName, dogBreed){
    let string = `Leash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

//3
function walkToPark(dogName, dogBreed){
    let string = `Walk to the park with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

//4
function throwFrisbee(dogName, dogBreed){
    let string = `Throw the frisbee for ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

//5
function walkHome(dogName, dogBreed){
    let string = `Walk home with ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

//6
function unleashDog(dogName, dogBreed){
    let string = `Unleash ${dogName} the ${dogBreed}`;
    console.log(string);
    return string;
}

//7 array called routine that contains each activity
let routine = [
    wakeDog,
    leashDog,
    walkToPark,
    throwFrisbee,
    walkHome,
    unleashDog
]

//8 run functions
function exerciseDog(dogName, dogBreed){
//     //iterate over routine Array
    return routine.map(task => task(dogName, dogBreed));
    
}
//     //pass dogName/Breed to the funcation as they are called
//     //capture result of each function's call
//     //return in array
