import Note from "./Note";
import AddNote from "./AddNote";
import About from "./About";

const NotesList = ({ notes, handleDeleteNote, searchText }) => {
  return (
    <div className="notes-list">
      <AddNote />
      {notes &&
        notes
          .filter((val) => {
            if (searchText === "") {
              return val;
            } else if (
              val.text.toLowerCase().includes(searchText.toLowerCase())
            ) {
              return val;
            } else {
              return null;
            }
          })
          .reverse()
          .map((note) => (
            <div key={note._id}>
              <Note note={note} handleDeleteNote={handleDeleteNote} />
            </div>
          ))}
      <About />
    </div>
  );
};

export default NotesList;
