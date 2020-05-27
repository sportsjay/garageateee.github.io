const router = require('express').Router();
let Event = require('../models/event.model');

router.route('/').get((req, respo) => {
    Event.find()
        .then(event => respo.json(event))
        .catch(err => respo.status(400).json('Error: '+ err));
});

router.route('/add').post((req, respo) => {
    const id            = req.body.id;
    const name          = req.body.name;
    // const date       = Date.parse(req.body.date);
    const location      = req.body.location;
    const description   = req.body.description;

    const newEvent  = new Event({
        id,
        name,
        // date,
        location,
        description,
    });

    newEvent.save()
    .then(() => respo.json('Exercise added!'))
    .catch(err => respo.status(400).json('Error: '+ err));
})

module.exports = router;

    
