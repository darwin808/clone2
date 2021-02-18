const initialState = {
  WomenDenim: [
    {
      name: "item1",
      price: 3900,
      style: "slim",
    },
    {
      name: "item2",
      price: 3900,
      style: "curvy",
    },
    {
      name: "item3",
      price: 4300,
      style: "skinny",
    },
    {
      name: "item4",
      price: 4300,
      style: "fatty",
    },
  ],
};

const WomenDenimReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_WOMAN_DENIM":
      return {
        ...state,
        WomenDenim: [...state.WomenDenim, action.payload],
      };
    default:
      return state;
  }
};

export default WomenDenimReducer;
