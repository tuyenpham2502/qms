import { useState } from "react";
import { Button } from "antd";

export default function BenhNhanUuTien({count2, handleClick2}) {
  
  return (
    <>
      <div className="container1">
        <div className="button1">
          <Button className="btn-layso" onClick={handleClick2}>
            BHYT
          </Button>
          <Button className="btn-layso" onClick={handleClick2}>
            DỊCH VỤ
          </Button>
        </div>
        <div className="display">
          <div className="display__number">
            <h5>SỐ ĐANG GỌI</h5>
            <h1>{count2}</h1>
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
