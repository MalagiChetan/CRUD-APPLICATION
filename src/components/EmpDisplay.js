import React, { useContext, useState } from 'react';
import { Modal } from 'react-bootstrap';
import TableData from './TableData';
import Edit from './Edit';


function EmpDisplay() {
  const [eshow, seteshow] = useState(false);
  const [pshow, setpshow] = useState(false);
  const appTableDetailinTable = useContext(TableData)
  const copyOfdetailForTableinTable = appTableDetailinTable.detailForTable
  console.log(copyOfdetailForTableinTable);
  const copyOfsetdetailForTableinTable = appTableDetailinTable.setdetailForTable
  const editOpen = () => {
    // props.history.push("/edit")
    seteshow(!eshow)

    
  }
  const deleteData = (index) => {
    const copydetailForTable = [...copyOfdetailForTableinTable]
    copydetailForTable.splice(index, 1)
    copyOfsetdetailForTableinTable(copydetailForTable)
  }
  return <div>
    <table className="table table-dark">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Name</th>
          <th scope="col">Designation</th>
          <th scope="col">Salry</th>
          <th scope="col">Age</th>
          <th scope="col"></th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {copyOfdetailForTableinTable.map((data, index) => {
          return <tr key={index}>
            <th scope="row">1</th>
            <td>{data.fullname}</td>
            <td>{data.designation}</td>
            <td>{data.salary}</td>
            <td>{data.age}</td>
            <td><Edit/></td>
            <td><button className='btn btn-danger' onClick={() => { deleteData(index) }}>Delete</button></td>
          </tr>
        })}
      </tbody>
    </table>
    <Modal show={eshow}>
<Edit eshow={eshow} seteshow={seteshow} setpshow={setpshow}pshow={pshow}/>
{/* <Edit/> */}
    </Modal>
  </div>;
}

export default EmpDisplay;
