const router = require('express').Router()
const {signup,login} = require('../controllers/Authcontroller')
const {signupValidations , loginValidations} = require('../middlewares/Authvalidations')


router.post('/login', loginValidations, login)
router.post('/signup', signupValidations, signup)
module.exports = router;