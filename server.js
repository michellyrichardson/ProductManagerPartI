const express = require('express');
const app = express();
const cors = require('cors');
const port = 9001;
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

require('./server/config/mongoose');
require('./server/routes/routes')(app);

app.listen(port, () => console.log(`Listening on port ${port}`));