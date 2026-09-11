// .forEach .map .filter .reduce .find findIndex .indexOf 

// Rule 1: Use loop methods in JavaScript
// Rule 2: Don't use for loops unless if you are finger counting
// Rule 3: Use .map if you need the data afterwards, otherwise only use .forEach if you dont

// map returns a new list of the same size 1:1

// filter returns a new list of a smaller size

// find returns one thing

const numbers = [1, 2, 3, 4, 5]

// task: double the numbers

const doubledNumbers = numbers.map((number) => number *2)

// console.log(doubledNumbers)

const numbersIterated = numbers.map((value, index, array) => console.log(value, index, array));

const countries = [
    { name: "Lesotho", gdp: 530 },
    { name: "Papua New Guinea", gdp: 1025 },
    { name: "Saint Vincent and the Grenadines", gdp: 1200 }
]

// task if the country is Lesotho boost the GDP with 500

// updatedGPDCountries
// countriesGPDUpdated
// countriesWithGDPUpdated

// const countriesWithGDPUpdated = countries.map((country) => {
//     if (country.name === "Lesotho") {
//         country.gdp += 500
//     }
//     return country
// })

// console.log(countriesWithGDPUpdated)

// const countriesWithGDPUpdated = countries.map((country) => ({
//         name: country.name,
//         gdp: country.name === "Lesotho" ? country.gdp + 500 : country.gdp
//     }))

// console.log(countriesWithGDPUpdated)

// task filter out the countries where the dgp is below 1000 in the countries

// this doesnt work because of side effects. We changed the same object in memory in the original .map

// const countriesWithGPDOVer1000 = countries.filter((country) => country.gdp > 1000)

// console.log(countriesWithGPDOVer1000)

