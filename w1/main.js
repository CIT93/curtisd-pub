console.log("Hello from inside the main.js file");

// let myVar;
const myVar = "Curtis";
const myVArType = typeof(myVar)
console.log("myVArType " + myVArType);
console.log(`myVArType + ${myVArType}`);



function runNow () {
    if(myVArType === "number") {
        console.log(`will 11 this one run`)
        } else {
            console.log("will 13 this one  run")
        }
}
runNow ();
runNow ();






