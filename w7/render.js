const TBL = document.getElementById("tab-data");

// function renderTblHeading() {
//   const table = document.createElement("table");
//   const thead = document.createElement("thead");
//   const tr = document.createElement("tr");
//   const headingTextArr = [
//     "Name",
//     "Household",
//     "HouseSize",
//     "Footprint",
//     "Actions",
//   ];
function renderTblHeading() {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "Total"];
  //   headingTextArr.forEach(function (text) {
  //     const th = document.createElement("th");
  //     th.textContent = text;
  //     tr.appendChild(th);
  //   });
  //   thead.appendChild(tr);
  //   table.appendChild(thead);
  //   return table;
  // }
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  return table;
}

function renderTbl(data) {
  TBL.innerHTML = "";
  const table = renderTblHeading();
  const tbody = document.createElement("tbody");
  // const trTextarr = ["Jacob", 4, "Medium ", 15];
  data.forEach(function (e) {
    const tr = document.createElement("tr");
    const tdName = document.createElement("td");
    tdName.textContent = e.firstName;
    tr.appendChild(tdName);
    // tr.appendChild(td);
    const tdTotal = document.createElement("td");
   tdTotal.textContent = e.cfpTotal;
    tr.appendChild(tdTotal);
      tbody.appendChild(tr);
  });
  // const td = document.createElement("td");
  // const btnEdit = document.createElement("button");
  // const btnDel = document.createElement("button");
  // btnEdit.textContent = "Edit";
  // btnDel.textContent = "Del";
  // td.appendChild(btnEdit);
  // td.appendChild(btnDel);
  // tr.appendChild(td);

  table.appendChild(tbody);
  TBL.appendChild(table);
}

export { renderTbl, renderTblHeading };
