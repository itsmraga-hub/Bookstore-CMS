const ADD_BOOK = 'ADD-BOOK';
const REMOVE_BOOK = 'REMOVE-BOOK';


const booksReducer = (state = defaultState, action) => ({
  switch (action.type) {
    case ADD_BOOK: {
      return {
        
      }
      break;
    }
    case REMOVE_BOOK: {
      break;
    }
    default: return state;
  }
});

export default booksReducer;