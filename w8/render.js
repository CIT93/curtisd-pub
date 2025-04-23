const TBL = document.getElementById("tab-data");
const FORM = document.getElementById("form");

function renderTableHead() {
    const table = document.createElement("table");
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    const headingTextArray = ["name", "house size", "house members", "footprint", "actions"];
    headingTextArray.forEach(function(text) {
        const th = document.createElement("th");
        th.textContent = text;
        tr.appendChild(th);
    });
    thead.appendChild(tr);
    table.appendChild(thead); 
    return table;
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
        data.splice(index, 1);
        renderTbl(data);
    });
    btnEdit.addEventListener("click", function(e) {
        FORM[1].value = obj.firstName;
        FORM[2].value = obj.lastName;
        FORM[3].value = obj.houseM;
        FORM[4].value = obj.houseS;
        data.splice(index, 1);
        renderTbl(data);
    });
    return td;
}

// i tried a few things for the edit button but i never got the functionality you got in the example video. I did some googling and saw an example of an if else conditional statement being used in a similar way so i tried to apply the same method to this without success. it is supposed to iterate over the form index and replace it with new data but that doesnt seem to be working and I am not truly understanding what i am doing wrong. i feel like splice needs to be used in some way but it just erasing the row from the form rather than editing it. i know that splice can be used to replace data so i need to figure that out. also needed to fix the commit message

// i also did some work on editing my code to make the table stop rendering that first empty table row. it has been bugging me that it is there and ive tried a lot to get it to go away and i don't know why it has still been rendering all this time. i think up to this point my code was the same as the example and it never renders the empty row in the example videos

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
