const express = require("express");
const noteController = require("../controllers/noteController");

const router = express.Router();

const { noteIndex } = noteController;

router.get("/", noteIndex);

module.exports = router;
