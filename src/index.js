const express = require('express')
const app = express()
const setupViewEngine = require('./config/viewEngine')
const config = require('./config')
setupViewEngine(app)

app.use(express.static('src/public'))

app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.get('/', (req, res) => {
    res.render('home', {layout: false})
})

app.listen(config.PORT, () => {
    console.log(`Server is running on port ${config.PORT}...`);
})

