import React from "react";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index.tsx";
import { Row, Card } from "react-bootstrap";

const BrandBar = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row>
      {device?.Brands?.map((brand) => (
        <Card
          style={{ cursor: "pointer" }}
          className="p-3"
          key={brand.id}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device?.selectedBrand?.id ? "danger" : "light"}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});
export default BrandBar;
