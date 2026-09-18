const express = require('express')

const app = express()

const months = [ 
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

// console.log(new Date());
//2026-09-18T08:07:46.248Z

// console.log(Date())
//Fri Sep 18 2026 10:07:52 GMT+0200 (Central European Summer Time)
//Local time

// console.log(Date.now())
//1789719059884
//Unix Epoch Time
//Seconds since Jan. 1st 1970

// task: create a route that serves /months which return the current month

const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

app.get('/months/v1', (req, res) =>{
    const currentMonth = months [new Date().getMonth()]

    res.send({ data: currentMonth })
})


app.get('/months/v2', (req, res) =>{
    const currentMonth = new Date().toLocaleDateString('en-uk', {month: 'long'});

    res.send({ data: currentMonth})
})


//task: create a route that serves /days which returns the current day
const days = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
]

app.get('/days', (req, res) =>{
    const currentDay = days[new Date().getDay()]

    res.send({ data: currentDay})
})

app.get('/days/v2', (req, res) =>{
    const currentDay = new Date().toLocaleDateString('en-uk', { weekday: 'long'});

    res.send({ data: currentDay})
})


app.listen(8080, (error) => {
    if (error) {
        console.log(error)
        return
    }
    console.log("Server is running on port", 8080)
})