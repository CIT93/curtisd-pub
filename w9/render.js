import { FORM, TBL } from "./global.js";
import { cfpData, saveLocalStorage } from "./storage.js";

function renderTableHead() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["name", "house members", "house size", "footprint", "actions"];
    headingTextArray.forEach(function(text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead); 
    return table;
}

function onUpdate (index, data) {
    data.splice(index, 1);
    saveLocalStorage(cfpData);
    renderTbl(data);
}

function renderTableBtns(obj, index, data) {
    const td = document.createElement("td");
    const btnEdit = document.createElement("button");
    const btnDelete = document.createElement("button");
    btnEdit.textContent = "edit";
    btnDelete.textContent = "delete";
    td.appendChild(btnEdit);
    td.appendChild(btnDelete);
    btnDelete.addEventListener("click", function(e) {
        onUpdate(index, data);
    });
    btnEdit.addEventListener("click", function(e) {
        FORM[1].value = obj.firstName;
        FORM[2].value = obj.lastName;
        FORM[3].value = obj.houseM;
        FORM[4].value = obj.houseS;
        onUpdate(index, data);
    });
    return td;
}

function renderTableBody (data) {
    const tbody = document.createElement("tbody");
    data.forEach(function(obj, index) {
        console.log(index);
        const hasValidData = Object.entries(obj).some(([key, value]) => 
            value && key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS"
        );
        if (!hasValidData) return;

        const tr = document.createElement("tr");
        for(const [key, value] of Object.entries(obj)) {
            if(key !== "lastName" && key !== "houseMPTS" && key !== "houseSPTS") {
                const td = document.createElement("td");
                td.textContent = value;
                tr.appendChild(td)
            } 
        }
        const td = renderTableBtns(obj, index, data);
        tr.appendChild(td);
        tbody.appendChild(tr);
    });
    return tbody;
}

function renderTbl(data) {
    TBL.innerHTML = "";
    const tbody = renderTableBody(data);
    if (data.length !== 0 && tbody.children.length > 0) {
        const table = renderTableHead();
        table.appendChild(tbody);
        TBL.appendChild(table);
    } else {
        console.log("no data available, table cleared");
        return;
    }
}


export { renderTbl }; 