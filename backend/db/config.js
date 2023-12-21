const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://admin:di3GLJ7QUf6xq3Mz@cluster0.qa1fxfr.mongodb.net/?retryWrites=true&w=majority")
.then(() => {
    console.log("Connected Successfully")
});