const express = require("express");
const noteController = require("../controllers/noteController");

const router = express.Router();

const { noteIndex, notePost, noteCreate } = noteController;

router.get("/", noteIndex);
router.post("/", notePost);
router.get("/create", noteCreate);

module.exports = router;
