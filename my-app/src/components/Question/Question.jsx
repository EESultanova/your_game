import { useDispatch } from "react-redux"



function Question({key, question}) {
  // const dispatch = useDispatch()

  return (
   <div>
    {question.map(el => <p>{el.text} {el.answ} {el.points}</p>)}

   </div>
  )
}

export default Question
