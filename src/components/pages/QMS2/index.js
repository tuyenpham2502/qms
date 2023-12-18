import { Col, Row } from "antd";
import HeaderQMS from "./HeaderQMS2";
import BenhNhanDangKham from "./BenhNhanDangKham";
import BenhNhanChoKham from "./BenhNhanChoKham";
import { useLocation } from "react-router-dom";
export default function QMS2() {
  const location = useLocation();

  const { selectedItems } = location.state;

  console.log(selectedItems);

  const danhsach_benhnhan = [
    {
      room: "pcc",
      ten: "NGUYỄN MINH ĐỨC",
      tuoi: "20 TUỔI",
      stt: "001",
    },
    {
      room: "pxn",
      ten: "NGUYỄN MINH ĐỨC",
      tuoi: "20 TUỔI",
      stt: "002",
    },
    {
      room: "plmxn",
      ten: "NGUYỄN MINH ĐỨC",
      tuoi: "20 TUỔI",
      stt: "001",
    },
    {
      room: "pxq1",
      ten: "NGUYỄN MINH ĐỨC",
      tuoi: "20 TUỔI",
      stt: "001",
    },
    {
      room: "psa1",
      ten: "NGUYỄN MINH ĐỨC",
      tuoi: "20 TUỔI",
      stt: "001",
    },
    {
      room: "psa2",
      ten: "NGUYỄN MINH ĐỨC",
      tuoi: "20 TUỔI",
      stt: "001",
    },
    {
      room: "pltc1",
      ten: "NGUYỄN MINH ĐỨC",
      tuoi: "20 TUỔI",
      stt: "001",
    },
    {
      room: "pltc2",
      ten: "NGUYỄN MINH ĐỨC",
      tuoi: "20 TUỔI",
      stt: "001",
    },
  ];

  return (
    <>
      <Row>
        <Col span={24}>
          <HeaderQMS selectedItems={selectedItems} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          {danhsach_benhnhan.map((benhnhan) => (
            <BenhNhanDangKham
              ten={benhnhan.ten}
              tuoi={benhnhan.tuoi}
              stt={benhnhan.stt}
            />
          ))}
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <BenhNhanChoKham />
        </Col>
      </Row>
    </>
  );
}
