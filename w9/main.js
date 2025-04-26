import { renderTbl } from "./render.js";
import { determineHouseHoldPts, determineHouseSizePts } from "./cfp.js";
import { FORM } from "./global.js";
import { cfpData, saveLocalStorage } from "./storage.js";

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

renderTbl(cfpData);

function validateData (e) {
    const field = e.target.value;
    const fieldId = e.target.id;
    const fieldError = document.getElementById(`${fieldId}Error`)
    if (field === "") {
        fieldError.textContent = `${fieldId} is required `;
        // e.target.classList.add("error");
    } else {
        fieldError.textContent = '';
        // e.target.classList.remove("error");
    }
}

document.getElementById("firstName").addEventListener("blur", validateData);
document.getElementById("lastName").addEventListener("blur", validateData);

FORM.addEventListener("submit", function(e){
    e.preventDefault();
    const firstName = FORM.firstname.value;
    const lastName = FORM.lastname.value;
    const houseSize = FORM.housesize.value;
    const houseMembers = parseInt(FORM.housemembers.value);
    const firstNameValidated = FORM.firstname.value !== "";
    const lastNameValidated = FORM.lastname.value !== "";
    if (firstNameValidated && lastNameValidated) {
        start(firstName, lastName, houseMembers, houseSize);
        saveLocalStorage(cfpData);
        renderTbl(cfpData);
        FORM.reset();
    }
});