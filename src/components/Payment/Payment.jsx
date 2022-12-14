import React from "react";
import { Form, Button } from "react-bootstrap";
import {IconTransfer} from 'react-icons/ri'

function PaymentHome() {
  return (
    <div className="container-fluid sectionPayment">
      <div className="text-center text-light">
        <h1 className="fs-2 fw-bold mb-5">Premium</h1>
        <p className="pPayment">
          Bayar Sekarang dan nikmati streaming film-film yang kekinian dari{" "}
          <span className="text-danger fw-bold">DUMBFLIX</span>
        </p>

        <div>
          <p className="text-danger fw-bold">
            DUMBFLIX <span className="text-light">: -</span>{" "}
          </p>
        </div>

        <Form style={{width:"30%", margin: "20px auto"}}>
          <Form.Group className="mb-3" controlId="accountNumber">
            <Form.Control type="email" placeholder="Input your account number" className="border border-light border-3 formPayment"/>
          </Form.Group>

          <Form.Group className="mb-5" controlId="formBasicPassword">
            <Form.Label className="labelInputFile rounded">Attache proof of transfer</Form.Label>
            <Form.Control type="file"></Form.Control>
          </Form.Group>

          <Button variant="primary" type="submit" className="border-0 btnSubmitPayment py-2 fw-bold">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default PaymentHome;
