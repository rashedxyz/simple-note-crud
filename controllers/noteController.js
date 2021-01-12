const Note = require("../models/note");

const noteIndex = async (req, res) => {
  try {
    const result = await Note.find().sort({ createdAt: -1 });
    res.render("index", { notes: result, title: "All Notes" });
  } catch (err) {
    console.log(err);
  }
};

module.exports = {
  noteIndex
};
