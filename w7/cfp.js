function determineHouseSizePts(size) {
  let houseSizePoints = 0;
  if (size === "Large") {
    houseSizePoints = 10;
  } else if (size === "Medium") {
    houseSizePoints = 7;
  } else if (size === "Small") {
    houseSizePoints = 4;
  } else if (size === "Apt") {
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

export { determineHouseHoldPts, determineHouseSizePts };
