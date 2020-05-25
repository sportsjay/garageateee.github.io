const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');

const PORT = 4000;

app.use(cors());
app.use(bodyParser.json());

const url = "mongodb://localhost:27017/garage-database";
mongoose.connect(url, {useNewUrlParser: true});
const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection established successfully");
})

const eventRouter = require('./routes/event');
const workshopRouter = require('./routes/workshop');
// const userRouter = require('./routes/user');

// app.use('/user', userRouter);
app.use('/events-data', eventRouter);
app.use('/workshops-data', workshopRouter);

app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});