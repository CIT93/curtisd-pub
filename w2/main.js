

// Carbon foot print
 
const household = 8;
const homeSize = 2;
const foodChoices = 12;
const waterConsumption = 3;
const householdPurchases = 4;
const wasteProduced = 20;
const wasteRecycled = 24;
const transScore = 12
const total = household + homeSize + foodChoices + waterConsumption + householdPurchases + wasteProduced + wasteRecycled + transScore; 

const myHeading = document.querySelector("h1");
myHeading.textContent = "My Carbon Footprint is: "

  
const carbon = document.querySelector('h2');
carbon.textContent = total



