import React, { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { counterINC } from "../../redux/actionCreators/counterAC"


function Form({id, onClose, text, answer, points}) {

  const [input, setInput] = useState('')
  const [res, setRes] = useState('')
  const dispatch = useDispatch()


  console.log('id, text, answer ---->',onClose, id, text, answer)
  console.log('answer ---->', points)

  const inputHandler = (event) => {
    setInput(event.target.value)
  }
  
  const submitHandler = (e) => {
    e.preventDefault()
    if (input) {
      if (input == answer) {
        setRes('CORRECT!!!1')
        dispatch(counterINC(points))
        setTimeout(() => {
          onClose()
        }, 2000);
      } else {
        setRes('FALSE!!!1')
        dispatch(counterINC(-points))
        setTimeout(() => {
          onClose()
        }, 2000);
        
      }
    }
  }
  
  return(
    <>
    <form onSubmit={submitHandler}>
      <div>
        <input onChange={inputHandler} placeholder="Здесь должен быть ваш ответ"></input>
      </div>
      <button type="submit" className="btn btn-primary mx-1">Submit</button>
    </form>
    <div>
      <p>{res}</p>
    </div>
    </>
  )
}


export default Form
