import React, { useContext, useState } from 'react';
import { withRouter } from 'react-router-dom';
import TableData from '../context/TableData';
import EmpDisplay from './EmpDisplay';

function Add(props) {
  const appTableDetail = useContext(TableData)
  const copyOfdetailForTable = appTableDetail.detailForTable
  const copyOfsetdetailForTable = appTableDetail.setdetailForTable
  

// console.log(copyOfdetailForTable);
  // const [detailForTable, setdetailForTable] = useState([]);
  const [addDetails, setaddDetails] = useState({
    fullname: '',
    designation: '',
    salary: '',
    age: ''
  });
  const addData = (event) => {

    const copyaddDetails = { ...addDetails }
    copyaddDetails[event.target.name] = event.target.value
    setaddDetails(copyaddDetails)
  }

  const getAddDetails = (e) => {
    e.preventDefault();
    // validateFirstName(addDetails.fullname)
    copyOfsetdetailForTable(addDetails)
    const copydetailForTable = [...copyOfdetailForTable]
    copydetailForTable.push(addDetails)
    copyOfsetdetailForTable(copydetailForTable)
    // console.log(copydetailForTable);
    props.history.push("/empDisplay")
  }
  // console.log(detailForTable);
  return <div>
    <div className='container add'>
      <div className='row'>
        <div className='col-md-5  offset-4'>
          <div className='card'>
            <div className='heading'>
              <h1>Add Employee</h1>
            </div>
            <div className='container mt-2 mb-5 m-lg-2 '>
              <form>
                <div className="form-row ">
                  <div className="form-group col-md-13">
                    <label htmlFor="inputEmail4">Full Name</label>
                    <input type="text" className="form-control" onChange={(event) => { addData(event) }} name='fullname' value={addDetails.fullname} />
                  </div>
                  <div className="form-group col-md-13">
                    <label htmlFor="inputPassword4">Designation</label>
                    <input type="text" className="form-control" name='designation' onChange={(event) => { addData(event) }} value={addDetails.designation} />
                  </div>
                </div>


                <div className="form-row">

                  <div className="form-group col-md-13">
                    <label htmlFor="inputZip">Salary</label>
                    <input type="number" className="form-control" name='salary' onChange={(event) => { addData(event) }} value={addDetails.salary} />
                  </div>
                  <div className="form-group col-md-13">
                    <label htmlFor="inputZip">Age</label>
                    <input type="number" className="form-control" name='age' onChange={(event) => { addData(event) }} value={addDetails.age} />
                  </div>
                </div>

                <button type="submit" className="btn btn-primary mt-3 mb-2 btn1" onClick={getAddDetails}>Submit</button>
              </form>
            </div>
          </div>
        </div>

      </div>

    </div>

  </div>;
}

export default withRouter(Add);
