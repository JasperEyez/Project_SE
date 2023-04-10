const express = require('express');
const app = express();
const mysql = require('mysql2');
const cors = require('cors');

const bodyParser = require('body-parser')
const jsonParser = bodyParser.json()

const jwt = require('jsonwebtoken')
const secret = 'Starzon-Cafe'

app.use(cors());
app.use(express.json());

const c = require('lodash')

//middleware
const { auth } = require('./middleware/auth')

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
    db.execute('SELECT * FROM user WHERE email=? OR phone=?', [req.body.email, req.body.mobileNumber],
        function(err, user, fields) {
            if (user.length == 0) {
                db.execute('INSERT INTO user (email, password, phone) VALUES (?, ?, ?)', [req.body.email, req.body.password, req.body.mobileNumber],
                    function(err, results, fields) {
                        if (err) {
                            res.json({ status: 'error', message: err })
                            return
                        }
                        res.json({ status: 'ok' })
                    })
                return
            }
            if (err) {
                res.json({ status: 'error', message: err })
                return
            }
            if (c.isEqual(user[0].email, req.body.email)) {
                return res.status(400).send("Email is already existed")
            }
            if (c.isEqual(user[0].phone, req.body.mobileNumber)) {
                return res.status(400).send("Number is already existed")
            }
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

            console.log(user[0].password)
            console.log(req.body.password)

            if (!c.isEqual(user[0].password, req.body.password)) {
                return res.status(400).send("Password Incorrect")
            }

            if (user.length > 0) {
                const payload = {
                    user: {
                        email: user[0].email,
                        phone: user[0].phone
                    },
                };
                const token = jwt.sign(payload, secret, { expiresIn: '10h' }, (err, token) => {
                        if (err) throw err;
                        res.json({ token, payload })
                    })
                    //res.json({ status: 'ok', message: 'login success', token })
                return
            } else {
                res.json({ status: 'error', message: 'login failed' })
                return

            }

        })
})

app.post("/current-user", auth, function(req, res, next) {
    try {
        db.execute('SELECT user_id, email, phone FROM user WHERE email=?', [req.user.email],
            function(err, user, fields) {
                if (err) {
                    retrurn
                } else {
                    const userInfo = {
                        userID: user[0].user_id,
                        email: user[0].email,
                        phone: user[0].phone,
                    }
                    return res.send(userInfo)
                }
            })
    } catch (err) {
        console.log(err)
        res.status(500).send("Server Error")
    }
})


app.listen('3001', () => {
    console.log('Server is running on port 3001');
});