import Note from "../models/Note.js";
import Joi from "@hapi/joi";

const noteSchema = Joi.object({
  text: Joi.string().max(200).required(),
  date: Joi.date()
});

export const addNote = async (req, res) => {
  const { error } = noteSchema.validate({
    text: req.body.text,
    date: req.body.date
  });

  if (error) {
    return res.status(401).send(error.details[0].message);
  }

  const newNote = new Note(req.body);

  try {
    await newNote.save();
    res.status(201).send(newNote);
  } catch (error) {
    res.status(401).send(error.message);
  }
};

export const getNotes = async (req, res) => {
  try {
    const notes = await Note.find()
    res.status(200).send(notes);
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const deleteNote = async (req, res) => {
  try {
    await Note.findByIdAndRemove(req.params.id);
    res.status(200).send(`note with id: ${req.params.id} deleted successfully`);
  } catch (error) {
    res.status(404).send(error.message);
  }
};
