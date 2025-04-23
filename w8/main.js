import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";

const myHeading = document.querySelector("h1");
myHeading.textContent = "coding week 8";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];


function start(first, last, houseMembers, houseSize) {
    const houseHoldPTS = determineHouseHoldPts(houseMembers);
    const houseSizePts = determineHouseSizePts(houseSize);
    const total = houseHoldPTS + houseSizePts;
    cfpData.push({
        firstName: first,
        lastName: last,
        houseM: houseMembers,
        houseS: houseSize,
        houseMPTS: houseHoldPTS,
        houseSPTS: houseSizePts,
        cfpTotal: total,
    })
}

start();

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseSize = FORM.housesize.value;
    const houseMembers = parseInt(FORM.housemembers.value);
    start(firstName, lastName, houseMembers, houseSize);
    OUTPUT.innerHTML = "";
    renderTbl(cfpData);
    FORM.reset();
});