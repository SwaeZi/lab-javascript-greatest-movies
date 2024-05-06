// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(movies) {
    let uniqueDirectors = [];
    movies.map((movie) => {
        if(!uniqueDirectors.includes(movie.directors)) {
        uniqueDirectors.push(movie.director)
        }
    })
    return uniqueDirectors;
}

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
  if (!moviesArray.length) return 0;

  let stevenDrama = moviesArray.filter((movie) => {
    return (
      movie.director === "Steven Spielberg" && movie.genre.includes("Drama")
    );
  });

  return stevenDrama.length;
}

// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if(!moviesArray.length) return 0;
    let score = moviesArray.reduce((accumulator, currentScore) => {
     if (currentScore.score) {
        return accumulator + currentScore.score;
     } else {
        return accumulator
     }
    }, 0)
     let averageScore = (score / moviesArray.length).toFixed(2);
     let averageScoreFixed = Number(averageScore);
     
     return averageScoreFixed;
}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {
    if (!moviesArray.length) return 0;

    let dramaMovies = moviesArray.filter((moviesArray) => moviesArray.genre.includes("Drama"));
    return scoresAverage(dramaMovies)
}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    let moviesInnerCopy = moviesArray.map((movie) => movie);

    moviesInnerCopy.sort((movieA, movieB) => {
        if (movieA.year > movieB.year) {
        return movieA.year - movieB.year;
    } else if (movieA.year < movieB.year) {
        return movieA.year - movieB.year;
    } else return movieA.title.localeCompare(movieB.title)
     });
     return moviesInnerCopy;
}

// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    return moviesArray.map((movie) => movie.title).sort().slice(0, 20);
    return Response
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) {
    return moviesArray.map((movie) => {
      const newMovie = { ...movie };
      const durationArray = newMovie.duration.split(" ");
      let totalMinutes = 0;
      for (const duration of durationArray) {
        if (duration.includes("h")) {
          totalMinutes += parseInt(duration) * 60;
        } else if (duration.includes("min")) {
          totalMinutes += parseInt(duration);
        }
      }
      newMovie.duration = totalMinutes;

      return newMovie;
    });
}

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) {
  if (moviesArray.length === 0) {
    return null;
  }
    else {
    const yearArr = moviesArray
      .map((element) => element.year)
      .filter((value, index, self) => self.indexOf(value) === index);
    const avgArr = yearArr.map((element) => {
      objectArr = {};
      objectArr.year = element;
      objectArr.averageScore = (
        moviesArray.reduce((acc, cur) => {
          if (cur.year === element) {
            return acc + cur.score;
          } else {
            return acc;
          }
        }, 0) /
        moviesArray.filter((element2) => element2.year === element).length
      ).toFixed(1);
      return objectArr;
    });
    const maxValue = avgArr.sort((a, b) => {
      if (b.averageScore !== a.averageScore) {
        if (b.averageScore < a.averageScore) {
          return -1;
        } else if (a.averageScore === b.averageScore) {
          return 0;
        } else {
          return 1;
        }
      } else {
        if (b.year > a.year) {
          return -1;
        } else if (a.year === b.year) {
          return 0;
        } else {
          return 1;
        }
      }
    })[0];
    return `The best year was ${maxValue.year} with an average score of ${maxValue.averageScore}`;
  }
}

test = [{ year: 2007, score: 8 }];
console.log(bestYearAvg(test));
