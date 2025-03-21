// const movies = [
//   {
//     title: "Friday",
//     year: "1995",
//     rating: 9.5,
//   },
//   {
//     title: "Next Friday",
//     year: "2000",
//     rating: 8.5,
//   },
//   {
//     title: "Friday After Next",
//     year: "2002",
//     rating: 7.5,
//   },
// ];
// function movie(movieArray) {
//   movieOutput = document.getElementById("movie");
//   let output = "";

//   for (let i = 0; i < movieArray.length; i++) {
//     let FavMovie = movieArray[i];
//     output += `${FavMovie.title} (${FavMovie.year}) has a rating of ${FavMovie.rating}/10.<br>`;
//   }

//   movieOutput.innerHTML = output;
// }

// movie(movies);

const movies = [
  {
    title: "Friday",
    year: 1995,  // Updated to use integers as required
    rating: 9.5,
    watched: 2,  // Example value added for 'watched'
  },
  {
    title: "Next Friday",
    year: 2000,
    rating: 8.5,
    watched: 4,  // Example value added for 'watched'
  },
  {
    title: "Friday After Next",
    year: 2002,
    rating: 7.5,
    watched: 3,  // Example value added for 'watched'
  },
];

function renderMovieTable(movieArray) {
  const movieOutput = document.getElementById("movie");
  let output = `<h2>Other Movies Similar</h2>`;

  movieArray.forEach(movie => {
    output += `
      <div class="movie-container">
        <div class="movie-item">${movie.title}</div>
        <div class="movie-item">${movie.year}</div>
        <div class="movie-item">${movie.rating}</div>
        <div class="movie-item">${movie.watched}</div>
      </div>
    `;
  });

  movieOutput.innerHTML = output;
}

renderMovieTable(movies);

// const cfpData = [];

// function determineHouseSizePts(size) {
//   let houseSizePoints = 0;
//   if (size === "large") {
//     houseSizePoints = 10;
//   } else if (size === "medium") {
//     houseSizePoints = 7;
//   } else if (size === "small") {
//     houseSizePoints = 4;
//   } else if (size === "apt") {
//     houseSizePoints = 2;
//   }
//   return houseSizePoints;
// }

// function determineHouseHoldPts(numberInHousehold) {
//   let houseHoldPoints = 0;
//   if (numberInHousehold === 1) {
//     houseHoldPoints = 14;
//   } else if (numberInHousehold === 2) {
//     houseHoldPoints = 12;
//   } else if (numberInHousehold === 3) {
//     houseHoldPoints = 10;
//   } else if (numberInHousehold === 4) {
//     houseHoldPoints = 8;
//   } else if (numberInHousehold === 5) {
//     houseHoldPoints = 6;
//   } else if (numberInHousehold === 6) {
//     houseHoldPoints = 4;
//   } else if (numberInHousehold > 6) {
//     houseHoldPoints = 2;
//   }
//   return houseHoldPoints;
// }

// function displayOutObj(obj) {

//   console.log(obj);
//   const output = document.getElementById("output");
//   const newH2 = document.createElement("h2");
//   const newP = document.createElement("p");
//   newH2.textContent = `Your Carbon Footprint total score is ${obj.tot}!`;
//   output.appendChild(newH2);
//   newP.textContent = `This score is based on your household member(s) of ${obj.yourMember} (score: ${obj.yourMemPts})`;
//   newP.textContent += ` and a ${obj.yourHouse} size home (score ${obj.yourSizePts}).`;
//   output.appendChild(newP);
// }

// function start(houseHoldMembers, houseSize) {
//   const houseHoldPTS = determineHouseHoldPts(houseHoldMembers);
//   const houseSizePts = determineHouseSizePts(houseSize);
//   const total = houseHoldPTS + houseSizePts;
//   cfpData.push({
//     yourMember: houseHoldMembers,
//     yourHouse: houseSize,
//     yourMemPts: houseHoldPTS,
//     yourSizePts: houseSizePts,
//     tot: total,
//   });
// }

// function displayOutput() {
//   for (obj of cfpData) {
//     console.log(obj);
//     const output = document.getElementById("output");
//     const newH2 = document.createElement("h2");
//     const newP = document.createElement("p");
//     const newH3 = document.createElement("h3");
//     newH2.textContent = `Your Carbon Footprint total score is ${obj.tot}!`;
//     output.appendChild(newH2);
//     newH3.textContent = `Based on the Number in your household and size of home.`;
//     output.appendChild(newH3);
//     newP.textContent = `This score is based on your household member(s) of ${obj.yourMember} (score: ${obj.yourMemPts})`;
//     newP.textContent += ` and a ${obj.yourHouse} size home (score ${obj.yourSizePts}).`;
//     output.appendChild(newP);
//   }
// }

// refactor code for for loop:
// function displayOutput() {
//   for(let i = 0; i < cfpData.length; i++ ) {
//     console.log(i)
//       const output = document.getElementById("output");
//       const newP = document.createElement("p");
//       const newH2 = document.createElement("h2");
//       newH2.textContent = `Carbon Footprint total is ${cfpData[i][4]}`;
//       const newH3 = document.createElement("h3")
// newH3.textContent = `Based on Number in Household and Size of Home`
// newP.textContent = `This number is based on the number of members of household of ${cfpData[i][0]} (score: ${cfpData[i][2]})`;
// newP.textContent += ` and a ${cfpData[i][1]} size of home (score ${cfpData[i][3]})`
// output.appendChild(newH2);
// output.appendChild(newH3);
// output.appendChild(newP);
//   }
// }

// start(2, "apt");
// start(5, "small");
// start(3, "medium");
// start(5, "large");

// displayOutput();
