import React, { useState } from 'react';
import { BrowserRouter as Router, Link} from 'react-router-dom';
import './registration.css'

const Registration = () => {

    const [name, setName] = useState("")
    const [nameEmptyErr, setNameEmptyErr] = useState(false)
    const [nameRegErr, setNameRegErr] = useState(false)

    const [userName, setUserName] = useState("")
    const [userNameEmptyErr, setUserNameEmptyErr] = useState(false)
    const [userNameRegErr, setUserNameRegErr] = useState(false)

    const [email, setEmail] = useState("")
    const [emailEmptyErr, setEmailEmptyErr] = useState(false)
    const [emailRegErr, setEmailRegErr] = useState(false)

    const [password, setPassword] = useState("")
    const [passwordEmptyErr, setPasswordEmptyErr] = useState(false)
    const [passwordRegErr, setPasswordRegErr] = useState(false)

    const [cpassword, setCPassword] = useState(password)
    const [cPasswordEmptyErr, setCPasswordEmptyErr] = useState(false)
    const [cPasswordRegErr, setCPasswordRegErr] = useState(false)

    const handleSubmit = (event) => {
        event.preventDefault()
        if (!name.length > 0) {
            setNameEmptyErr(true)
        } else {
            setNameEmptyErr(false)
        }
        if (!userName.length > 0) {
            setUserNameEmptyErr(true)
        } else {
            setUserNameEmptyErr(false)
        }
        if (!email.length > 0) {
            setEmailEmptyErr(true)
        } else {
            setEmailEmptyErr(false)
        }
        if (!password.length > 0) {
            setPasswordEmptyErr(true)
        } else {
            setPasswordEmptyErr(false)
        }
        if (!cpassword.length > 0) {
            setCPasswordEmptyErr(true)
        } else {
            setCPasswordEmptyErr(false)
        }
    }
    const handleChange = (e, type) => {
        if (type === "name") {
            setName(e.target.value)
        }
        if (type === "username") {
            setUserName(e.target.value)
        }
        if (type === "email") {
            setEmail(e.target.value)
        }
        if (type === "password") {
            setPassword(e.target.value)
        }
        if (type === "cpassword") {
            setCPassword(e.target.value)
        }
    }

    const handleKeyUp = (e, type) => {
        if (type === "name") {
            const reg = new RegExp(/^[a-zA-Z ]*$/)
            if (reg.test(e.target.value)) {
                setNameRegErr(false)
            } else {
                setNameRegErr(true)
            }
        }
        if (type === "username") {
            const reg = new RegExp(/^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*$/)
            if (reg.test(e.target.value)) {
                setUserNameRegErr(false)
                setUserNameEmptyErr(false)
            } else {
                setUserNameRegErr(true)
                setUserNameEmptyErr(false)
            }
        }
        if (type === "email") {
            const reg = new RegExp(/^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/)
            if (reg.test(e.target.value)) {
                setEmailRegErr(false)
            } else {
                setEmailRegErr(true)
                setEmailEmptyErr(false)
            }
        }
        if (type === "password") {
            const reg = new RegExp(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$/
            )
            if (reg.test(e.target.value)) {
                setPasswordRegErr(false)
                setPasswordEmptyErr(false)
            } else {
                setPasswordRegErr(true)
                setPasswordEmptyErr(false)
            }
        }
        if (type === "cpassword") {
            const reg = new RegExp(
                /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{0,}$/
            )
            if (reg.test(e.target.value)) {
                setCPasswordRegErr(false)
                setCPasswordRegErr(false)
            } else {
                setCPasswordRegErr(true)
                setCPasswordRegErr(false)
            }
        }
    }

    return (
        <Router>
            <div className='main'>
                <div>
                    <h2 id='title'>Register Your Account</h2>
                    <br />

                    {/* NAME */}

                    <form onSubmit={(event) => { handleSubmit(event) }} className='sub_main'>
                        <div className="mb-3">
                            <label className="form-label">Name</label>
                            <div>
                                <input
                                    type="name"
                                    value={name}
                                    placeholder='Enter your full name...'
                                    className="w-75"
                                    onChange={(e) => handleChange(e, "name")}
                                    onKeyUp={(e) => handleKeyUp(e, "name")}
                                />
                            </div>
                            <div>
                                {nameRegErr && (
                                    <small className="text-danger">
                                        This field can only contain characters
                                    </small>
                                )}
                            </div>
                            <div>
                                {nameEmptyErr && (
                                    <small className="text-danger">Name can not be empty</small>
                                )}
                            </div>
                        </div>

                        {/* USERNAME */}

                        <div className="mb-3">
                            <label className="form-label ">User name</label>
                            <div>
                                <input
                                    type="username"
                                    value={userName}
                                    placeholder='Enter a username...'
                                    className="w-75"
                                    onChange={(e) => handleChange(e, "username")}
                                    onKeyUp={(e) => handleKeyUp(e, "username")}
                                />
                            </div>
                            <div>
                                {userNameRegErr && (
                                    <small className="text-danger">
                                        This field can only contain characters and numbers
                                    </small>
                                )}
                            </div>
                            <div>
                                {userNameEmptyErr && (
                                    <small className="text-danger">User name can not be empty</small>
                                )}
                            </div>
                        </div>

                        {/* EMAIL ADDRESS */}

                        <div className="mb-3">
                            <label className="form-label ">Email address</label>
                            <div>
                                <input
                                    type="email"
                                    value={email}
                                    placeholder='Enter your email address...'
                                    className="w-75"
                                    onChange={(e) => handleChange(e, "email")}
                                    onKeyUp={(e) => handleKeyUp(e, "email")}
                                />
                            </div>
                            <div>
                                {emailRegErr && (
                                    <small className="text-danger">
                                        This field can only contain valid email ID
                                    </small>
                                )}
                            </div>
                            <div>
                                {emailEmptyErr && (
                                    <small className="text-danger">Email can not be empty</small>
                                )}
                            </div>
                        </div>

                        {/* PASSWORD */}

                        <div className="mb-3">
                            <label className="form-label ">Password</label>
                            <div>
                                <input
                                    type="password"
                                    value={password}
                                    placeholder='Enter your password...'
                                    className="w-75"
                                    onChange={(e) => handleChange(e, "password")}
                                    onKeyUp={(e) => handleKeyUp(e, "password")}
                                />
                            </div>
                            <div>
                                {passwordRegErr && (
                                    <small className="text-danger">
                                        field should have atleast one special Character, one number, one upper case letter and one lower case letter.
                                    </small>
                                )}
                            </div>
                            <div>
                                {passwordEmptyErr && (
                                    <small className="text-danger">Password can not be empty</small>
                                )}
                            </div>
                        </div>

                        {/* CONFIRM PASSWORD */}

                        <div className="mb-3">
                            <label className="form-label ">Confirm Password</label>
                            <div>
                                <input
                                    type="password"
                                    value={cpassword}
                                    placeholder='Enter your password again...'
                                    className="w-75"
                                    onChange={(e) => handleChange(e, "cpassword")}
                                    onKeyUp={(e) => handleKeyUp(e, "cpassword")}
                                />
                            </div>
                            <div>
                                {cPasswordRegErr && (
                                    <small className="text-danger">
                                        should match the password
                                    </small>
                                )}
                            </div>
                            <div>
                                {cPasswordEmptyErr && (
                                    <small className="text-danger">Password can not be empty</small>
                                )}
                            </div>
                        </div>

                        <br />

                        {/* BUTTON */}

                        <div>
                            <button type='submit' className='signup' onSubmit={(event) => { handleSubmit(event) }}>Signup</button>
                        </div>

                        <p>Already have an account? <Link to='./login'>Sign in.</Link></p>
                    </form>
                </div>
            </div>
        </Router>
    );
}

export default Registration;