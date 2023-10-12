import {Routes, Route, BrowserRouter } from 'react-router-dom';
import './App.css'
import Landing from "./Views/Landing/Landing"

function App() {

  
  return (
    <div className='App'>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Landing />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
