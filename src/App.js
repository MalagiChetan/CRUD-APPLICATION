import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Container, Nav, Navbar } from 'react-bootstrap';
import Registration from './components/Registration';
import Login from './components/Login';
import Add from './components/Add';
import EmpDisplay from './components/EmpDisplay';
import { useState } from 'react';
import Edit from './components/Edit';
import { TableDataProvider } from './components/TableData';




// import Registration from './components/Registration';


function App() {
  const [detailForTable, setdetailForTable] = useState([]);

  const [eshow, seteshow] = useState(false);
  return (<Router>
    <div className="App">

      <>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand as={Link} to='/Registration'>Registration</Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link as={Link} to='/Login' >Login</Nav.Link>
              <Nav.Link as={Link} to='/Add'>Add </Nav.Link>
              <Nav.Link as={Link} to='/EmpDisplay'>EmpDisplay</Nav.Link>
            </Nav>
          </Container>
        </Navbar>

      </>
      <div>
        <Route path='/registration' component={Registration} />
        <Route path='/login' component={Login} />
        <TableDataProvider value={{ detailForTable, seteshow,eshow, setdetailForTable }}>
        <Route path='/edit' component={Edit} />
          <Route path='/add' component={Add} />
          <Route path='/empDisplay' component={EmpDisplay} />
        </TableDataProvider>
      </div>

    </div>
  </Router>
  );
}

export default App;
