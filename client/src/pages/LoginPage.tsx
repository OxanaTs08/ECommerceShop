import React from "react";
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";
import { REGISTRATION_ROUTE, LOGIN_ROUTE } from "../utils/constantes.ts";

const LoginPage = () => {
  const location = useLocation();
  console.log(location);
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container className="d-flex justify-content-center align-items-center mt-5">
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Log In" : "Register"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control placeholder="Enter your Email" className="mt-3" />
          <Form.Control placeholder="Enter your Password" className="mt-3" />
          <Row className="d-flex justify-content-between align-items-center mt-3">
            {isLogin ? (
              <div>
                No Account? <NavLink to={REGISTRATION_ROUTE}>Register</NavLink>
              </div>
            ) : (
              <div>
                Have Account? <NavLink to={LOGIN_ROUTE}>Log In</NavLink>
              </div>
            )}
            <Button
              variant={"outline-primary"}
              type="submit"
              style={{ width: "auto" }}
            >
              {isLogin ? "Log In" : "Register"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};

export default LoginPage;
