

const initState = () => {
  const state = {
    db: [],
    counter: 0,
  }
  const fromLS = JSON.parse(window.localStorage.getItem('myApp'))

  return fromLS ? fromLS : state
}

export default initState
