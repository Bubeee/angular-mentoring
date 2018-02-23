import * as LoginActions from './login.actions';

export type Action = LoginActions.All;

export interface LoginState {
  name: string;
  token: string;
}

export const defaultState: LoginState = {
  name: '',
  token: ''
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export const LoginReducer = (state: LoginState = defaultState, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS: {
      return newState(state, { name: action.payload });
    }
    case LoginActions.LOGOUT_SUCCESS: {
      return newState(state, { ...defaultState });
    }
    case LoginActions.GET_USER_INFO_SUCCESS: {
      return newState(state, { name: action.payload });
    }
    default: {
      return state;
    }
  }
};
