import axios from "axios";
import React, { useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import Navb from "./Navb";

const Login = () => {
  const navigate = useNavigate(); // Define navigate using useNavigate hook
  const data = { userName: "", emailId: "",password:"" };
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
        navigate("/"); // Use navigate function here
      })
      .catch(error => {
        console.error('Error:', error);
        // Handle error, show error message or log
      });
  };

  return (
    <>
      <Navb/>
      <div className="my-5 background-singup">
        <h1 className="text-center" style={{ fontSize: '19px' }}>Registration</h1>
        <div className="container contact_div">
          <div className="row text-center">
            <div className="col-mb-6 col-5 mx-right">
              <form>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label" style={{ fontSize: '17px' }}>Email Id</label>
                  <h> </h>
                  <input type="text" className="form-control custom-input" value={inputData.emailId} onChange={handleData} placeholder="youremail@gmail.com" name="emailId" />
                </div>
                <div className="mb-3">
                  <label htmlFor="dob" className="form-label" style={{ fontSize: '17px' }}>Password</label>
                  <h> </h>
                  <input type="text" className="form-control custom-input" value={inputData.password} onChange={handleData} placeholder="*********" name="password" />
                </div>
                <div className="col-sm-12 ">
                  <button className="btn btn-primary"onClick={handleSubmit} type="submit">
                   Login
                  </button>
                  <NavLink to="/" className="btn btn-outline-danger">
                    Cancel
                  </NavLink>
                  <h1>{'\n'}</h1>
                </div>
              </form>
            </div>
            <h6>Thank you For your cooperation.</h6>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
