
// Exercise 1: Get the array of all directors.
function getAllDirectors(array) {

  let result=array.map((element) => {
    return element.director;
  })
  return result;
  console.log("EXERCICE 1 ->", result);
 }


// Exercise 2: Get the films of a certain director
function getMoviesFromDirector(array, director) {
  let searchDirector;

  searchDirector = array.filter((element)=>element.director == director);
  
  console.log(searchDirector);

  return searchDirector;
}

// Exercise 3: Calculate the average of the films of a given director.
function moviesAverageOfDirector(array, director) {
  let totalScore;
  let getScores;
  let moviesByDirector = getMoviesFromDirector(array, director);
 
  getScores = moviesByDirector.map((element) => {
    return element.score;
  })

  totalScore =getScores.reduce(function(score,number){
    return (score+number)/getScores.length;
  });

  console.log(totalScore.toFixed(2));
  return totalScore.toFixed(2);  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  function titlesAlphabetically(x, y){
    if (x.title < y.title) {return -1;}
    if (x.title > y.title) {return 1;}
    return 0;
}
let orderTitles = array.sort(titlesAlphabetically).slice(0,20);
console.log(orderTitles);
return orderTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear() {

}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory() {

}

// Exercise 7: Modify the duration of movies to minutes
function hoursToMinutes() {

}

// Exercise 8: Get the best film of a year
function bestFilmOfYear() {
  
}



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    getAllDirectors,
    getMoviesFromDirector,
    moviesAverageOfDirector,
    orderAlphabetically,
    orderByYear,
    moviesAverageByCategory,
    hoursToMinutes,
    bestFilmOfYear,
  };
}
