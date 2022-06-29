
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

  return moviesAverage(getScores);
}

function moviesAverage(getScores){
  totalScore =getScores.reduce(function(score,number){
    return (score+number)/getScores.length;
  });
  
  return Number(totalScore.toFixed(2));  
}

// Exercise 4:  Alphabetic order by title 
function orderAlphabetically(array) {
  function titlesAlphabetically(x, y){
    if (x < y) {return -1;}
    if (x > y) {return 1;}
    return 0;
  }
  let finalTitles=array.map((element) => {
    return element.title;
  })
  let orderTitles = finalTitles.sort(titlesAlphabetically).slice(0,20);
  //console.log(orderTitles);
  return orderTitles;
}

// Exercise 5: Order by year, ascending
function orderByYear(array) {
  function orderYears(x, y){
    if (x.year < y.year) {return -1;}
    if (x.year > y.year) {return 1;}
    if (x.title < y.title) {return -1;}
    if (x.title > y.title) {return 1;}
    return 0;
  }
  return array.sort(orderYears).slice();
}

// Exercise 6: Calculate the average of the movies in a category
function moviesAverageByCategory(array,genre) {
  let findCategory = array.filter((element) => element.genre == genre);

  let getScores = findCategory.filter(element => element.score != "").map((element) => {
      return element.score;
  })
  
  return moviesAverage(getScores);
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
