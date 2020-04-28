const ADD_USER = 'ADD_USER';

export const addUser = userData => ({
  type: ADD_USER,
  userData,
});

export const usersSelector = state => state.users.usersList;

const initalState = {
  usersList: [],
};

const usersReducer = (state = initalState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: [...state.usersList, action.userData],
      };
    }

    default: return state;
  }
};

export default usersReducer;
