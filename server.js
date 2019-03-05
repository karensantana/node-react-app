const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const routes = require('./routes');

//Server up and running
app.listen(port, () => console.log(`Listening on port ${port}`));

app.use('/', routes);

