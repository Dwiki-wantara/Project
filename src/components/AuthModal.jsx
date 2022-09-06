import React, { useState } from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "../components/Auth.modules.css";
import dataJson from "../components/adminAnduser.json"
import { useNavigate } from "react-router-dom";

// const dataLogin = JSON.parse(localStorage.getItem("dataLogin"));
// const email = dataLogin.email;
// const password = dataLogin.password;


const UserDataObject = {
  fullName: "",
  email: "",
  gender: "",
  phone: "",
  address: "",
  password: "",
  photo: "",
  status: "Active",
};

const AuthModal = ({ show, handleClose }) => {
  const [isRegister, setIsRegister] = useState(false);

  const [iconPassword, seticonPassword] = useState(false);

  const switchMode = () => {
    setUserData(UserDataObject);
    seticonPassword(false);
    setIsRegister(!isRegister);
  };

  const [userData, setUserData] = useState(UserDataObject);

  const handleChange = (event) => {
    setUserData((change) => ({
      ...change,
      [event.target.name]: event.target.value
    }));
  };

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();

    handleClose();

    if (isRegister) {
      localStorage.setItem("user", JSON.stringify(userData));
      navigate("/");
    }
  };

  return (
    <Modal show={show} onHide={handleClose}>

      <Modal.Header className="bg-dark text-white border-0">
        <Modal.Title>{isRegister ? "Register" : "Login"}</Modal.Title>
      </Modal.Header>

      <Modal.Body className="bg-dark text-white border-0">
        <Form className="px-1" onSubmit={handleSubmit}>
          
           {/* Full Name */}
           {isRegister && (
            <Form.Group className="mb-3" controlId="fullName">
              <Form.Control type="text" name="fullName" placeholder="Full Name" className="bg-gradient-secondary" onChange={handleChange} />
            </Form.Group>
          )}
          {/* Email */}
          <Form.Group className="mb-3" controlId="email">
            <Form.Control type="email" name="email"  placeholder="Email" onChange={handleChange} />
          </Form.Group>

          {/* Gender */}
          {isRegister && (
            <Form.Select className="mb-3" onChange={handleChange} name="gender" >
              <option disabled selected hidden>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </Form.Select>
          )}

          {/* Phone*/}
          {isRegister && (
            <Form.Group className="mb-3" controlId="phone">
              <Form.Control name="phone" type="text" placeholder="Phone" onChange={handleChange} />
            </Form.Group>
          )}

          {/* Address */}
          {isRegister && (
            <Form.Group className="mb-3" controlId="address">
              <Form.Control as="textarea" name="address" placeholder="Address"  onChange={handleChange} />
            </Form.Group>
          )}

            {/* Password */}
            <div className="mb-3 pw__container">
            <Form.Group controlId="password">
              <Form.Control type={iconPassword ? "text" : "password"} placeholder="Password" onChange={handleChange} />
            </Form.Group>

            <div
              className="pw__icon-container" onClick={() => seticonPassword(!iconPassword)} >
              {iconPassword ? (<FaEyeSlash className="pw__icon" /> ) : (<FaEye className="pw__icon" /> )}
            </div>
          </div>

          <div className="bg-dark text-white border-0 d-grid gap-2 p-4">
            <Button variant = {isRegister ? "light" : "danger"} type="submit" className={isRegister ? "text-danger" : "text-white"}>
              {isRegister ? "Register" : "Login"}
            </Button>
            
            <p className="text-muted text-center mt-2">
              {isRegister ? "Already have an account? Click " : "Don't have an account? Click "} {" "}
              <span className="switchBtn text-primary" onClick={switchMode}> Here </span>
            </p>
          </div>

        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AuthModal;
