const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const bcrypt = require('bcrypt')
const saltRounds = 10

const jwt = require('jsonwebtoken')
const secret = 'Starzon-Cafe'

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: "root",
    host: "localhost",
    password: "",
    database: "starzon"
})

app.get('/menu', (req, res) => {
    db.query("SELECT * FROM menu", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.get('/cart', (req, res) => {
    db.query("SELECT * FROM cart", (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
});

app.post('/register', jsonParser, function(req, res, next) {
    bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
        db.execute('INSERT INTO user (email, password, phone) VALUES (?, ?, ?)', [req.body.email, hash, req.body.mobileNumber],
            function(err, results, fields) {
                if (err) {
                    res.json({ status: 'error', message: err })
                    return
                }
                res.json({ status: 'ok' })
            })
    })
})

app.post('/login', (req, res) => {
    db.execute('SELECT * FROM user WHERE email=?', [req.body.email],
        function(err, user, fields) {
            if (err) {
                res.json({ status: 'error', message: err })
                return
            }
            if (user.length == 0) {
                res.json({ status: 'error', message: 'no user found' })
                return
            }
            bcrypt.compare(req.body.password, user[0].password, function(err, isLogin) {
                if (isLogin) {
                    const token = jwt.sign({ email: user[0].email }, secret, { expiresIn: '10h' })
                    res.json({ status: 'ok', message: 'login success', token })
                    return
                } else {
                    res.json({ status: 'error', message: 'login failed' })
                    return

                }
            })
        })
})

app.post('/authen', jsonParser, function(req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decoded = jwt.verify(token, secret)
        res.json({ status: 'ok', decoded })
    } catch (err) {
        res.json({ status: 'error', message: err.message })
    }
})


app.listen('3001', () => {
    console.log('Server is running on port 3001');
});