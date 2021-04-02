import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react';
import { Card } from 'antd';
import { renderQuestions } from '../../redux/actionCreators/questionsAC'
import Question from "../Question/Question";
import Counter from "../Counter/Counter";


function Home() {
  const games = useSelector(state => state.questions)

  const dispatch = useDispatch()

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/game')
      .then(res => res.json())
      .then(resBody => dispatch(renderQuestions(resBody)))
  }, [])

  return (
    <>
      {
        games.map((question) => <Question key={question.id} status={question.status} questions={question.questions} title={question.title} />)
      }
      <Card
        className="username"
        hoverable
        style={{ width: 240 }}
        cover={<img alt="example" src="https://stuki-druki.com/biofoto/Anatoliy-Vasserman-01.jpg" />}
      >
        Онотоле says:
        <Counter/>
      </Card>
    </>
  )
}

export default Home
