
// Consider the size of your home. A smaller home makes a smaller impact on the environment. Take the size of your home into account as you calculate your impact.[2]
// If you have a large house, then add 10 points to your score.
// If you have a medium-sized house, then add 7 points.
// If you have a small house, then add 4 points.
// If you live in an apartment, then add 2 points.


function determineHomeSizePts(homeSize) {
    console.log("Inside the function for home size");

    if (homeSize === "large") {
        carbonFootprintPoints += 10;
    } else if (homeSize === "medium") {
        carbonFootprintPoints += 7;
    } else if (homeSize === "small") {
        carbonFootprintPoints += 4;
    } else if (homeSize === "apartment") {
        carbonFootprintPoints += 2;
    } else {
        console.log("Invalid home size input. No points added.");
    }

    console.log(`Based on a ${homeSize} home, the points would be ${carbonFootprintPoints}.`);
}

let carbonFootprintPoints = 0;

// Example usage:
determineHomeSizePts("large");
determineHomeSizePts("small");





// function determinHouseHoldPts(numberInHousehold) {
//     console.log("Inside the function")
//     if (numberInHousehold === 1) {
//       carbonFootprintPoints = carbonFootprintPoints + 14;
//     } else if (numberInHousehold === 2) {
//       carbonFootprintPoints = carbonFootprintPoints + 12;
//     } else if (numberInHousehold === 3) {
//       carbonFootprintPoints = carbonFootprintPoints + 10;
//     } else if (numberInHousehold === 4) {
//       carbonFootprintPoints = carbonFootprintPoints + 8;
//     } else if (numberInHousehold === 5) {
//       carbonFootprintPoints = carbonFootprintPoints + 6;
//     } else if (numberInHousehold === 6) {
//       carbonFootprintPoints = carbonFootprintPoints + 4;
//     } else if (numberInHousehold < 6) {
//       carbonFootprintPoints = carbonFootprintPoints + 2;
//     } else {
//       console.log("no update to points");
//     }
    
//     console.log(`Based on the number of member fo the household of ${numberInHousehold} the points would be ${carbonFootprintPoints}.`) 
// }



// let carbonFootprintPoints = 0;
// // const numberInHousehold  = 3;

// //global scope
// determinHouseHoldPts(3)
// determinHouseHoldPts(4)
