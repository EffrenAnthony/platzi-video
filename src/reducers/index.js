const reducer = (state, action) => {

  switch (action.type) {
    case 'SET_FAVORITE':
      return {
        ...state,
        myList: [...state.myList, action.payload],
      };
    case 'DELETE_FAVORITE':
      return {
        ...state,
        // para saber si tenemos o no el item que no cumpla con la condición
        myList: state.myList.filter((items) => items.id !== action.payload),
      };
    default:
      return state;
  }

};

export default reducer;
