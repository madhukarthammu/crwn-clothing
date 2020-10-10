import { UserActionTypes } from './user.types'

const INITIAL_STATE = {
    currentUser: null,
    errorMessage: null
}

const userReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case UserActionTypes.SIGNIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload
            }
        case UserActionTypes.SIGNIN_FAILURE:
        case UserActionTypes.SIGNOUT_FAILURE:
        case UserActionTypes.SIGNUP_FAILURE:
            return {
                ...state,
                errorMessage: action.payload
            }
        case UserActionTypes.SIGNOUT_SUCCESS:
            return {
                ...state,
                currentUser: null
            }
        default:
            return state;
    }
}

export default userReducer;