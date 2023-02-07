import React, {useState} from 'react';
import style from './index.module.scss'

const Counter = () => {
  const [count,  setCount] = useState(1)
  return(
    <>
      <div className={style.count}>{count}</div>
      <button onClick={() => setCount((prevState => ++prevState))}>+</button>
    </>
  )
}

export default Counter;
