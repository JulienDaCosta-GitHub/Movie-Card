// Test 1 fail

// var callBackGetSuccess = function (data) {
//     console.log("Donnees api", data)
// }

// function GetPopularMovies() {
//     var url = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b792f50e68dd0cf7abebb1399199bb2";

//     $.get(url, callBackGetSuccess).done(function () {
//         alert("Second success");
//     })
//         .fail(function () {
//             alert("error");
//         })
//         .always(function () {
//             alert("finished");
//         });
// }



// Test 2 fail

// function getApiData() {
//     const xhr = new XMLHttpRequest()
//     xhr.onreadystatechange = function () {
//         if (xhr.readyState === 4) {
//             const data = JSON.parse(xhr.responseText);

//             const title = data.page.title
//             const poster_path = data.page.poster_path

//             let hasProblem = false

//             for (let i = 0; i < title; i++) {
//                 if (data.page.title[i].slug === 'critical') {
//                     hasProblem = true
//                 }
//             }

//             for (let i = 0; i < poster_path; i++) {
//                 if (data.result.poster_path[i].slug === 'critical') {
//                     hasProblem = true
//                 }
//             }
//             document.querySelector('.Popular-Movies-List').innerHTML = hasProblem ? 'Erreur' : 'Ok'
//         }
//     }
//     xhr.open('GET', 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b792f50e68dd0cf7abebb1399199bb2');
//     xhr.send()
// }



// Test 3 fail

// let PopularMovies = document.querySelector('.Popular-Movies-List')
// let url = 'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b792f50e68dd0cf7abebb1399199bb2'


// function getPopularMoviesTitles() {
//     axios.get(url).then(function (response) {
//         updatePopularMoviesTitles(response.data) // Fonction pour appeler les attributs
//     })
// }

// function updatePopularMoviesTitles(data) {
//     PopularMovies.innerText = data.page.title
// }



// Test 4 Un début

// let baseURL = 'https://api.themoviedb.org/3/';
// let configData = null;
// let ImageURL = null;
// APIKEY = '6b792f50e68dd0cf7abebb1399199bb2';

// let getConfig = function () {
//     let url = "".concat(baseURL, 'configuration?api_key=', APIKEY);
//     fetch(url)
//         .then((result) => {
//             return result.json();
//         })
//         .then((data) => {
//             baseImageURL = data.images.secure_base_url;
//             configData = data.images;
//             console.log('config:', data)
//             console.log('config fetched')
//             runSearch('Iron man')
//         })
//         .catch(function (err) {
//             alert(err);
//         });
// }

// let runSearch = function (keyword) {
//     let url = ''.concat(baseURL, 'search/movie?api_key=', APIKEY, '&query=', keyword);
//     fetch(url)
//         .then(result => result.json())
//         .then((data) => {
//             document.getElementById('Popular-Movies-List').innerHTML = JSON.stringify(data, null, 4);
//         })
// }

// document.addEventListener('DOMContentLoaded', getConfig);



// Test 5 fail

// let PopularMovies = document.querySelector('#Popular-Movies-List')

// function getTitles() {
//     axios.get('https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=6b792f50e68dd0cf7abebb1399199bb2').then(function (response) {
//         updateTitles(response.data) // Fonction pour appeler les attributs
//     })
// }

// function updateTitles(data) {
//     PopularMovies.innerText = data.page.results.original_title
// }

// PopularMovies.addEventListener('click', getTitles)