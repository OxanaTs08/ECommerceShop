import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import TypeBar from "../components/TypeBar.tsx";
import BrandBar from "../components/BrandBar.tsx";
import DeviceList from "../components/DeviceList.tsx";

const Shop = () => {
  return (
    <Container className="mt-3">
      <Row>
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};

export default Shop;
