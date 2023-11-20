// Functie om films op te halen
function getMovies() {
    // Reset de resultaatdiv
    document.getElementById('searchResults').innerHTML = '';

    // Haal de ingevoerde zoekterm op
    const searchTerm = document.getElementById('valueMovie').value;

    // Haal het geselecteerde jaar op
    const selectedYear = document.getElementById('yearSelect').value;

    // API aanroepen met de ingevoerde zoekterm en geselecteerde jaar
    fetch(`https://www.omdbapi.com/?apikey=d67c387a&s=${searchTerm}&y=${selectedYear}`)
        .then(res => res.json())
        .then(data => {
            // Controleer of er resultaten zijn
            if (data.Search) {
                // Loop door de resultaten en voeg ze toe aan de resultaatdiv
                for (let i = 0; i < data.Search.length; i++) {
                    const movieTitle = data.Search[i].Title;
                    const movieYear = data.Search[i].Year;
                    const moviePoster = data.Search[i].Poster;

                    // Maak een nieuwe div aan voor elke film
                    const movieDiv = document.createElement('div');
                    movieDiv.innerHTML = `
                        <strong>${movieTitle}</strong> ${movieYear}<br>
                        <img src="${moviePoster}" alt="${movieTitle}" class="movie-poster">
                        <hr>
                    `;

                    // Voeg de nieuwe div toe aan de resultaatdiv
                    document.getElementById('searchResults').appendChild(movieDiv);
                }
            } else {
                // Geen resultaten gevonden
                document.getElementById('searchResults').innerHTML = 'Geen resultaten gevonden';
            }
        })
        .catch(error => console.error('Error:', error));
}
