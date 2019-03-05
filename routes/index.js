const routes = require('express').Router();

routes.get('/express_backend', (req, res) => {
    res.send({ express: 'EXPRESS BACKEND IS CONNECTED TO REACT' });
});

module.exports = routes;