const Note = require("../models/Note");

// show notes
const noteIndex = async (req, res) => {
  try {
    const result = await Note.find().sort({ createdAt: -1 });
    res.render("index", { notes: result, title: "All Notes" });
  } catch (err) {
    console.log(err);
  }
};

// render create note page
const noteCreate = (req, res) => {
  res.render("create", { title: "create a new note" });
};

// save note
const notePost = (req, res) => {
  const note = new Note(req.body);
  note
    .save()
    .then((result) => res.redirect("/notes"))
    .catch((err) => console.log(err));
};

// show single note
const noteDetails = (req, res) => {
  const id = req.params._id;
  Note.findById(id)
    .then((result) => {
      res.render("details", { note: result, title: "Note Details" });
    })
    .catch((err) => {
      console.log(err);
      res.render("404", { title: "Note not found" });
    });
};

// delete note
const noteDelete = (req, res) => {
  const id = req.params._id;
  Note.findByIdAndDelete(id)
    .then((result) => {
      res.json({ redirect: "/notes" });
    })
    .catch((err) => {
      console.log(err);
    });
};

// render note edit page
const noteEditPage = (req, res) => {
  const id = req.params._id;
  Note.findById(id)
    .then((result) => {
      res.render("edit", { note: result, title: "Note Edit" });
    })
    .catch((err) => {
      console.log(err);
      res.render("404", { title: "Note not found" });
    });
};

// note edit
const noteEdit = (req, res) => {
  const id = req.params._id;
  Note.findByIdAndUpdate(id, req.body)
    .then((result) => res.redirect("/notes"))
    .catch((err) => console.log(err));
};

module.exports = {
  noteIndex,
  noteCreate,
  notePost,
  noteDetails,
  noteDelete,
  noteEditPage,
  noteEdit
};
