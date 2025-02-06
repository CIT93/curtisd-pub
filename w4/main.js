const CFPDATA = [];

function determinHouseSizePts(size) {
  let carbonFootprintPoints = 0;
  if (size === "large") {
    console.log("I am Large");
    carbonFootprintPoints = 10;
  } else if (size === "medium") {
    console.log("I am Medium");
    carbonFootprintPoints = 7;
  } else if (size === "small") {
    console.log("I am small");
    carbonFootprintPoints = 4;
  } else if (size === "apt") {
    console.log("I am apt");
    carbonFootprintPoints = 2;
  } else {
    console.log("No points added");
  }

  return carbonFootprintPoints;
}

function determinHouseHoldPts(numberInHousehold) {
  let householdPoints = 0;
  if (numberInHousehold === 1) {
    householdPoints = 14;
  } else if (numberInHousehold === 2) {
    householdPoints = 12;
  } else if (numberInHousehold === 3) {
    householdPoints = 10;
  } else if (numberInHousehold === 4) {
    householdPoints = 8;
  } else if (numberInHousehold === 5) {
    householdPoints = 6;
  } else if (numberInHousehold === 6) {
    householdPoints = 4;
  } else if (numberInHousehold < 6) {
    householdPoints = 2;
  } else {
    console.log("no update to points");
  }

  return householdPoints;
}
console.log("global scope");

function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determinHouseHoldPts(houseHoldMembers);
  const DHSP = determinHouseSizePts(houseSize);
  const total = houseHoldPTS + DHSP;

  CFPDATA.push([houseHoldMembers, houseSize, houseHoldPTS, DHSP, total]);
}
function displayOutput() {
for (arr of CFPDATA ) {
    console.log(arr)
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = `Members: ${arr[0]},  house size is: ${arr[1]}, house hold: ${arr[2]}, house holdsizepoints: ${arr[3]}, and the total is: ${arr[4]}  `
    output.appendChild(newP)
}
}

start(5, "apt");
start(4, "large");
start(2, "medium");

displayOutput()
