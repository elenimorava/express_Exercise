/*
Write a server that:
- if client issue a GET /unique then it returns the unique values provided as “numbers” query parameter
- if client issue a GET /sum then it returns the sum of all the values provided as “numbers” query parameter
- if client issue a POST /unique then it returns the unique values provided as “numbers” post parameter
- if client issue a POST /sum then it returns the sum of all the values provided as “numbers” post parameter
*/

import express from 'express';
import sumOfArray from "./functions.js";
const app = express();
app.use(express.json());
const hostname = '127.0.0.1';
const port = 3000;

// GET
app.get('/unique', async (req, res) => {
    const array = JSON.parse(req.query.numbers);
    const unique = array.filter((item, index, arr) => arr.indexOf(item) === index)
    res.send("(GET)The unique numbers are: " + unique);
});

app.get('/sum', async (req, res) => {
    const array = JSON.parse(req.query.numbers);
    const theSum = sumOfArray(array)
    res.send("(GET) The sum is " + theSum);
});

// POST
app.post('/unique', async (req, res) => {
    const array = req.body;
    const formatData = JSON.stringify(array)
    const arrayOfNumber = JSON.parse(formatData)
    const arrayToFindUnique = arrayOfNumber.array
    const unique = arrayToFindUnique.filter((item, index, arr) => arr.indexOf(item) === index)
    res.send("(GET)The unique numbers are: " + unique);
});

app.post('/sum', async (req, res) => {
    const array = req.body;
    const formatData = JSON.stringify(array)
    const arrayOfNumber = JSON.parse(formatData)
    const theSum = sumOfArray(arrayOfNumber.array)
    res.send("(POST)The sum is : " + theSum);
});

app.listen(port, () => {
    console.log(`Server running at http://${hostname}:${port}/`)
})
