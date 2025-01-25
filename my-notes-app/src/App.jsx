import { Routes, Route } from 'react-router-dom'
import './App.css'
import HomePage from './pages/HomePage'
import NotesPage from './pages/NotesPage'

function App() {
  return (
    <>
  <Routes>
    <Route path="/" element={<HomePage />}></Route>
    <Route path="/notes" element={<NotesPage />}></Route>
  </Routes>
    </>
  )
}

export default App
