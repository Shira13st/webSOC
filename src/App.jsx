import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import Profile from './pages/Profile'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' Component={HomePage} />
        <Route path='/profile' Component={Profile} />
      </Routes>
    </Router>
  )
}
