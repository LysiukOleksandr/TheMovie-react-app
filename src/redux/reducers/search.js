const defaultState = {
  movies: [],
  isFetching: false,
  inputValue: "",
  totalPages: 0,
  currenPage: 1,
};

const search = (state = defaultState, action) => {
  switch (action.type) {
    case "SET_MOVIES":
      return {
        ...state,
        movies: action.payload[0],
        totalPages: action.payload[1],
      };

    case "IS_FETCHING":
      return {
        ...state,
        isFetching: action.payload,
      };

    case "SET_INPUT_VALUE":
      return {
        ...state,
        inputValue: action.payload,
      };

    case "SET_PAGINATION_DATA":
      return {
        ...state,
        currentPage: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};

export default search;
