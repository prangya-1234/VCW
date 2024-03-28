import axios from "axios";
import React, { useState } from "react";
import { useNavigate, NavLink } from 'react-router-dom';
import Swal from "sweetalert2";
import Nv from "./Nv";

const CreatRoom = () => {
  const navigate = useNavigate(); // Define navigate using useNavigate hook
  const data = { roomName: "", roomAdminName: "" };
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
    axios.post("http://localhost:9090/vcwb/api/v1/videoConferencingRooms/register", inputData, axiosConfig)
      .then((response) => {
        Swal.fire({
          position: 'top',
          icon: 'success',
          title: 'Room Create Successfully',
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
      <Nv/>
      <div className="my-5 background-createRoom">
        <h1 className="text-center" style={{ fontSize: '19px' }}>Create Room</h1>
        <div className="container contact_div">
          <div className="row text-center">
            <div className="col-mb-6 col-5 mx-right">
              <form>

                <div className="mb-3">
                <label htmlFor="name" className="form-label" style={{ fontSize: '17px' }}>Room Name</label> 
                <input type="text" className="form-control custom-input" value={inputData.roomName} onChange={handleData} placeholder="Enter Name" name="roomName" style={{ marginTop: '20px' }} />

                </div>

                <div className="mb-3">
                  <label htmlFor="dob" className="form-label" style={{ fontSize: '17px' }}>Admin Name</label>
                  <input type="text" className="form-control custom-input" value={inputData.roomAdminName} onChange={handleData} placeholder="Enter AdminName" name="roomAdminName" />
                </div>
                <div className="col-12">
                  <button className="btn btn-outline-primary" onClick={handleSubmit} type="submit">
                    Submit
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
export default CreatRoom;
