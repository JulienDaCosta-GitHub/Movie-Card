// Test 1 fail

var callBackGetSuccess = function (data) {
    console.log("Donnees api API1", data);
}

var callBackGetSuccess2 = function (data) {
    console.log("Donnees api API2", data);
}

function GetPopularMovies() {
    var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b792f50e68dd0cf7abebb1399199bb2";

    $.get(url, callBackGetSuccess).done(function (SelectData) {
        // Succès de la requète / Première couche de traitement
        var ListMovies = SelectData['results'];
        var PopularShowAllData = "";

        ListMovies.forEach(movie => {
            PopularShowAllData +=
                "<div class='EachMovie col-sm-2' id=" + movie.id + ">" +
                "<img src='https://image.tmdb.org/t/p/w185" + movie.poster_path + "'>" +
                "<br>" +
                movie.original_title +
                "</div><br>";
        });

        $('#Popular-Movies-List').html(PopularShowAllData);

    })
        .fail(function () {
            // Cas d'erreur

        })
        .always(function () {
            // Application de la deuxième couche de traitement
        });
}

GetPopularMovies();


function GetRatingMovie() {
    var url2 = "http://www.omdbapi.com/?t=";
    var apikeyurl2 = "&apikey=da468cb7";
    var inputtitle = document.getElementById('this-movie').value;
    console.log(url2 + inputtitle + apikeyurl2);

    $.get(url2 + inputtitle + apikeyurl2, callBackGetSuccess2).done(function (SelectRatingData) {
        // Succès de la requète / Première couche de traitement
        var FindRating = SelectRatingData['imdbRating']
        var RatingShowAllData = "";

        console.log(SelectRatingData["Title"]);


        $('#Your-Movie').html(
            "<div class='EachMovie col-sm-2'>" + SelectRatingData.Title +
            "<img src='" + SelectRatingData.Poster + "'>" +
            "<br><br>" +
            SelectRatingData.Ratings[0].Source + ": " + SelectRatingData.Ratings[0].Value +
            "<br><br>" +
            SelectRatingData.Ratings[1].Source + ": " + SelectRatingData.Ratings[1].Value +
            "<br><br>" +
            SelectRatingData.Ratings[2].Source + ": " + SelectRatingData.Ratings[2].Value +

            "</div><br>");

    })
        .fail(function () {
            // Cas d'erreur

        })
        .always(function () {
            // Application de la deuxième couche de traitement
        });
}

