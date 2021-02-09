const express = require("express");
const noteController = require("../controllers/noteController");

const router = express.Router();

const {
  noteIndex,
  notePost,
  noteCreate,
  noteDetails,
  noteDelete,
  noteEditPage,
  noteEdit
} = noteController;

router.get("/", noteIndex);
router.post("/", notePost);
router.get("/create", noteCreate);
router.get("/:_id", noteDetails);
router.delete("/:_id", noteDelete);
router.get("/edit/:_id", noteEditPage);
router.put("/:_id", noteEdit);

module.exports = router;
