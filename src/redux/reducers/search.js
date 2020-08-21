const defaultState = {
  movies: [],
  isFetching: false,
};

const search = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload,
      };

    case "IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default search;
