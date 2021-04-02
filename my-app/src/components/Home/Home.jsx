import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { renderQuestions } from '../../redux/actionCreators/questionsAC'
import Question from "../Question/Question";


function Home() {
  const games = useSelector(state => {
    console.log('state', state)
    return state.questions
  })
  
  const dispatch = useDispatch()
 
  useEffect(() => {
    fetch('http://localhost:3000/api/v1/game')
      .then(res => res.json())
      .then(resBody => dispatch(renderQuestions(resBody)))
  }, [])

  return (
    <ul className="list-group pt-4">
      {
        games.map((question) => <Question key={question.id} question={question.questions} />)
      }
    </ul>
  )
}

export default Home
