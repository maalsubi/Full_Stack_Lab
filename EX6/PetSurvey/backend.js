// Import required modules
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors=require('cors');

// Create Express app
const app = express();

// Set up middleware
app.use(bodyParser.json());
app.use(cors());

// Connect to MongoDB

mongoose.connect('mongodb://127.0.0.1:27017/SEM6')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ' + err);
  });


// Define schema for survey responses
const surveySchema = new mongoose.Schema({
    Ownername:String,
    petType: String,
    breed:String,
    age: Number,
    color:String,
    trained:String,
    concerned_abuse:String,
    cage_sharing:String,
    food_type:String
});

// Create model based on schema
const PetSurvey = mongoose.model('PetSurvey', surveySchema);

// Handle POST request to submit survey
app.post('/survey', (req, res) => {
    const surveyData = req.body;
    console.log(surveyData);

    // Create a new survey instance
    const survey = new PetSurvey(surveyData);

    // Save the survey to the database
    survey.save()
        .then(() => {
            res.status(201).send('Survey submitted successfully.');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error submitting survey.');
        });
});

// Handle GET request to fetch overall survey results
app.get('/survey/results', (req, res) => {
    PetSurvey.find()
        .then(surveys => {
            res.json(surveys);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error fetching survey results.');
        });
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
