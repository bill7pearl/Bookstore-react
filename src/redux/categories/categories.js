const STATUS_CHECKING = 'STATUS_CHECKING';
const initialState = {
  categories: [],
  checking: false,
  msg: '',
};

const statusCheck = () => ({
  type: STATUS_CHECKING,
});

const categoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case STATUS_CHECKING:
      return {
        ...state,
        checking: true,
        msg: 'Under construction',
      };
    default:
      return state;
  }
};

export default statusCheck;
export { categoryReducer };
