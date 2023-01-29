const router = require('express').Router()

const homeController = require('./controllers/homeController')
const cubeController = require('./controllers/cubeController')

// router.get('/create', (req, res) => {
//     res.render('create')
// })

router.get('/', homeController.getHomePage)
router.get('/about', homeController.getAboutPage)
router.get('/create', cubeController.getCreateCube)

module.exports = router