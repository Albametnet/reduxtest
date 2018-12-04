const initialState = 0;
const numbers = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_NUM":
      return state =state +1;

    case "SUB_NUM":
      return state= state -1;

    default:
      return state;
  }
};

export default numbers