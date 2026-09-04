
// Hoisting: i en js fil, laver den just in time (jit) compilation, 
// hvor den læser alt og det derefter er tilgængeligt
getRandomInt(5, 10);

//Math.random giver et random tal mellem 0 - 1 )
function getRandomInt (min, max){
    return Math.floor(Math.random() * (max-min + 1) + min)
}

//Anonym funktion, da den ikke har noget navn
const getRandomIntAnonymousFunction = function (min, max){
    return Math.floor(Math.random() * (max-min + 1) + min)
}

//Arrowfunction
const getRandomIntArrowFunction = (min, max) =>{
    return Math.floor(Math.random() * (max-min + 1) + min)
}

                                //string, function
function genericActionPerformer(name, action) {
    return action(name);
}

// Elias, playing guitar
/* assignment
Using the genericActionPerformer, can you make it say: Elias likes to play guitar
*/

function playingGuitarAction (name) {
    return `${name} likes to play guitar`
}

console.log(genericActionPerformer("Elias", playingGuitarAction))

// Magnus, watch movies
/* assignment
Create an arrow function this time called watchingMoviesAction

*/

const watchingMoviesAction = (name) => {
    return `${name} likes to watch movies`
}

console.log(genericActionPerformer("Magnus", watchingMoviesAction));

// callback function 

// Jacob, sail
/* Assignment
Create sailingAction as a one-liner below
*/

console.log(genericActionPerformer("Jacob"), (name) => `${name} likes sailing`)