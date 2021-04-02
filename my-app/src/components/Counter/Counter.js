import { useDispatch, useSelector } from "react-redux"
import { counterINC } from "../../redux/actionCreators/counterAC"

function Counter () {

  const dispatch = useDispatch()
  const counter = useSelector(state => state.counter)


  return (
    <div>
      Points: {counter}
    </div>
  )
}

export default Counter
