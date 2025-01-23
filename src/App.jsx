import { useEffect, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

import LoginPage from "./components/LoginPage/LoginPage"
import MainPage from "./components/MainPage/MainPage";
import AddTask from "./components/AddTask/AddTask";

const App = () => {

  const [user, setUser] = useState(() => {
    const savedUser = localStorage.getItem('user')
    return savedUser ? JSON.parse(savedUser) : null
  })

  const [tasks, setTasks] = useState([]);
  const hasUser = Boolean(user)

  useEffect(() => {
    if(user) {
      localStorage.setItem('user', JSON.stringify(user))
    } else {
      localStorage.removeItem('user')
    }
  }, [user]);

  return (
    <div>

      {
        <BrowserRouter>
          <Routes>
            <Route path="/" element={hasUser ? <Navigate to="/tasks" replace /> : <LoginPage onSubmit={setUser} />} />
            <Route path="/tasks" element={hasUser ? <MainPage name={user} tasks={tasks} /> : <Navigate to="/" replace />} />
            <Route path="/add-task" element={<AddTask tasks={tasks} setTasks={setTasks} />} />
          </Routes>
        </BrowserRouter>
      }

    </div>
  )
}

export default App