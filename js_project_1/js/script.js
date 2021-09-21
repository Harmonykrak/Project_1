let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
    }
}

start();
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};


function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из последних просмотренных фильмов?', ''),
            b = prompt('На сколько оцените его?', '');

        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

        personalMovieDB.movies[a] = b;


    }
}

rememberMyFilms();



function detectPersonalLevel() {
    if (personalMovieDB < 10) {
        console.log('"Просмотрено довольно мало фильмов"');
    } else if (10 <= personalMovieDB <= 30) {
        console.log('Вы классический зритель');
    } else if (personalMovieDB > 30) {
        console.log('Вы киноман');
    } else {
        console.log('Ошибка');
    }
}

detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat);

function writeYourGenres() {
    for (let i = 1; i < 4; i++) {
        const c = prompt(`Ваш любимый жанр под номером ${i}`, '');
        if (c != null && c != '' && c.length < 50) {
            personalMovieDB.genres[i - 1] = c;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }

    }
}

writeYourGenres();
console.log(personalMovieDB);

