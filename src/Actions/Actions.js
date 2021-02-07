export const toggle = () => {
  return {
    type: "TOGGLE",
  };
};

export const falseMen = () => {
  return {
    type: "FALSE_MEN",
  };
};

export const trueMen = () => {
  return { type: "TRUE_MEN" };
};

export const falseWomen = () => {
  return {
    type: "FALSE_WOMEN",
  };
};

export const trueWomen = () => {
  return {
    type: "TRUE_WOMEN",
  };
};

export const navHoverOn = () => {
  return {
    type: "NAVCOLOR_HOVER_ON",
  };
};

export const navHoverOFF = () => {
  return {
    type: "NAVCOLOR_HOVER_OFF",
  };
};

export const trueDenim = () => {
  return {
    type: "TRUE_DENIM",
  };
};

export const falseDenim = () => {
  return {
    type: "FALSE_DENIM",
  };
};

export const trueAbout = () => {
  return {
    type: "TRUE_ABOUT",
  };
};

export const falseAbout = () => {
  return {
    type: "FALSE_ABOUT",
  };
};
export const addItemInCart = (data) => {
  return {
    type: "ADD_ITEM",
    payload: data,
  };
};
export const fetchDbData = (data) => {
  return {
    type: "FETCH_DATA",
    payload: data,
  };
};
export const deleteItemCart = (id) => {
  return {
    type: "DELETE_ITEM",
    payload: id,
  };
};
