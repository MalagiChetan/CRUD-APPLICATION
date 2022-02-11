import React, { useState,useEffect, useContext } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import TableData from './TableData';

function Edit(props) {

  const data=useContext(TableData)

  const [table,setTable] = useState(data.detailForTable)
  const [person,setPerson] = useState (table[props.dataIndex])
    const [show, setShow] = useState(false);
    
// console.log(">>",pesron);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(props.showEditForm)
    }, [props.showEditForm])
    
    // useEffect(() => {
    //     setForm(props.selectedDetails)
    // }, [props.selectedDetails])

    const handleChange=(event)=>{
     const personCopy = {...person}
     personCopy[event.target.name] = event.traget.value
     setPerson(personCopy)
    }
    const handleSubmit=()=>{
      const tableCopy=[...table]
      tableCopy[props.dataIndex]=person
      props.setdetailForTable(tableCopy)
    }
   
  return <div> 
      <>
        <Button variant="primary" onClick={handleShow}>
          Edit
        </Button>
  
        <Modal show={show} onHide={handleClose}>
          <Modal.Header className='header'>
          {/* closeButton */}
            <Modal.Title>Edit Employee</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <div className='card'>
           
            <div className='container mt-2 mb-5 m-lg-2 '>
              <form>
                <div className="form-row ">
                  <div className="form-group col-md-13">
                    <label htmlFor="inputEmail4">Full Name</label>
                    <input type="text" className="form-control"  name='fullname' value={person.fullname} onChange={(event)=>{handleChange(event)}} />
                  </div>
                  <div className="form-group col-md-13">
                    <label htmlFor="inputPassword4">Designation</label>
                    <input type="text" className="form-control" name='designation' value={person.designation} onChange={(event)=>{handleChange(event)}}/>
                  </div>
                </div>

                <div className="form-row">

                  <div className="form-group col-md-13">
                    <label htmlFor="inputZip">Salary</label>
                    <input type="number" className="form-control" name='salary' value={person.salary} onChange={(event)=>{handleChange(event)}} />
                  </div>
                  <div className="form-group col-md-13">
                    <label htmlFor="inputZip">Age</label>
                    <input type="number" className="form-control" name='age' value={person.age} onChange={(event)=>{handleChange(event)}} />
                  </div>
                </div>

                {/* <button type="submit" className="btn btn-primary mt-3 mb-2 btn1" onClick={getAddDetails}>Submit</button> */}
              </form>
            </div>
          </div>
        
        </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleSubmit}>
              UPDATE
            </Button>
            {/* <Button variant="primary" onClick={editForm}>
                        {props.modalType === 'edit' ? 'Update Changes' : 'Add'}
                    </Button> */}
          </Modal.Footer>
        </Modal>
      </>

</div>;
}

export default Edit;