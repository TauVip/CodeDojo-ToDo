import React from 'react'
import './App.scss'
import { db } from './firebase'
import AppDrawer from './components/AppDrawer'
import AppContent from './components/AppContent'

const App = () => {
  const [todos, setTodos] = React.useState([])

  React.useEffect(() => {
    db.collection('todos')
      .get()
      .then(snapshot => {
        const todos = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }))

        setTodos(todos)
      })
      .catch(error => {
        console.log('Error getting document: ', error)
      })
  }, [])

  return (
    <div className='App'>
      <AppDrawer />

      <AppContent>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      </AppContent>
    </div>
  )
}
export default App
