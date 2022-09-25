// random fractions and whole numbers

function randomFraction() {


    return Math.random();
}

console.log(randomFraction()); 





/* generate random whole number range */

function randomRange(myMin, myMax) {

    return Math.floor(Math.random() * (myMax - myMin + 1)) + myMin;

}

let myRandom = randomRange(5,15);

console.log(myRandom);