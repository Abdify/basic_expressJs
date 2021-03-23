const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send({status: "busy"});
})

app.get('/users/:id', (req, res) => {
    const id = req.params.id;
    res.send(`hello user number ${id}!`);
})

app.post('/add', (req, res) => {
    console.log(req.body);
})

app.listen(200, () => console.log('Listening to port 200'));