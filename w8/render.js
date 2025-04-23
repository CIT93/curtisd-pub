// render.js
const TBL = document.getElementById("tab-data");
let currentlyEditingIndex = -1; // To track the index of the item being edited

function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "HouseHold", "HouseSize", "Footprint", "Action"];

  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTblBtn(index, data, FORM) {
  const td = document.createElement("td");
  const btnEdit = document.createElement("button");
  const btnDel = document.createElement("button");
  btnEdit.textContent = "Edit";
  btnDel.textContent = "Del";
  td.appendChild(btnEdit);
  td.appendChild(btnDel);

  btnDel.addEventListener('click', function (e) {
    data.splice(index, 1);
    renderTbl(data, FORM); // Pass FORM on re-render
  });

  btnEdit.addEventListener('click', function (e) {
    currentlyEditingIndex = index;
    const rowData = data[index];
    FORM.firstname.value = rowData.firstName || "";
    FORM.lastname.value = rowData.lastName || "";
    FORM.housem.value = rowData.houseHld || "";
    FORM.houses.value = rowData.houseSze || "";
    // We don't populate calculated fields (hhPts, hsZPts, cfpTotal)
  });

  return td;
}

function renderTblBody(data, FORM) {
  const tbody = document.createElement("tbody");
  data.forEach(function (obj, index) {
    const tr = document.createElement("tr");
    for (const [key, value] of Object.entries(obj)) {
      if (key !== "lastName" && key !== "houseHld" && key !== "houseSze" && key !== "hhPts" && key !== "hsZPts" && key !== "cfpTotal") {
        const td = document.createElement("td");
        td.textContent = value;
        tr.appendChild(td);
      }
    }
    const tdActions = renderTblBtn(index, data, FORM); // Pass FORM to button renderer
    tr.appendChild(tdActions);
    tbody.appendChild(tr);
  });
  return tbody;
}

function renderTbl(data, FORM) {
  TBL.innerHTML = "";
  if (data.length > 0) {
    const table = renderTblHeading();
    const tbody = renderTblBody(data, FORM); // Pass FORM to body renderer
    table.appendChild(tbody);
    TBL.appendChild(table);
  }
}

export { renderTbl, renderTblHeading };