
const cfpData = getLocalStorage();

function saveLocalStorage (cfpData) {
    const serializedArray = JSON.stringify(cfpData);
    localStorage.setItem("cfp", serializedArray)
}

function getLocalStorage () {
    const retrievedArray = localStorage.getItem("cfp");
    if (retrievedArray !== null) {
        return JSON.parse(retrievedArray);
    } else {
        return [];
    }
}

export { cfpData, saveLocalStorage, getLocalStorage }