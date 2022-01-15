const router = require("express").Router();
const { notes } = require("../db/db.json");

router.get("/notes", (req, res) => {
    if (notes) {
        res.send(notes);
    } else {
        res.send("goodbye");
    }
}); 

module.exports = router;