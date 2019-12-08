var callBackGetSuccess = function (data) {
    console.log("Donnees api API1", data);
}

var callBackGetSuccess2 = function (data) {
    console.log("Donnees api API2", data);
}

function GetPopularMovies() {
    var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b792f50e68dd0cf7abebb1399199bb2";

    $.get(url, callBackGetSuccess).done(function (SelectData) {

        var ListMovies = SelectData['results'];
        var PopularShowAllData = "";

        ListMovies.forEach(movie => {
            PopularShowAllData +=
                "<div class='EachMovie col-sm-2' id=" + movie.id + ">" +
                "<img src='https://image.tmdb.org/t/p/w185" + movie.poster_path + "'>" +
                "<br>" +
                movie.original_title +
                "</div>";
        });

        $('#Popular-Movies-List').html(PopularShowAllData);

    })
        .fail(function () {

        })
        .always(function () {

        });
}

GetPopularMovies();


function GetRatingMovie() {
    var url2 = "https://www.omdbapi.com/?t=";
    var apikeyurl2 = "&apikey=da468cb7";
    var inputtitle = document.getElementById('this-movie').value;
    console.log(url2 + inputtitle + apikeyurl2);

    $.get(url2 + inputtitle + apikeyurl2, callBackGetSuccess2).done(function (SelectRatingData) {

        var FindRating = SelectRatingData['imdbRating']
        var RatingShowAllData = "";

        console.log(SelectRatingData["Title"]);


        $('#Your-Movie').html(
            "<div class='ResultMovie'>" +
            "<div class='EachColumn ColumnLeft'>" +
            "<h2>" + SelectRatingData.Title + "</h2><br>" +
            "<img src='" + SelectRatingData.Poster + "'>" +
            "</div><br><br>" +
            "<div class='EachColumn ColumnRight'>" +
            "<h3>" + SelectRatingData.Ratings[0].Source + ": " + SelectRatingData.Ratings[0].Value +
            "</h3><br>" +
            "<h3>" + SelectRatingData.Ratings[1].Source + ": " + SelectRatingData.Ratings[1].Value +
            "</h3><br>" +
            "<h3>" + SelectRatingData.Ratings[2].Source + ": " + SelectRatingData.Ratings[2].Value +
            "</h3></div>" +
            "</div>");

    })
        .fail(function () {


        })
        .always(function () {

        });
}

