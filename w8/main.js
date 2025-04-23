//main.js
import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

function start(first, last, houseHoldMembers, houseSize) {
  const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
  const houseSizePts = determineHouseSizePts(houseSize);
  const total = houseHoldPTS + houseSizePts;
  cfpData.push({
    firstName: first,
    lastName: last,
    houseHld: houseHoldMembers,
    houseSze: houseSize,
    hhPts: houseHoldPTS,
    hsZPts: houseSizePts,
    cfpTotal: total,
  });
}

FORM.addEventListener(`submit`, function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  start(firstName, lastName, houseHoldMembers, houseSize);
  OUTPUT.innerHTML = ""
  renderTbl(cfpData, FORM); // Pass the FORM element to renderTbl
  FORM.reset();
});