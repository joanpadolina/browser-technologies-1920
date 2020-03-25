const express = require('express')
const app = express()
const mongo = require('mongodb')
const generateUniqueId = require('generate-unique-id')

require('dotenv').config();

let db = null
const port = process.env.PORT
const dbName = process.env.DB_NAME

const url = process.env.DB_URL;

mongo.MongoClient.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, (err, database) => {
    if (err) {
        throw err
    } else {
        db = database.db(dbName)
    }
})


app
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.static('public'))
    .set('view engine', 'ejs')
    .set('views', 'views')

app
    .get('/', (req, res) => res.render('index.ejs'))
    .get('/funky-shirt/:id', (req, res) => {
        const id = req.params.id

        db.collection('userinput').findOne({
            _id: mongo.ObjectID(id)
        }, done)

        function done(err, results) {
            if (err) return console.log(results)
            res.render('rendershirt.ejs', {
                data: results
            })
        }
    })
    .get('/getOld', (req, res) => {
        let pin = Number(req.query.search)

        db.collection('userinput').findOne({
            pin: pin
        }, done)

        function done(err, results) {
            if (err) return console.log(err)
            res.redirect('/funky-shirt/' + results._id)
        }
    })
    .post('/form', (req, res) => {
        const newPin = generateUniqueId({
            length: 4,
            useLetters: false
        });
        db.collection('userinput').insertOne({
            pin: Number(newPin),
            gender: req.body.gender,
            text: req.body.textshirt,
            colorshirt: req.body.colorshirt,
            colortext: req.body.colortext,
            type: req.body.typeshirt,
            hero: req.body.hero
        }, done)

        function done(error, results) {
            if (error) return console.log(error);
            // res.render('rendershirt.ejs', { data: req.query })
            res.redirect('/funky-shirt/' + results.insertedId)
        }

    })

    .post('/form/:id', (req, res) => {
        const id = req.params.id;
        console.log(id)
        db.collection('userinput').update({
                _id: mongo.ObjectID(id)
            }, {
                $set: {
                    gender: req.body.gender,
                    text: req.body.textshirt,
                    colorshirt: req.body.colorshirt,
                    colortext: req.body.colortext,
                    type: req.body.typeshirt,
                    hero: req.body.hero
                }
            }, {
                upsert: true
            },
            done);

        function done(error, result) {
            if (error) return console.log(error);
            res.redirect('/funky-shirt/' + id)
        }
    })
    .get('/form/:id', (req, res) => {
        const id = req.params.id;

        db.collection('userinput').findOne({
            _id: mongo.ObjectID(id)
        }, done);

        function done(error, results) {
            if (error) return console.log(error);
            res.render('/funky-shirt/' + results._id, {
                data: results
            })
        }
    })

app.listen(port)