const STATUS = 'CHECK_STATUS';

const catReducer = (state = [], action) => {
  switch (action.type) {
    case STATUS: {
      return {
        text: 'Under Construction',
      };
    }
    default: return state;
  }
};

export default catReducer;
