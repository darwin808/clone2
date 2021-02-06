const initialState = {
  DbData: [],
};
const DbDataReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_DATA":
      return {
        ...state,
        DbData: [...state.DbData, action.payload],
      };
    default:
      return state;
  }
};
export default DbDataReducer;
