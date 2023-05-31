import './App.css'
import TodoList from './pages/TodoList'
import EditTodo from './pages/EditTodo'
import {Routes, Route} from 'react-router-dom'


function App() {
  return (
    <Routes>
      <Route path='/' element={<TodoList />} />
      <Route path='/:id' element={<EditTodo />} />
      
    </Routes>
  )
}

export default App
