import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'
import { NavLink } from 'react-router-dom';

const Table = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        loadUsers();
    }, [])

    const loadUsers = async () => {
        const finalData = await axios.get("url");
        setUsers(loadUsers.data.reverse());
    }

    //for delete users
    const deleteUser = async id => {
        await axios.delete(`url/${id}`)
    }
    return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark  bg-dark ">
                    <div className="container-fluid">
                        <NavLink className="navbar-brand" to="#">EMS</NavLink>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <NavLink className="nav-link" aria-current="page" exact to="/">Emplyoee</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" exact to="/addEmployee">AddEmployee</NavLink>
                                </li>

                            </ul>

                        </div>
                    </div>
                </nav>

                <div className='container-fluid mt-5'>
                    <table className="table table-dark table-bordered shadow table-hover">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Age</th>
                                <th scope="col">Job</th>
                                <th scope="col">Salary</th>
                                <th scope="col">Edit</th>
                                <th scope="col">Delete</th>

                            </tr>
                        </thead>
                        <tbody>
                            {

                                users.map((user, index) => (
                                    <tr>
                                        <th scope='row'>{index + 1}</th>
                                        <td>{user.name}</td>
                                        <td>{user.age}</td>
                                        <td>{user.job}</td>
                                        <td>{user.salary}</td>
                                        <td><Link className="btn btn-warning">Edit</Link></td>
                                        <td className='btn btn-primary text-white' onClick={() => deleteUser(user.id)}>Delete</td>
                                    </tr>

                                ))}




                        </tbody>
                    </table>

                </div>
                

                </div>
                )
}

                export default Table