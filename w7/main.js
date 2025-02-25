
const movies = [
    { title: "The Fast and the Furious", year: "2001", rating: "7/10", watched: 2 },
    { title: "2 Fast 2 Furious", year: "2003", rating: "10/10", watched: 1 },
    { title: "The Fast and the Furious: Tokyo Drift", year: "2006", rating: "10/10", watched: 3 },
    { title: "Fast & Furious (2009)", year: "2009", rating: "5/10", watched: 2 },
    { title: "Fast Five", year: "2011", rating: "10/10", watched: 5 },
    { title: "Fast & Furious 6 ", year: "2013", rating: "6/10", watched: 4 },
    { title: "Furious 7", year: "2015", rating: "10/10", watched: 1 },
    { title: "The Fate of the Furious   ", year: "2017", rating: "7/10", watched: 4 },
    { title: "F9", year: "2021", rating: "5/10", watched: 8 },
    { title: "X", year: "2023", rating: "7/10", watched: 7 },
];

function displayMovies() {
    const output = document.getElementById("output");
    const newP = document.createElement("p");
    newP.textContent = "My Movie Ratings:";
    output.appendChild(newP);

    const table = document.createElement("table");
    const headerRow = document.createElement("tr");

    const headers = ["Title", "Year", "Rating", "Times Watched"];
    headers.forEach(headerText => {
        const header = document.createElement("th");
        header.textContent = headerText;
        headerRow.appendChild(header);
    });
    table.appendChild(headerRow);

    movies.forEach(movie => {
        const row = document.createElement("tr");
        const titleCell = document.createElement("td");
        titleCell.textContent = movie.title;
        row.appendChild(titleCell);

        const yearCell = document.createElement("td");
        yearCell.textContent = movie.year;
        row.appendChild(yearCell);

        const ratingCell = document.createElement("td");
        ratingCell.textContent = movie.rating;
        row.appendChild(ratingCell);

        const watchedCell = document.createElement("td");
        watchedCell.textContent = movie.watched;
        row.appendChild(watchedCell);

        table.appendChild(row);
    });
    output.appendChild(table);
}

function recommendMovies() {
    const recommendationsDiv = document.getElementById("recommendations");

    movies.forEach(movie => {
        let recommendationText = "";
        // Convert rating to a number for comparison
        const ratingValue = parseInt(movie.rating);

        // Example 1: High rating and low watch count
        if (ratingValue > 6 && movie.watched < 5) {
            recommendationText = `You might enjoy "${movie.title}" (${movie.year}). It has a high rating and you haven't seen it many times.`;
        }
        // Example 2: Medium rating or low watch count
        else if (ratingValue < 7 || movie.watched < 5) {
            recommendationText = `Consider watching "${movie.title}" (${movie.year}). It's either rated lower or you haven't seen it much.`;
        }
        //Example 3: Medium rating and high watch count
        else if(ratingValue >= 7 && movie.watched >= 7){
            recommendationText = `You've watched "${movie.title}" (${movie.year}) a lot and rated it high, you must really like it!`;
        }

        if (recommendationText) {
            const recommendationElement = document.createElement("div");
            recommendationElement.classList.add("recommendation");
            recommendationElement.textContent = recommendationText;
            recommendationsDiv.appendChild(recommendationElement);
        }
    });
}

displayMovies();
recommendMovies();
