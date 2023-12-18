import logo1 from "../../assets/image/logo2.jpg";
import logo2 from "../../assets/image/logo1.png";

import { Typography } from "antd";
const { Title } = Typography;

export default function Header() {
  return (
    <>
      <div className="header">
        <img src={logo1} alt="" />
        <Title className="header__title">
          CÔNG TY CỔ PHẦN CÔNG NGHỆ THÔNG TIN VIỆT BA
        </Title>
        <img src={logo2} alt="" />
      </div>
      <hr />
    </>
  );
}
