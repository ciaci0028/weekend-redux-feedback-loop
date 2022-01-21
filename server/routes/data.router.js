const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.post('/', (req, res) => {
    console.log('in router /post', req.body);

    let sqlText = `
        INSERT INTO "feedback"
            ("feeling", "understanding", "support", "comments")
        VALUES
            ($1, $2, $3, $4)
    `;

    let sqlParams = [
        req.body.feeling,
        req.body.understanding,
        req.body.support,
        req.body.comments
    ];

    pool.query(sqlText, sqlParams)
        .then(result => {
            console.log('post to server success', result);
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('post to server failure', err);
            res.sendStatus(500);
        })

})

module.exports = router;