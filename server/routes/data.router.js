const express = require('express');
const router = express.Router();
const pool = require('../modules/pool');

router.get('/admin', (req, res) => {
    console.log('in router /admin get', req);

    pool.query(`SELECT * FROM "feedback" ORDER BY "date"`)
        .then((result) => {
            res.send(result.rows);
        })
        .catch((error) => {
            console.log('error in get /admin', error);
            res.sendStatus(500);
        })

})

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

});

router.delete('/admin/:id', (req, res) => {
    console.log('in delete', req.params.id)

    let sqlText = `
        DELETE FROM "feedback"
        WHERE id = $1;
    `;

    let sqlParams = [
        req.params.id
    ];

    pool.query(sqlText, sqlParams)
        .then (response => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('failed to delete', err);
            res.sendStatus(500);
        })
});

router.put('/admin/:id', (req, res) => {
    console.log('in put', req.params.id);

    let sqlText = `
        UPDATE "feedback"
        SET "flagged" = $1
        WHERE "id" = $2
    `;

    let sqlParams = [
        req.body.flagged,
        req.params.id
    ];

    pool.query(sqlText, sqlParams)
        .then(dbRes => {
            res.sendStatus(200);
        })
        .catch(err => {
            console.log('put failure', err);
            res.sendStatus(500);
        })
})

module.exports = router;