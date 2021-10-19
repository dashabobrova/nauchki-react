export const GET_USER_DATA = 'GET_USER_DATA';

const initialState = {
    userData: {}
  }

export const userReducer = (state = initialState, action) => {
    switch(action.type){
      case GET_USER_DATA:
        return {
          ...state,
          userData: action.payload,
        }
      default:
        return state
    }
}

export const getUserDataAC = (payload) => ({type: GET_USER_DATA, payload})