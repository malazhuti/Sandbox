const initialState = {}

const UserReducer = (state = initialState, { type, payload }:any) => {
  switch (type) {

  case '':
    return { ...state, ...payload }

  default:
    return state
  }
}

export default UserReducer;
