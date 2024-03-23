import axios from "axios";
import React, { useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import Navb from "./Navb";

const Signup = () => {
  const navigate = useNavigate();
  const data = { firstName: "", middleName:"", lastName:"", dob:"", contactNo:"", emailId: "", password: "" };
  const [inputData, setinputData] = useState(data);

  const handleData = (e) => {
    const { name, value } = e.target;
    setinputData({ ...inputData, [name]: value });
  };

  let axiosConfig = {
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
      'Access-Control-Allow-Credentials': true
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("http://localhost:9090/vcwb/api/v1/user/register", inputData, axiosConfig)
      .then((response) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Registration Successfully',
          showConfirmButton: false,
          timer: 1500
        });
        navigate("/");
      })
      .catch(error => {
        console.error('Error:', error);
      });
  };

  return (
    <>
      <Navb />
      <div className="my-5 background-singup d-flex justify-content-center align-items-center flex-column" style={{ marginLeft: '50px' }}>
        <div className="text-center">
          <h1 className="mb-5" style={{ fontSize: '19px', marginLeft: '10px' }}>Registration</h1>
          <form>
            <div className="mb-3">
              <label htmlFor="firstName" className="form-label" style={{ fontSize: '17px', marginLeft: '10px' }}>First Name</label>
              <input type="text" className="form-control custom-input" value={inputData.firstName} onChange={handleData} placeholder="Enter First Name" name="firstName" />
            </div>
            <div className="mb-3">
              <label htmlFor="middleName" className="form-label" style={{ fontSize: '17px', marginLeft: '10px' }}>Middle Name</label>
              <input type="text" className="form-control custom-input" value={inputData.middleName} onChange={handleData} placeholder="Enter Middle Name" name="middleName" />
            </div>
            <div className="mb-3">
              <label htmlFor="lastName" className="form-label" style={{ fontSize: '17px', marginLeft: '10px' }}>Last Name</label>
              <input type="text" className="form-control custom-input" value={inputData.lastName} onChange={handleData} placeholder="Enter Last Name" name="lastName" />
            </div>
            <div className="mb-3">
              <label htmlFor="dob" className="form-label" style={{ fontSize: '17px', marginLeft: '10px' }}>Date of Birth</label>
              <input type="text" className="form-control custom-input" value={inputData.dob} onChange={handleData} placeholder="Enter Date of Birth" name="dob" />
            </div>
            <div className="mb-3">
              <label htmlFor="contactNo" className="form-label" style={{ fontSize: '17px', marginLeft: '10px' }}>Contact No</label>
              <input type="text" className="form-control custom-input" value={inputData.contactNo} onChange={handleData} placeholder="Enter Contact No" name="contactNo" />
            </div>
            <div className="mb-3">
              <label htmlFor="emailId" className="form-label" style={{ fontSize: '17px', marginLeft: '10px' }}>Email Id</label>
              <input type="text" className="form-control custom-input" value={inputData.emailId} onChange={handleData} placeholder="youremail@gmail.com" name="emailId" />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label" style={{ fontSize: '17px', marginLeft: '10px' }}>Password</label>
              <input type="text" className="form-control custom-input" value={inputData.password} onChange={handleData} placeholder="*********" name="password" />
            </div>
            <div className="col-12 mb-3">
              <button className="btn btn-outline-primary me-3" onClick={handleSubmit} type="submit">Submit</button>
              <NavLink to="/" className="btn btn-outline-danger">Cancel</NavLink>
            </div>
          </form>
          <h6 style={{ marginLeft: '10px' }}>Thank you For your cooperation.</h6>
        </div>
      </div>
    </>
  );
}

export default Signup;
