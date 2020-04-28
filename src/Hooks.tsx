import React, { useState, useEffect, useRef } from 'react'

function useDebounce(fn: any, delay: any) {
  const { current } = useRef<any>({})
  function f(...args: any) {
    if (current.timer) {
      clearTimeout(current.timer)
    }
    current.timer = setTimeout(fn.bind(undefined, ...args), delay)
  }
  return f
}



const TestHooks = () => {
  const [counter, setCounter] = useState(0)
  const [counter2, setCounter2] = useState(0)

  const handleClick = useDebounce(function() {
    setCounter(counter + 1)
  }, 1000)

  useEffect(function() {
    const t = setInterval(() => {
      setCounter2(x => x + 1)
    }, 500)
    return clearInterval.bind(undefined, t)
  }, [])

  return(
    <div>
      <button onClick={handleClick}>click</button>
      <div>{counter}</div>
      <div>{counter2}</div>
    </div>
  )
}

export default TestHooks as React.SFC<any>
