const express = require("express");
const noteController = require("../controllers/noteController");

const router = express.Router();

const {
  noteIndex,
  notePost,
  noteCreate,
  noteDetails,
  noteDelete
} = noteController;

router.get("/", noteIndex);
router.post("/", notePost);
router.get("/create", noteCreate);
router.get("/:id", noteDetails);
router.delete("/:id", noteDelete);

module.exports = router;
