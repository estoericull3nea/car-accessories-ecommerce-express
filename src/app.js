const express = require('express');
const path = require('path');
const app = express();
const hbs = require('hbs');
require('./db/conn');
const Register = require('./models/register');

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, '../public');
const template_path = path.join(__dirname, '../templates/views');
const partials_path = path.join(__dirname, '../templates/partials');

app.use(express.json());
app.use(express.urlencoded({extended: false}))
app.use(express.static(static_path));
app.set('view engine', 'hbs');
app.set('views', template_path);
hbs.registerPartials(partials_path);


app.get('/', (req, res) => {
    res.render('homepage');
})

app.get('/login', (req, res) => {
    res.render('login');
})

app.get('/register', (req, res) => {
    res.render('register');
})

// app.post('/register', async (req, res) => {
//     try {
//         const username = req.body.username;
//         const password = req.body.username;
//         const registerUser = new Register({
//             username: username,
//             password: password
//         })

//         const registered = await registerUser.save();
//         res.status(201).render('index');
//     } catch(e) {
//         res.status(400).send(e);
//     }
// })

app.listen(port, () => {
    console.log(`App is running on port: ${port}`);
})