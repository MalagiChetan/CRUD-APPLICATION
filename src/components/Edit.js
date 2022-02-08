import React, { useState,useEffect } from 'react';
import { Modal, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function Edit(props) {
    const [show, setShow] = useState(false);
    const [form, setForm] = useState({
        FullName: '',
        Designation: '',
        Salary: '',
        Age: ''
    });
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    useEffect(() => {
        setShow(props.showEditForm)
    }, [props.showEditForm])
    
    useEffect(() => {
        setForm(props.selectedDetails)
    }, [props.selectedDetails])

   
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
                    <input type="text" className="form-control"  name='fullname' />
                  </div>
                  <div className="form-group col-md-13">
                    <label htmlFor="inputPassword4">Designation</label>
                    <input type="text" className="form-control" name='designation' />
                  </div>
                </div>


                <div className="form-row">

                  <div className="form-group col-md-13">
                    <label htmlFor="inputZip">Salary</label>
                    <input type="number" className="form-control" name='salary' />
                  </div>
                  <div className="form-group col-md-13">
                    <label htmlFor="inputZip">Age</label>
                    <input type="number" className="form-control" name='age' />
                  </div>
                </div>

                {/* <button type="submit" className="btn btn-primary mt-3 mb-2 btn1" onClick={getAddDetails}>Submit</button> */}
              </form>
            </div>
          </div>
        
        </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={handleClose}>
              Submit
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