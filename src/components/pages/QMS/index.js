import { Col, Row } from "antd";
import PhongCapCuu from "./PhongCapCuu";
import PhongXetnNghiem from "./PhongXetNghiem";
import PhongLayMauXetNghiem from "./PhongLayMauXetNghiem";
import PhongXQuang from "./PhongXQuang";

export default function QMS() {
  return (
    <>
      <Row>
        <Col span={6}>
          <PhongCapCuu />
        </Col>
        <Col span={6}>
          <PhongXetnNghiem />
        </Col>
        <Col span={6}>
          <PhongLayMauXetNghiem />
        </Col>
        <Col span={6}>
          <PhongXQuang />
        </Col>
      </Row>
    </>
  );
}
