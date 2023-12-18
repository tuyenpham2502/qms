import "./QMS.css";
import { Typography } from "antd";
const { Title } = Typography;
const benh_nhan = [
  {
    benh_nhan_dangkham: {
      ten: "DOÃN HƯNG NGUYÊN",
      tuoi: "20 TUỔI",
      stt: "001",
    },
  },
];

const benh_nhan_cho = [
  {
    ten: "Ty Hải Lô",
    stt: "002",
    tuoi: "20 TUỔI",
  },
  {
    ten: "Ty Hải Lô",
    stt: "002",
    tuoi: "20 TUỔI",
  },
  {
    ten: "Ty Hải Lô",
    stt: "002",
    tuoi: "20 TUỔI",
  },
  {
    ten: "Ty Hải Lô",
    stt: "002",
    tuoi: "20 TUỔI",
  },
  {
    ten: "Ty Hải Lô",
    stt: "002",
    tuoi: "20 TUỔI",
  },
];

export default function PhongXQuang() {
  return (
    <>
      {benh_nhan.map((item) => {
        return (
          <>
            <div className="thong_tin">
              <Title
                className="thong_tin-title"
                style={{ margin: "0" }}
                level={3}
              >
                PHÒNG CẤP CỨU
              </Title>
            </div>
            <table style={{ width: "97%", margin: "5px 5px" }}>
              <th>BỆNH NHÂN ĐANG KHÁM</th>
              <tbody>
                <tr>
                  <td
                    style={{
                      fontSize: "90px",
                      fontWeight: "600",
                      color: "red",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    {item.benh_nhan_dangkham.stt}
                  </td>
                </tr>
                <tr>
                  <td
                    style={{
                      fontSize: "20px",
                      fontWeight: "600",
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      padding: "20px",
                    }}
                  >
                    {item.benh_nhan_dangkham.ten} -{" "}
                    {item.benh_nhan_dangkham.tuoi}{" "}
                  </td>
                </tr>
              </tbody>
            </table>
            <table style={{ width: "97%", margin: "0 5px" }}>
              <th>BỆNH NHÂN CHỜ KHÁM</th>
            </table>
            {benh_nhan_cho.map((benhnhan) => {
              return (
                <>
                  <table
                    style={{ width: "97%", height: "40px", margin: "0 5px" }}
                  >
                    <tr>
                      <td
                        style={{
                          border: "2px solid #00008B",
                          fontWeight: "800",
                          fontSize: "22px",
                          textAlign: "center",
                        }}
                      >
                        {benhnhan.stt}
                      </td>
                      <td style={{ textAlign: "center" }}>
                        {benhnhan.ten} - {benhnhan.tuoi}
                      </td>
                    </tr>
                  </table>
                </>
              );
            })}
          </>
        );
      })}
    </>
  );
}
