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


const quesSchema=mongoose.Schema({
    question:String,
    options:[String],
    crtoption:String
  });

const quesModel=mongoose.model('quesModel',quesSchema);


mongoose.connect('mongodb://127.0.0.1:27017/SEM6')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((err) => {
    console.error('Error connecting to MongoDB: ' + err);
  });

app.get("/create",(req,res)=>{
    const quizQuestions = [
        {
          question: "What is the capital of France?",
          options: ["Paris", "London", "Berlin", "Madrid"],
          crtoption: "Paris"
        },
        {
          question: "Which planet is known as the Red Planet?",
          options: ["Jupiter", "Mars", "Saturn", "Venus"],
          crtoption: "Mars"
        },
        {
          question: "Who wrote the play 'Romeo and Juliet'?",
          options: ["William Shakespeare", "Charles Dickens", "Jane Austen", "Leo Tolstoy"],
          crtoption: "William Shakespeare"
        },
        {
          question: "What is the chemical symbol for water?",
          options: ["H2O", "CO2", "O2", "NaCl"],
          crtoption: "H2O"
        },
        {
          question: "Which country is known as the Land of the Rising Sun?",
          options: ["China", "Japan", "India", "South Korea"],
          crtoption: "Japan"
        }
      ];
    quesModel.deleteMany()
    .then(()=>{
        quesModel.insertMany(quizQuestions)
        .then(() => {
            res.status(201).send('Questions Created successfully.');
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error creating questions.');
        });     
    })
    .catch((err)=>{
        console.err(err);
    })
    
});

app.get("/getQues",(req,res)=>{
    quesModel.find()
        .then(ques => {
            res.json(ques);
        })
        .catch(err => {
            console.error(err);
            res.status(500).send('Error fetching survey results.');
        });
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
