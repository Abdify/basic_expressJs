const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors()); 
// OR, -->
// app.use(function (req, res, next) {
//     // Website you wish to allow to connect
//     res.setHeader("Access-Control-Allow-Origin", "*");
//     // Request methods you wish to allow
//     res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
//     // Request headers you wish to allow
//     res.setHeader("Access-Control-Allow-Headers", "X-Requested-With,content-type");
//     // Set to true if you need the website to include cookies in the requests sent
//     // to the API (e.g. in case you use sessions)
//     res.setHeader("Access-Control-Allow-Credentials", true);
//     // Pass to next layer of middleware
//     next();
// });

app.use(express.json());


app.get("/", (req, res) => {
    const food = {
        name: "Gajorer halua",
        rating: 4.5,
    };
    res.send(food);
});

app.get("/food", (req, res) => {
    res.send({ type: "fruits", name: "Guava", quantity: "100", price: "1000" });
});



const users = [
    {
        name: "Arafath",
        address: "Farmgate",
    },
    {
        name: "Shahin",
        address: "Mirpur",
    },
    {
        name: "Shamim",
        address: "Mirpur",
    },
];

app.get("/users", (req, res) => {
    res.send(users);
});

app.get("/users/:userId", (req, res) => {
    const id = req.params.userId;
    const queries = req.query.sort;
    res.send({ name: users[id].name, id, queries });
});

app.post('/add', (req, res) => {
    console.log("Received: ", req.body);
    const user = {name: req.body, id: "w5rY4h565HR5j"}
    res.send(user);
})

app.listen(3000, () => console.log("Listening to port 3000"));