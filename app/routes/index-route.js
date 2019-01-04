var express = require("express");
var router = express.Router();

router.get("/", async function(req, res) {
    res.render("index-tmpl", {
        title: "CS Ranking Vis"
    });
});

module.exports = router;
