const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;
const knex = require('knex')(require('C:/jsfiles/knex-setup-1/knexfile.js') ['development'] );
// change process.env.NODE_ENV to 'development'

app.use(express.json());

app.get('/movies', (req, res) => {
    knex
        .select('*')
        .from('movies')
        .then(data => res.status(200).json(data))
        .catch(err => 
            res.status(404).json({
                message:
                    'These are not the droids you are looking for, you can go about your buisness; Move along.'
            })
        );
});

app.listen(PORT, () => {
    console.log(`The server is runnig on ${PORT}`)
})