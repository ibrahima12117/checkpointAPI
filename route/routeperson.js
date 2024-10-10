const express = require('express')
const router = express.Router()
router.use(express.json())
const Person = require('../controlers/personcontrolers')
router.post('/person', Person.createPerson)

router.delete('/person/:id', Person.deletePerson)

router.get('/controlers/personcontrolers/getPerson', Person.getPerson)
router.put('/controlers/personcontrolers.js/updatePerson', Person.updatePerson)

 module.exports = router
