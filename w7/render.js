// render.js
const TBL = document.getElementById("tab-data");

function renderTblHeading() {

  if (TBL.querySelector("table")) return;

  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tr = document.createElement("tr");
  const headingTextArr = ["Name", "Total"];
  headingTextArr.forEach(function (text) {
    const th = document.createElement("th");
    th.textContent = text;
    tr.appendChild(th);
  });
  thead.appendChild(tr);
  table.appendChild(thead);
  TBL.appendChild(table);
}

function renderTbl(data) {
  renderTblHeading(); // Call this first to create the heading if needed
  const table = TBL.querySelector("table");
  const tbody = table.querySelector("tbody") || document.createElement("tbody");

  // Clear the tbody before appending new data to prevent duplication
  tbody.innerHTML = "";

  data.forEach(function (obj) {
    const tr = document.createElement("tr");

    const tdName = document.createElement("td");
    tdName.textContent = obj.firstName;
    tr.appendChild(tdName);

    const tdTotal = document.createElement("td");
    tdTotal.textContent = obj.cfpTotal;
    tr.appendChild(tdTotal);

    tbody.appendChild(tr);
  });

  table.appendChild(tbody);
}

export { renderTbl, renderTblHeading };
