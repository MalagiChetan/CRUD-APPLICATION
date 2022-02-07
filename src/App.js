import './App.css';
import AddDetails from './components/AddDetails';
import Registration from './components/Registration';

import Login from './components/Login';
import UpdateEmployee from './components/UpdateEmployee';


function App() {
  return (
    <div className="App">
     <AddDetails/>
      <Registration/>
      <Login/>
      <UpdateEmployee />
    </div>
  );
}

export default App;
