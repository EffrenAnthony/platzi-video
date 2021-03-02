const reducer = (state, action) => {
  // let adItem = '';
  // const listaIdTemp = [];
  // if (state.myList.length > 0) {
  //   state.myList.forEach((element) => {
  //     console.log(element.id);
  //     listaIdTemp.push(element.id);
  //   });
  //   // adItem = !listaIdTemp.includes(action.payload.id) && action.payload;
  //   adItem = !listaIdTemp.includes(action.payload.id) ? action.payload : null;
  // }

  switch (action.type) {
    case 'SET_FAVORITE':
      // return adItem !== null && {
      // return {
      //   ...state,
      //   // myList: [...state.myList, listaTemp.includes(action.payload) && action.payload],
      //   // myList: [...state.myList, state.myList.length > 0 ? adItem : action.payload],
      //   myList: [...state.myList, action.payload],
      // };
      // if (state.myList.length > 0) {
      // eslint-disable-next-line no-case-declarations
      const exist = state.myList.find((item) => item.id === action.payload.id);
      if (exist) return { ...state };
      // }
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
    case 'LOGIN_REQUEST':
      return {
        ...state,
        // para saber si tenemos o no el item que no cumpla con la condición
        user: action.payload,
      };
    case 'LOGOUT_REQUEST':
      return {
        ...state,
        // para saber si tenemos o no el item que no cumpla con la condición
        user: action.payload,
      };
    case 'REGISTER_REQUEST':
      return {
        ...state,
        // para saber si tenemos o no el item que no cumpla con la condición
        user: action.payload,
      };
    case 'GET_VIDEO_SOURCE':
      return {
        ...state,
        // para saber si tenemos o no el item que no cumpla con la condición
        playing: state.trends.find((item) => item.id === Number(action.payload)) ||
                state.originals.find((item) => item.id === Number(action.payload)) ||
                [],
      };
    default:
      return state;
  }
};

export default reducer;
