// useReducer: simple Counter
// http://localhost:3000/isolated/exercise/01.js

import * as React from 'react'

function Counter({initialCount = 0, step = 1}) {
  const countReducer = (prevCount, newCount) => {
    if (typeof newCount === 'function') {
      return {...prevCount, ...newCount(prevCount)} 
    }
    else {
      return {...prevCount, ...newCount}
    }
  }

  const [state, setCount] = React.useReducer(countReducer, {count: initialCount})
  const {count} = state
  const increment = () => setCount(currentState => ({count: currentState.count + step}))
  return <button onClick={increment}>{count}</button>
}

function App() {
  return <Counter />
}

export default App
