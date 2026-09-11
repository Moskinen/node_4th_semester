const express = require("express")

const app = express()

const animals = [
    { id: 1, name: "Parrot", age: 34},
    { id: 2, name: "Pelican", url: "https://media.audubon.org/2025-07/s_Aud_APA-2019_Brown-Pelican_A1_9089-2_Photo-Shravan-Sundaram.jpg"}
];

app.get('/animals', (req, res) => {
    res.send({ data: animals })
})

app.get('/animals/:id', (req, res) => {
    const providedId = Number(req.params.id)
    const foundAnimal = animals.find((animal) => animal.id == providedId)

    if (!foundAnimal) {
        res.status(404).send({ data: `No animal found by id ${providedId}` })
        return
    } 

    res.send({ data: foundAnimal})
    
})

// Fejlkoder
// 2xx OK
// 3xx Redirect
// 4xx Client-side error
// 5xx Server-side error

app.listen(8080);