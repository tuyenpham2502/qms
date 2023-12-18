import { Col, Row } from "antd";
import BenhNhanUuTien from "./BenhNhanUuTien";
import BenhNhanThuong from "./BenhNhanThuong";

import HienThiUuTien from "./HienThi/HienThiUuTien";
import { useState } from "react";
import HienThiThuong from "./HienThi/HienThiThuong";

export default function LaySoThuTu() {
  const [count, setCount] = useState(1);
  const [count2, setCount2] = useState(1);

  const handleClick = () => {
    setCount(count + 1);
  }

  const handleClick2 = () => {
    setCount2(count2 + 1);
  }

  return (
    <>
      <Row>
        <Col span={16}>
          <div className="laysouutien">
            <BenhNhanUuTien count={count} handleClick={handleClick} />
          </div>
          <div className="laysothuong">
            <BenhNhanThuong count2={count2} handleClick2={handleClick2} />
          </div>
        </Col>
        <Col span={8}>
          <div className="sokhamuutien">
            <HienThiUuTien count={count} />
          </div>
          <div className="sokhamuutien">
            <HienThiThuong count2={count2} />
          </div>{" "}
        </Col>
      </Row>
    </>
  );
}
