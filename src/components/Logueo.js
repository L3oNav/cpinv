import React from "react";
import { Stack, Container, Form, Button, Row, Col } from "react-bootstrap";
import Logo from "../images/logo.png";
import firebaseApp from "../credenciales";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
const auth = getAuth(firebaseApp);

export const Logueo = () => {
  async function submitHandler(e) {
    e.preventDefault();
    const correo = e.target.formCorreo.value;
    const contra = e.target.formContra.value;
    signInWithEmailAndPassword(auth, correo, contra);
  }

  return (
    <Container style={{ marginTop: "100px" }}>
      <Row>
        <Col md={{ span: 6, offset: 4 }} className="p-5">
          <img src={Logo} height="150px" />
        </Col>
        <Col
          md={{ span: 6, offset: 3 }}
          style={{ backgroundColor: "#6c3b96", padding: "50px" }}
          className="text-white border shadow-lg rounded"
        >
          <Form onSubmit={submitHandler}>
            <Form.Group className="mb-3" controlId="formCorreo">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formContra">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Button variant="light" type="submit">
              Login
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};
export default Logueo;
