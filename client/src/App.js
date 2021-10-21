import { useState, useEffect } from "react";
import NotesList from "./components/NotesList";
import Search from "./components/Search";
import Header from "./components/Header";

import { useDispatch, useSelector } from "react-redux";
import { getNotes, deleteNote } from "./api/redux/actions/notes";

const App = () => {
  const dispatch = useDispatch();

  const [searchText, setSearchText] = useState("");

  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    dispatch(getNotes());
  }, [dispatch]);

  const notes = useSelector((state) => state.notes);

  const removeNote = (id) => {
    dispatch(deleteNote(id));
  };

  return (
    <div className={`${darkMode && "dark-mode"}`}>
      <div className="container">
        <Header handleToggleDarkMode={setDarkMode} />
        <Search handleSearchNote={setSearchText} />
        <NotesList
          notes={notes}
          searchText={searchText}
          handleDeleteNote={removeNote}
        />
      </div>
    </div>
  );
};

export default App;
