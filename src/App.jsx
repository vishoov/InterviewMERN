
import './App.css'
import { TodoProvider } from './assignment question 2/TodoContext'
import First from './questions/First'
import Github from './questions/github'
import Todo from './Todo'

function App() {


  return (

    <>
    <TodoProvider>
      {/* <First /> */}
      {/* <Github /> */}
      <Todo />
      </TodoProvider>
    </>
  )
}

export default App
