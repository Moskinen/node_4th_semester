const express = require("express")

const app = express()

app.use(express.json())

const animals = [
    { id: 1, name: "Parrot", age: 34},
    { id: 2, name: "Pelican", url: "https://media.audubon.org/2025-07/s_Aud_APA-2019_Brown-Pelican_A1_9089-2_Photo-Shravan-Sundaram.jpg"}
];

let nextId = 3

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

app.post("/animals", (req, res) => {
    const providedAnimal = req.body;

    providedAnimal.id = nextId++

    animals.push(providedAnimal)

    res.send({ data: providedAnimal});
})

// const labrador = {
//     color: "brown",
//     color: "white",
//     color: "multi",
//     energyLevel: 9.4
// }

// console.log(labrador)

// const chihuahua = {
//     energyLevel: 10.0,
//     isScaredOfAnything: false
// }

// console.log({ ...labrador, ...chihuahua})

app.patch("/animals/:id", (req, res) => {
    const providedId = Number(req.params.id)
    const foundAnimalIndex = animals.findIndex((animal) => animal.id === providedId)

    if (foundAnimalIndex === -1) {
        return res.status(404).send({errorMessage: `No animal found by id ${providedId}` })
    }

    const providedAnimal = req.body
    providedAnimal.id = providedId

    const animalToCreate = { ...foundAnimal, ...providedAnimal, id: providedId}

    animals[foundAnimalIndex] = animalToCreate

    res.send({ data: animalToCreate })

})

app.delete("animals/:id", (req, res) => {
    const providedId = Number(req.params.id)
    const foundAnimalIndex = animals.findIndex((animal) => animal.id === providedId)

    if (foundAnimalIndex === -1) {
        return res.status(404).send({errorMessage: `No animal found by id ${providedId}` })
    }

    animals.splice(foundAnimalIndex, 1)

    res.status(204).send()
})

// Fejlkoder
// 2xx OK
// 3xx Redirect
// 4xx Client-side error
// 5xx Server-side error

app.listen(8080, (error) => {
    if (error) {
        console.log("Error running the server", error)
        return
    }

    console.log("Server is running on port", 8080)
});