import { render } from "react-dom"
import {  RENDER_ALL, CHANGE_STATUS } from "../types/questionsTypes"


export const renderQuestions = (questions) => {
  return {
    type: RENDER_ALL,
    payload: questions
  }
}

export const changeStatus = (id, key) => {
  return {
    type: CHANGE_STATUS,
    payload: {id, key}
  }
}
