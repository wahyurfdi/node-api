const express = require('express')
const router = express.Router()
const user = require('../controllers/UserController')
const survey = require('../controllers/SurveyController')

router.get('/', (req, res)=> {
    res.send('Welcome to my API')
})
router.post('/user/login', user.login)
router.get('/user/:id/pemohon', survey.getSurvey)
//router.put('/user/:id/pemohon', survey.putSurvey)
router.get('/pemohon/:id/persetujuan', survey.getPersetujuan)
router.put('/pemohon/:id/persetujuan', survey.updatePersetujuan)
router.get('/pemohon/:id/files', survey.getFilesPemohon)


module.exports = router