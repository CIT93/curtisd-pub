const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "large") {
    houseSizePoints = 10;
  } else if (size === "medium") {
    houseSizePoints = 7;
  } else if (size === "small") {
    houseSizePoints = 4;
  } else if (size === "apt") {
    houseSizePoints = 2;
  }
  return houseSizePoints;
}

function determineHouseHoldPts(numberInHousehold) {
  let houseHoldPoints = 0;
  if (numberInHousehold === 1) {
    houseHoldPoints = 14;
  } else if (numberInHousehold === 2) {
    houseHoldPoints = 12;
  } else if (numberInHousehold === 3) {
    houseHoldPoints = 10;
  } else if (numberInHousehold === 4) {
    houseHoldPoints = 8;
  } else if (numberInHousehold === 5) {
    houseHoldPoints = 6;
  } else if (numberInHousehold === 6) {
    houseHoldPoints = 4;
  } else if (numberInHousehold > 6) {
    houseHoldPoints = 2;
  }
  return houseHoldPoints;
}


function start(houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    yourMember: houseHoldMembers,
    yourHouse: houseSize,
    yourMemPts: houseHoldPTS,
    yourSizePts: houseSizePts,
    tot: total,
  });
}

function displayOutput(obj) {

  for (obj of cfpData) {
    console.log(obj);
    const newP = document.createElement("p");
    const newH2 = document.createElement("h2");
    const newH3 = document.createElement("h3");

    newH2.textContent = `Carbon Footprint total is ${obj.tot}`; // Access the 'tot' property
    newH3.textContent = `Based on Number in Household and Size of Home`;
    newP.textContent = `This number is based on the number of members of household of ${obj.yourHouse} (score: ${obj.yourMember})`;
    newP.textContent += ` and a ${obj.yourMemPts} size of home (score ${obj.yourSizePts})`;

    output.appendChild(newH2);
    output.appendChild(newH3);
    output.appendChild(newP);
  }
}

//require does simple form validation
FORM.addEventListener("submit", function (e) {
  e.preventDefault(e);
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(houseHoldMembers, houseSize)
  OUTPUT.innerHTML = "";
  displayOutput();
  FORM.reset()
});
