const Note = require("../models/note");

const noteIndex = async (req, res) => {
  try {
    const result = await Note.find().sort({ createdAt: -1 });
    res.render("index", { notes: result, title: "All Notes" });
  } catch (err) {
    console.log(err);
  }
};

const noteCreate = (req, res) => {
  res.render("create", { title: "create a new note" });
};

const notePost = (req, res) => {
  const note = new Note(req.body);
  note
    .save()
    .then((result) => res.redirect("/"))
    .catch((err) => console.log(err));
};

module.exports = {
  noteIndex,
  noteCreate,
  notePost
};
