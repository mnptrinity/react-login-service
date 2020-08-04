const express = require('express');
const userRoutes = require('./routes/index');
const app = express();
var cors = require('cors')


/** importing the connection file */
require('./connection/index');

app.use(cors())

app.use(express.json());

app.use('/api/users', userRoutes);


const port = 4000;
app.listen(port, () => console.log(`Listening on port ${port}...`));