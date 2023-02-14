
var wrapSeries = document.querySelector('.wrapper-series');
var typesSeries = document.querySelectorAll('.selection > *');

function affichageSerie(argument) {
  fetch(`https://api.themoviedb.org/3/tv/${argument}?api_key=6631e5f1dc96088e0d26b86da29b5b6a&page=1`)
  .then(response => response.json())
  .then(data => {
      // console.log(data.results);
      wrapSeries.innerHTML= "";
      for(var i = 0; i < data.results.length; i++) {
      wrapSeries.innerHTML += 
      `<div class="serie">
    <h2>${data.results[i].name}</h2>
    <div class="serie__img">
    <img src="https://image.tmdb.org/t/p/w300${data.results[i].poster_path}" alt="">
    <div class="overlay">
      <div class="texte"></div>
    </div>
  </div>
  </div>`;
      }  
      
  });
}



typesSeries.forEach(function(typeSerie) {
  typeSerie.addEventListener('click', function () {
      var parametre = typeSerie.getAttribute("data-tv");
      affichageSerie(parametre)
  });
}) 
