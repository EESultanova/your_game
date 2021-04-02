import { combineReducers } from 'redux'
import questionsReducer from './questionsReducer'//
import counterReducer from './counterReducer'//


 const rootReducer = combineReducers({
  questions: questionsReducer,
  counter: counterReducer
})

export default rootReducer
