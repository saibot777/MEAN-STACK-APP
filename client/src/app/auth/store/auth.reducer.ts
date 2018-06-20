import {User} from '../user.model';
import {AuthActions, AuthActionTypes} from './auth.actions';

export interface AuthState {
  loggedIn: boolean;
  user: User | null;
}

export const initialAuthState: AuthState = {
  loggedIn: false,
  user: undefined
};

export function authReducer(state = initialAuthState,
                            action: AuthActions): AuthState {
  switch (action.type) {

    case AuthActionTypes.LoginAction: {
      return {
        ...state,
        loggedIn: true,
        user: {
          token: action.payload.user.token,
          email: action.payload.user.email
        }
      };
    }

    case AuthActionTypes.RegisterAction: {
      return {
        ...state,
        loggedIn: false,
        user: {
          name: action.payload.user.name,
          token: action.payload.user.token,
          email: action.payload.user.email
        }
      };
    }

    case AuthActionTypes.LogoutAction:
      return {
        loggedIn: false,
        user: undefined
      };

    default:
      return state;
  }
}
