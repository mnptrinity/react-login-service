const mongoose = require('mongoose');


mongoose.connect('mongodb+srv://mohan:Mohan@007@cluster0-3q5nq.mongodb.net/booking?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('Now connected to MongoDB!'))
    .catch(err => console.error('Something went wrong', err));