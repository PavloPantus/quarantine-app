const ADD_USER = 'ADD_USER';
const SET_CURRENT_USER = 'SET_CURRENT_USER';

export const addUser = userData => ({
  type: ADD_USER,
  userData,
});

export const usersSelector = state => state.users.usersList;

export const setCurrentUser = userData => ({
  type: SET_CURRENT_USER,
  userData,
});

export const currentUserSelector = state => state.users.currentUser;

const initialState = {
  currentUser: null,
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER: {
      return {
        ...state,
        usersList: [...state.usersList, action.userData],
      };
    }

    case SET_CURRENT_USER: {
      return {
        ...state,
        currentUser: action.userData,
      };
    }

    default: return state;
  }
};

export default usersReducer;
