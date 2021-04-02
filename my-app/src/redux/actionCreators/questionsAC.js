import { render } from "react-dom"
import {  RENDER_ALL, ADD_ID } from "../types/questionsTypes"


export const renderQuestions = (questions) => {
  return {
    type: RENDER_ALL,
    payload: questions
  }
}

