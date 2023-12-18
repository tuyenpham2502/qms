import { useState } from "react";
import { Button } from "antd";
import HienThiUuTien from "./HienThi/HienThiUuTien";

export default function BenhNhanUuTien({ count, handleClick }) {
  return (
    <>
      <div className="container1">
        <div className="button1">
          <Button className="btn-layso" onClick={handleClick}>
            BHYT ƯU TIÊN
          </Button>
          <Button className="btn-layso" onClick={handleClick}>
            DICH VU ƯU TIÊN
          </Button>
        </div>
        <div className="display">
          <div className="display__number">
            <h5>SỐ ĐANG GỌI</h5>
            <h1>{count}</h1>
          </div>
          <div className="display__getmore">
            <input type="checkbox" />
            <p>LẤY THÊM</p>
            <input type="text" />
          </div>
        </div>
      </div>
    </>
  );
}
