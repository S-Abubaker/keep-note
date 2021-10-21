const notes = (notes = [], action) => {
  switch (action.type) {
    case "GET_NOTES":
      return action.payload;

    case "ADD_NOTE":
      return [...notes, action.payload];

    case "DELETE_NOTE":
      return notes.filter((note) => note._id !== action.payload);

    default:
      return notes;
  }
};

export default notes;
