import { MdDeleteForever } from "react-icons/md";
import moment from "moment";

const Note = ({ note, handleDeleteNote }) => {
  return (
    <div className="note">
      <span>{note.text}</span>
      <div className="note-footer">
        <small>{moment(note.date).format("MMMM Do YYYY, h:mm a")}</small>
        <MdDeleteForever
          onClick={() => handleDeleteNote(note._id)}
          className="delete-icon"
          size="1.3em"
        />
      </div>
    </div>
  );
};

export default Note;
