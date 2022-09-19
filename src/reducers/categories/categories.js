const STATUS = 'CHECK_STATUS';

export const checkStatus = (text) => ({
  type: 'CHECK_STATUS',
  text,
});

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
