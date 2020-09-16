const mongoose = require('mongoose');
mongoose.connect("mongodb://localhost/db-products2", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => 
        console.log("connection established"))
    .catch(err =>
        console.log("Something wrong connecting to database", err));    