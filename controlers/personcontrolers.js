const person = require('../model/modelperson')

// funtion de creqtion dune personne dqns la base de donne 

exports.createPerson = async (req, res) => {
    try {
        const newPerson = new person({
            name: req.body.name,
            age: req.body.age,
            favoriteFoods: req.body.favoriteFoods
        });

        const person = await newPerson.save()

        res.status(201).json(person)
    } catch (error) {
        res.status(400).json({ message: error.message })
    }
}


// function deletePerson with deleteone 

exports.deletePerson = async (req, res) => {
    try {
        const person = await Person.findByIdAndDelete(req.params.id)

        if (!person) return res.status(404).json({ message: 'Person not found' })

        res.json(person)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}      
// function  findPerson with find

exports.getPerson = async (req, res) => {
    try {
        const person = await Person.findById(req.params.id)

        if (!person) return res.status(404).json({ message: 'Person not found' })

        res.json(person)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
// function savePerson with save

exports.updatePerson = async (req, res) => {
    try {
        const person = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true })

        if (!person) return res.status(404).json({ message: 'Person not found' })

        res.json(person)
    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}
