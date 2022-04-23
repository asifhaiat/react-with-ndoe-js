const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("My name is Asif Hayat I am using Express Node JS");
});

app.post('/fruit', (req, res) => {
    const fruit = req.body;
    fruit.id = fruits.id + 1;
    fruits.push(fruit);
    res.send(fruit);
})
/* create array of object */
const fruits = [
    {
        id: 1,
        name: "Mango",
        email: "mango@gmail.com",
        district: "Rajshahi"
    },

    {
        id: 2,
        name: "Litchi",
        email: "litchi@gmail.com",
        district: "Dinajpur"
    },

    {
        id: 3,
        name: "Almonds",
        email: "almonds@gmail.com",
        district: "Bandarbon"
    },

    {
        id: 4,
        name: "Pineapple",
        email: "pineapple@gmail.com",
        district: "Rnagamati"
    },

    {
        id: 5,
        name: "Banana",
        email: "banana@gmail.com",
        district: "Modhupur"
    },

    {
        id: 6,
        name: "Guava",
        email: "guava@gmail.com",
        district: "Borishal"
    }
]

/* access all fruits with app.get */
app.get('/fruits', (req, res) => {
    console.log(req.params);
    res.send(fruits);
});

/* access one fruit with one by one id  */
app.get('/fruit/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const fruit = fruits.find(fruit => fruit.id === id)
    res.send(fruit);
});

app.listen(port, () => {
    console.log(port);
}); 