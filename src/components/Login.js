import React, { useState } from 'react';
import { BrowserRouter as Router, Route, NavLink, Link } from 'react-router-dom';
function Login(props) {
  const [userDetails, setuserDetails] = useState({ email: '', password: '' });
  const [isEmail, setEmail] = useState(true)
  const [EmailError, setEmailError] = useState('')
  const [isPassword, setPassword] = useState(true)
  const [passwordError, setPasswordError] = useState('')


  const updateUserDetails = (event) => {
    const userDetailsCopy = { ...userDetails }
    userDetailsCopy[event.target.name] = event.target.value
    console.log(userDetailsCopy);
    setuserDetails(userDetailsCopy)
    console.log(userDetailsCopy);
    //console.log(userDetails);

  }

  const validate = (event) => {

    event.preventDefault();

    const validEmail = validateEmail(userDetails.email)
    const validPassword = validatePassword(userDetails.password)
    console.log(validEmail);
    console.log(validPassword);
    if (validEmail && validPassword) {
      props.history.push('/EmpDisplay')
    } else {
      console.log('error');
    }
  }


  const validateEmail = (email) => {
    if (email) {
      if (/^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/.test(email)) {
        setEmail(true)
        setEmailError('')
        return true
      } else {
        setEmail(false)
        setEmailError('Please enter Email Address contains @& .Com')
        return false
      }
    } else {
      setEmail(false)
      setEmailError('Email cannot be empty')
      return false
    }
  }
  // password validation
  const validatePassword = (password) => {
    if (password) {
      if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/.test(password)) {
        setPassword(true)
        setPasswordError('')
        return true;
      } else {
        setPassword(false)
        setPasswordError('password should contain atleast 1 special,Capital,number ')
        return false;
      }
    } else {
      setPassword(false)
      setPasswordError('password cannot be  empty')
      return false;
    }
  }
  //for submitting the forgot Password And creatte an account to push the pages
  const handleSubmit1 = () => {
    props.history.push('/Registration')
  }
  const handleSubmit2 = () => {
    props.history.push()
  }

  return (
    <>
      <Router>

        <div className='container-5' >
          <div className='row'>
            <div className='card col-md-4 m-auto mt-5'>
              <div className='card-body'>
                <form onSubmit={validate}>
                  <div className='mt-4'>
                    <label>Email Address</label>

                    <input type='text' name='email' placeholder='Enter Your Email Address...' className='form-control mt-2' value={userDetails.email} onChange={(event) => { updateUserDetails(event) }} />
                    {isEmail ? null : <span style={{ color: 'red', fontSize: '13px' }}>{EmailError}</span>}
                  </div>
                  <div className='mt-4'>
                    <div className='d-flex justify-content-between mt-2'>
                      <div>
                        <label>Password</label>
                      </div>
                      <div>
                        <span onClick={handleSubmit2} className="text-primary">Forgot password?</span>

                      </div>
                    </div>
                    <input type='password' name='password' placeholder='Enter Your Password...' value={userDetails.password} onChange={(event) => { updateUserDetails(event) }} className='form-control mt-2' />
                    {isPassword ? null : <span style={{ color: 'red', fontSize: '13px' }}>{passwordError}</span>}
                  </div>
                  <div className="d-grid gap-2 mt-4">
                    <button className=' btn btn-success text-white' size="lg"           >Sign In</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <div className='row mt-5'>
            <div className='card col-md-4  m-auto' style={{ height: '75px' }}>
              <div className='card-body text-center mt-2'>
                <span>New User?<span onClick={handleSubmit1} className="text-primary">Create an account</span></span>
              </div>
            </div>
          </div>
        </div>


      </Router>
    </>
  )
}

export default Login