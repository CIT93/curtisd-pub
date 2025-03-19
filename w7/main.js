// main.js
import { renderTbl } from "./render.js";
import { start } from "./cfp.js";

const FORM = document.getElementById("form");
const OUTPUT = document.getElementById("output");
const cfpData = [];

FORM.addEventListener("submit", function (e) {
  e.preventDefault();
  const firstName = FORM.firstname.value;
  const lastName = FORM.lastname.value;
  const houseHoldMembers = parseInt(FORM.housem.value);
  const houseSize = FORM.houses.value;
  
  // Use the start function to calculate footprint
  const data = start(houseHoldMembers, houseSize);

  // Push the first name and total footprint to the data array
  cfpData.push({ firstName, cfpTotal: data.tot });

  // Render the table
  OUTPUT.innerHTML = "";
  renderTbl(cfpData);

  // Reset the form
  FORM.reset();
});
