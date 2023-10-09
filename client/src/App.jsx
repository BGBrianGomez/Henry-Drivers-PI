import { Route, Switch } from 'react-router-dom';
import './App.css'
import landing from "./Views/Landing/Landing"

function App() {

  
  return (
    <div className='App'>
      <Switch>
        <Route path="/" element={<landing/>}/>
      </Switch>
    </div>
  )
}

export default App
