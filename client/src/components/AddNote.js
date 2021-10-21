import { useState } from "react";

import { useDispatch } from "react-redux";
import { addNote } from '../api/redux/actions/notes'

const AddNote = () => {
  const dispatch = useDispatch();
  const [note, setNote] = useState({
    text: "",
    date: Date.now,
  });
  const characterLimit = 200;

  const handleChange = (event) => {
    if (characterLimit - event.target.value.length >= 0) {
      setNote({ ...note, text: event.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (note.text.trim().length > 0) {
      await dispatch(addNote(note));
      setNote({
        text: "",
        date: Date.now,
      });
    }
  };

  return (
    <div className="note new">
      <form onSubmit={handleSubmit}>
        <textarea
          rows="8"
          cols="10"
          placeholder="Type to add a note..."
          value={note.text}
          onChange={handleChange}
        ></textarea>
        <div className="note-footer">
          <small>{characterLimit - note.text.length} Remaining</small>
          <button className="save" type="submit">
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddNote;
