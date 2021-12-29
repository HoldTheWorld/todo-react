import { useState, useEffect } from 'react'

import './App.css';
import Pagination from './components/Pagination/Pagination';
import Card from './components/Card/Card'


function App() {
  const [todos, setTodos] = useState([])
  const [loading, setLoading] = useState(false)
  const [currentPage, setCurrentPage] = useState(1)
  const [perPage] = useState(7);

  const lastTodoIndex = currentPage * perPage;
  const firsTodoInd = lastTodoIndex - perPage;
  const currentTodo = todos.slice(firsTodoInd, lastTodoIndex)

  const paginate = pagenumber => setCurrentPage(pagenumber)

  const nextPage = () => {
    if (currentPage == Math.ceil(todos.length / perPage)) {
      setCurrentPage(0)
    }
    setCurrentPage( prev => prev +1 )
  }
  const prevPage = () =>  {
    if(currentPage == 1) {
      setCurrentPage(Math.ceil(todos.length / perPage) + 1)
    }
    setCurrentPage( prev => prev - 1 ) 
  }

  useEffect( () => {
    async function getTodos() {
      const response =  await fetch('http://localhost:3001', {
      credentials: 'include'
    })
    const result = await response.json()
    setTodos(result)   
    }
    getTodos()
  }, [])



  return (
    <div className='container'>
    <Card currentTodo={currentTodo} loading={loading} nextPage={nextPage} prevPage={prevPage}/>
    {/* <Pagination todos={todos} perPage={perPage} paginate={paginate}/> */}
    <div className='author'>
      @2021, Irina K
    </div>
    </div>
  );
}

export default App;
