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

  const renderBenhNhan = (phongValue) => {
    const danhSachBenhNhanTheoPhong = danhsach_benhnhan.filter(
      (bn) => bn.room === phongValue
    );

    if (danhSachBenhNhanTheoPhong.length === 0) {
      return <div>Không có bệnh nhân</div>;
    }

    return danhSachBenhNhanTheoPhong.map((benhNhan, index) => (
      <div className="list_bndk">
        <table className="list_bndk-content">
          <th>BỆNH NHÂN ĐANG KHÁM</th>
          <tbody>
            <tr>
              <td className="so_dangkham">{benhNhan.stt}</td>
            </tr>
            <tr>
              <td className="benhnhan_dangkham">
                {benhNhan.ten} - {benhNhan.tuoi}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    ));
  };
  return (
    <>
      <Row gutter={[16, 16]}>
        {selectedItems.map((phong) => (
          <Col key={phong.value} span={6}>
            <h3 style={{ background: "#00008b" }}>{phong.label}</h3>
            {renderBenhNhan(phong.value)}
          </Col>
        ))}
      </Row>
    </>
  );
}
