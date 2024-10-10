// Import the Person model
const Person = require('../model/modelperson');

// Function to create a person in the database
module.exports.createPerson = async (req, res) => {
    try {
        // Check if the required properties are present in req.body
        if (!req.body.name || !req.body.age || !req.body.favoriteFoods) {
            return res.status(400).json({ message: "Les données de la requête sont incomplètes" });
        }

        // Create a new instance of the Person model
        const person = new Person({
            name: req.body.name,
            age: req.body.age,
            favoriteFoods: req.body.favoriteFoods
        });

        // Save the person instance
        const personpost = await person.save();

        // Respond with the created person object
        res.status(201).json(personpost);
    } catch (error) {
        // Handle errors
        res.status(400).json({ message: error.message });
    }

    console.log(req.body);
};

// Function to delete a person using deleteOne
exports.deletePerson = async (req, res) => {
    try {
        console.log(`Attempting to delete person with ID: ${req.params.id}`);
        const persondel = await Person.findByIdAndDelete(req.params.id);

        if (!persondel) {
            console.log('Person not found');
            return res.status(404).json({ message: 'Person not found' });
        }

    
        console.log('Person deleted:', persondel);
        res.json(persondel);
    } catch (error) {
        console.error('Error deleting person:', error.message);
        res.status(500).json({ message: error.message });
    }
    console.log(this.deletePerson)
};


// Function to find a person by ID
exports.getPerson = async (req, res) => {
    try {
        const personget = await Person.findById(req.params.id);

        if (!personget) return res.status(404).json({ message: 'Person not found' });

        res.json(personget);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Function to update a person using save
exports.updatePerson = async (req, res) => {
    try {
        const personup = await Person.findByIdAndUpdate(req.params.id, req.body, { new: true });

        if (!personup) return res.status(404).json({ message: 'Person not found' });

        res.json(personup);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
