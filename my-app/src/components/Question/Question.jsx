import { Row, Col, Button } from 'antd';
import { useDispatch } from "react-redux"
import React, { useState } from 'react'
import Modal from "../Modal/Modal"
import Form from "../Form/Form"
import {changeStatus} from '../../redux/actionCreators/questionsAC'


function Question({key, questions, status, title}) {
  const dispatch = useDispatch()

  const style = { background: '#0092ff', padding: '8px 0' };
  
  const [isOpen, setIsOpen] = useState(false)
  const [questionId, setQuestionId] = useState(0)
  const [questionText, setquestionText] = useState('')
  const [questionAnswer, setquestionAnswer] = useState('')
  const [questionPoints, setquestionPoints] = useState(0)

function someFunc(id, text, answ, points) {
  setIsOpen(true)
  setQuestionId(id)
  setquestionText(text)
  setquestionAnswer(answ)
  setquestionPoints(points)
  dispatch(changeStatus(id, key))
}

  return (
    <>
   <div>
    <Row gutter={[8, 24]} align="middle" >
      <Col className="que" span={4}>
        {title}
      </Col>
        {questions.map(el =>
          <Col flex="auto">
            <Button onClick={() =>
               someFunc(el.id, el.text, el.answ, el.points)} className={`${status} que-btn`} size="large" ghost="true" block>{el.points}</Button>
          </Col>)}
         <Modal open={isOpen} questionIdForModal={questionId} onClose={() => setIsOpen(false)}>
         {questionText}
         <Form  onClose={() => setIsOpen(false)} id={questionId} text={questionText} answer={questionAnswer} points={questionPoints}/>
        </Modal>
        </Row>
   </div>
    </>
   
  )
}

export default Question

