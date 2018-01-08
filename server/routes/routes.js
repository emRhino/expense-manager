const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const Expense = require('../../models/Expense.js');

router.get('/', (req, res) => res.render('index'));

router.route('/insert').post( (req, res) => (
    const expense = new Expense();
    expense.decrition = req.body.desc;
    expense.amount = req.body.amount;
    expense.month = req.body.month;
    expense.year = req.body.year;
));

expense.save(function(err){
    if (err) {
        res.send(err);
    } else {
        res.send('Expense successfully added!');
    }
})

module.exports = router;
