import { RENDER_ALL, ADD_ID } from "../types/questionsTypes";

const questionsReducer = (state = [], action) => {
  switch (action.type) {

    // case RENDER_CHANGED:
    //   return 'ddddd'
      // return state.map(todo => {
      //   if (todo.id === action.payload.id) {
      //     return {
      //       ...todo,
      //       text: action.payload.text
      //     }
      //   }
      //   return todo
      // })
      
    case RENDER_ALL:
      return action.payload
        
    default:
      return state
  }
}

export default questionsReducer
