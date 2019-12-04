// Test 1 fail

var callBackGetSuccess = function (data) {
    console.log("Donnees api", data);
}

function GetPopularMovies() {
    var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b792f50e68dd0cf7abebb1399199bb2";
    $.get(url, callBackGetSuccess).done(function (SelectData) {
        // Succès de la requète / Première couche de traitement
        var ListMovies = SelectData['results'];
        var ShowAllData = "";

        ListMovies.forEach(movie => {
            ShowAllData +=
                "<div class='col-sm-2' id=" + movie.id + ">" +
                "<img src='https://image.tmdb.org/t/p/w185" + movie.poster_path + "'>" +
                "<br>" +
                movie.original_title +
                "</div><br>";
        });

        $('#Popular-Movies-List').html(ShowAllData);
    })
        .fail(function () {
            // Cas d'erreur

        })
        .always(function () {
            // Application de la deuxième couche de traitement
        });
}

GetPopularMovies();