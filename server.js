const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3000

app
    .use(express.static(path.join(__dirname, 'public')))
    .use(express.urlencoded({
        extended: true
    }))
    .use(express.json())
    .set('view engine', 'ejs')
    .set('views', 'views')


app
    .get('/', (req, res) => res.render('./index.html'))
    .post('/funky-shirt', (req, res) => {
        const text = req.body.textshirt,
            colorShirt = req.body.colorshirt,
            colorText = req.body.colortext,
            typeShirt = req.body.typeshirt
        
        res.render('rendershirt.ejs', {
            data:req.body
        })
    })
    .get('/designed', (req, res) => {
        res.render('rendershirt.ejs', {
            data: data
        })
    })



app.listen(port)