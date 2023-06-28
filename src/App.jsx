
import './App.css'
import {BrowserRouter as Router,Routes,Route} from "react-router-dom"
import Home from './component/Home'
import Singlemovie from './component/Singlemovie'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='movies/:id' element={<Singlemovie/>} />
      </Routes>
    </Router>
    </>
  )
}

export default App
