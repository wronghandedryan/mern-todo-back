const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const todoRoutes = express.Router('./routes');
const PORT = 4000;





app.use(cors());
app.use(bodyParser.json());

mongoose.connect('mongodb://127.0.0.1:27017/Todo', { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
});

app.use('/todos', todoRoutes);




app.set('production', () => { app.use(express.errorHandler())
})





app.listen(PORT, function() {
    console.log("Server is running on Port: " + PORT);
});
