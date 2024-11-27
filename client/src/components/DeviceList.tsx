import React from "react";
import { Row } from "react-bootstrap";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { Context } from "../index.tsx";
import DeviceItem from "./DeviceItem.tsx";
import { IDevice } from "../store/DeviceStore.tsx";

const DeviceList = observer(() => {
  const { device } = useContext(Context);
  return (
    <Row className="d-flex">
      {device?.Devices?.map((device: IDevice) => (
        <DeviceItem key={device.id} device={device} />
      ))}
    </Row>
  );
});

export default DeviceList;
