// //Importering
const express = require('express')

// //Instansiering
const app = express();

// task: Create a route for the endpoint / which returns a greeting

app.get('/', (req, res) => {
    res.send({ data: "Hello and welcome Moskinen"})
});

//Importering og instansering i en linje
// const app = require('express')();

//Functions as first-class citizens = I can do with functions what i can do with other data types

        //Endpoint    //Callback function (A function reference provided as an argument, with the posibility(perhaps) to be called later)
app.get('/blablabla', (req, res) => {
    res.send({ data: "They talk a lot but nothing is said"});   
});
// the whole thing = route

// How can i send data in a GET request
// path variable: /users/1 
// query parameters: ?userId=1&likesProgramming=true

// create a /beers route

app.get('/beers/:beerType/:amount', (req, res) => {
    console.log(req.params.beerType)
    res.send({ data: `You ordered ${req.params.amount} of ${req.params.beerType}`});
});

app.get('/bars/forgottenItems', (req, res) => {
    console.log(req.querry);
    res.send({ data: req.querry});
});

//Lytte på en port
app.listen(8080);