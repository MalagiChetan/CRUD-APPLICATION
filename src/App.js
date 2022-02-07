
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/css/bootstrap.css'
import AddEmployee from './component/AddEmployee';
import { BrowserRouter as Router, Route,Switch } from 'react-router-dom';
import Table from './component/Table';


function App() {
  return (
    <Router>
      <div className="App">


      <Switch>
        <Route exact path='/' component={Table}/>
        <Route exact path="/AddEmployee" component={AddEmployee}/>
      </Switch>

    </div>
    </Router>
  );
}

export default App;
