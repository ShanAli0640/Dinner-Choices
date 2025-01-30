const express = require('express');
const mongose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to MongoDB
mongose.connect('mongodb://localhost/dinner-choices-db', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// Define routes + middleware
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


