import { INC } from "../types/counterTypes";

function counterReducer(state = 0, action) {
  switch (action.type) {
    case INC:
      return state = state + action.payload
  
    default:
      return state
  }
}


export default counterReducer
