/*1.Create arrays of objects representing movies in different languages - Hindi , English , Malayalam , Tamil ….*/

const engMovies  = [
    {   
        language : "English",
        title : "Again",
        actor : "Zac Effron",
        genre : "RomCom",
        date  : "11-03-2001",
        rating : 2.3,
        academyAward : "No"
    },
    {
        language : "English",
        title : "Shawshank Redemption",
        actor : "Morgan Freeman",
        genre : "Drama",
        date  : "22-09-1994",
        rating : 4.3,
        academyAward : "Yes"

    },
    {
        language : "English",
        title : "Midnight Sun",
        actor : "Bella",
        genre : "Drama",
        date  : "22-03-2022",
        rating : 2.8,
        academyAward : "No"

    },
    {
        language : "English",
        title : "Insidious",
        actor : "Lin Shayne",
        genre : "Horror",
        date  : "31-03-2011",
        rating : 3,
        academyAward : "Yes"

    },
    {
        language : "English",
        title : "Ocean 11",
        actor : "Anne Hathway",
        genre : "Drama",
        date  : "22-09-2015",
        rating : 3.1,
        academyAward : "No"

    },
    {
        language : "English",
        title : "Eternal Sunshine of a Spotless Mind",
        actor : "Bella",
        genre : "Drama",
        date  : "22-09-1994",
        rating : 4.4,
        academyAward : "Yes"

    }
];
const hindMovies = [
    {
        language : "Hindi",
        title : "Again",
        actor : "Amitabh Bachan",
        genre : "Drama",
        date  : "16-09-2016",
        rating : 4.1,
        academyAward : "Yes"
    },
    {
        language : "Hindi",
        title : "Jab We Met",
        actor : "Kareena Kapoor",
        genre : "RomCom",
        date  : "26-10-2007",
        rating : 2.9,
        academyAward : "No"

    }
];
const malMovies = [
    {
        language : "Malayalam",
        title : "Lucifer",
        actor : "Mohanlal",
        genre : "Action",
        date  : "28-03-2019",
        rating : 3.5,
        academyAward : "No"
    }
];
const tamMovies = [
    {
        language : "Tamil",
        title : "Mersal",
        actor : "Vijay",
        genre : "Action",
        date  : "18-10-2017",
        rating : 2,
        academyAward : "Yes"
    },
    {
        language : "Tamil",
        title : "Jilla",
        actor : "Mohanlal",
        genre : "Drama",
        date  : "10-01-2014",
        rating : 3,
        academyAward : "No"
    }
];

const movies = [...engMovies , ...hindMovies, ...malMovies, ...tamMovies];
console.log(movies);

/*2.Use spread/rest operator  to get the first movie from each list */

const [eng1] = [...engMovies];
const [hin1] = [...hindMovies];
const [mal1] = [...malMovies];
const [tam1] = [...tamMovies];

/*3.Use spread operator to merge the lists into a new list called  allMovies*/

const allMovies = [eng1 ,hin1 ,mal1 ,tam1];
console.log(allMovies);

/*4.Create a new list of titles from  allMovies*/

const allTitles = allMovies.map(allMovie => allMovie.title);
console.log(allTitles);

/*5.Remove duplicated from the list of titles (a movie may be dubbed in multiple languages)*/

const exclusiveTitle = [...new Set(allTitles)];
console.log(exclusiveTitle);

/*6.List the movies with rating  > 3  in the following format   <title> (<language>)  . Example  :  ‘Interstellar (English)’*/

const ratedMovies = allMovies.filter(allMovie => allMovie.rating > 3);
console.log(ratedMovies);
ratedMovies.forEach (rate => { console.log(rate.title + " " + rate.language);})

/*7.Check if all the movies are released
8.Check if any movie is yet to be released */

const relDate = movies.map(allMovie => allMovie.date);
console.log(relDate);
 
const releaseCheck = movies.filter(allMovie =>new Date(allMovie.date).getFullYear() < new Date().getFullYear() ?
         console.log(allMovie.title +" "+ "Released") : console.log(allMovie.title +" "+ "Not released"));
/*const today = new Date().getFullYear();
for(let release of movies) {
    let releaseDate = new Date(release.date).getFullYear();
    //console.log(releaseDate);
    if (releaseDate > today) console.log(release.title +" "+ "Not released");
    else console.log(release.title +" "+ "Released");
}   */    

/*9.Search for movies by a specific actor and return a list with the following data :
(Movie title , genre , academy award winner or not) */

const specificActor = allMovies.filter(movie => movie.actor == "Mohanlal");
console.log("Movie1 done by Mohanlal:- "+"Title:"+ specificActor[0].title + ", " +"Genre:"+ specificActor[0].genre + ", " + "Academy award winner:" + specificActor[0].academyAward);

for (let val of allMovies.map(allMovie => allMovie)) {
    if(val.actor == "Zac Effron") {
        console.log("Movies done by Zac:- "+"Title:"+ val.title + ", " +"Genre:"+ val.genre + ", " + "Academy award winner:" + val.academyAward);
    } 
    else if(val.actor == "Amitabh Bachan") {
        console.log("Movies done by Amitabh:- "+"Title:"+ val.title + ", " +"Genre:"+ val.genre + ", " + "Academy award winner:" + val.academyAward);
    }
    else if(val.actor == "Mohanlal") {
        console.log("Movies done by Mohanlal:- "+"Title:"+ val.title + ", " +"Genre:"+ val.genre + ", " + "Academy award winner:" + val.academyAward);
    }
    else {
        console.log("Movies done by Vijay:- "+"Title:"+ val.title + ", " +"Genre:"+ val.genre + ", " + "Academy award winner:" + val.academyAward);
    }
}

/*10.Group movies under different genres (action , scifi , horror , biopic...) */
 
const movieGenre = movies.map(allMovie=> allMovie.genre);
const genres = [...new Set(movieGenre)];
console.log(movieGenre);
console.log(genres);

for (let val of movies.map(allMovie => allMovie)) {
    genres.forEach(element => {
       if(val.genre == element) {
            console.log(element +" : " + val.title);
        }
    });
}

/*11. Find the top-rated 5 movies in each language */

const topEngMovies = engMovies.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
console.log(topEngMovies);
const top5Eng = topEngMovies.slice(0,5);
console.log(top5Eng);

const topHinMovies = hindMovies.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
console.log(topHinMovies);

const topMalMovies = malMovies.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
console.log(topMalMovies);

const topTamMovies = tamMovies.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
console.log(topTamMovies);

/* 12. Combine the top movie from 11. in a list */

const [topEng] = [...topEngMovies];
const [topHin] = [...topHinMovies];
const [topMal] = [...topMalMovies];
const [topTam] = [...topTamMovies];
const topMovies = [topEng , topHin , topMal , topTam];
console.log(topMovies);

/* 13. Calculate average movie rating for a given actor’s movies */

const actorMovies1 = movies.filter( movie => movie.actor == "Bella");
const rating1 = actorMovies1.map(ratings => ratings.rating).reduce((a,b)=> (a+b)/2);
console.log("Average rating for Bella's movie is: " + rating1);

/*14. Sort all the movies alphabetically by title */

console.log(movies.sort((a,b) => (a.title > b.title) ? 1 : -1));

/*15. Sort all the movies by rating */

const moviesCopy = [...movies];
console.log(moviesCopy.sort((a, b) => (a.rating < b.rating) ? 1 : -1));
