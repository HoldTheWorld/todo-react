import styles from './card.module.css'
import { useState, useRef } from 'react'


function Card({currentTodo, nextPage, prevPage}) {
  const checkTodo = useRef(null);
  console.log(checkTodo);


  const [isChecked, setChecked] = useState(new Array(currentTodo.length).fill(false))
  const handleCheck = (id) => {
     const updateChecks = isChecked.map((el, i) => 
     i == id ? !el : el
     )
     setChecked(updateChecks)

  }

  return (
    <>
    <div className={styles.card_wrapper}>
      <div className={styles.card_header}>
        <div>
          Todo list
        </div>
        <button>
          ADD
        </button>
      </div>
      <div className={styles.todo_wrapper}>
        <button onClick={prevPage}> &lt; </button>
      <div className={styles.card_todos}>
        {currentTodo.map((el) => (
          <ul className={styles.oneTodo} key={el.id}>
            <label  className={styles.label} htmlFor={el.id}>
              <input className={styles.checkbox} id={el.id} onChange={() => handleCheck(el.id)} type='checkbox' checked={isChecked[el.id]} /> <span className={styles.text}> {el.title} </span> 
            </label>
          </ul> ))}
      </div>
      <button onClick={nextPage}> &gt; </button>
      </div>

    </div>

    </>
  )
}

export default Card
