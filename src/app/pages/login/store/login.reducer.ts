import * as LoginActions from './login.actions';

export type Action = LoginActions.All;

export interface LoginState {
  name: string;
  loggedIn: boolean;
}

export const defaultState: LoginState = {
  name: '',
  loggedIn: false
};

const newState = (state, newData) => {
  return Object.assign({}, state, newData);
};

export const LoginReducer = (state: LoginState = defaultState, action) => {
  switch (action.type) {
    case LoginActions.LOGIN_SUCCESS: {
      return newState(state, { token: action.payload.token });
    }
    case LoginActions.LOGOUT_SUCCESS: {
      return newState(state, { ...defaultState });
    }
    case LoginActions.GET_USER_INFO_SUCCESS: {
      return newState(state, { name: action.payload.first + ' ' + action.payload.last });
    }
    default: {
      return state;
    }
  }
};
