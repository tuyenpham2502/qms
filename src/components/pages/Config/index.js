import React, { useState } from "react";
import { Button, Typography } from "antd";
import { SettingOutlined } from "@ant-design/icons";
import { Col, Row } from "antd";
import { Input } from "antd";
import { Select, Space } from "antd";
import { InputNumber } from "antd";
import "./Config.css";
import { Link } from "react-router-dom";

const options = [
  {
    label: "Phòng cấp cứu",
    value: "pcc",
    desc: "PCC-Phòng cấp cứu",
  },
  {
    label: "Phòng xét nghiệm",
    value: "pxn",
    desc: "PXN-Phòng xét nghiệm",
  },
  {
    label: "Phòng X-quang",
    value: "pxq1",
    desc: "PXQ1-Phòng X-quang",
  },
  {
    label: "Phòng lấy máu xét nghiệm",
    value: "plmxn",
    desc: "PLMXN-Phòng lấy máu xét nghiệm",
  },
  {
    label: "Phòng siêu âm 1",
    value: "psa1",
    desc: "PSA1-Phòng siêu âm 1",
  },
  {
    label: "Phòng siêu âm 2",
    value: "psa2",
    desc: "PSA2-Phòng siêu âm 2",
  },
  {
    label: "Phòng lấy tính chất 1",
    value: "pltc1",
    desc: "PLTC1-Phòng lấy tính chất 1",
  },
  {
    label: "Phòng lấy tính chất 2",
    value: "pltc2",
    desc: "PLTC2-Phòng lấy tính chất 2",
  },
];
const { Title } = Typography;

export default function Config() {
  const [selectedItems, setSelectedItems] = useState([]);

  const handleChange = (selectedItems, selectedItems2) => {
    setSelectedItems(selectedItems2);
  };

  const onChange = (value) => {
    console.log("changed", value);
  };

  return (
    <>
      <div className="main__body">
        <div className="container">
          <Title
            className="main__body-title"
            style={{ color: "red", marginBottom: "30px" }}
            level={2}
          >
            <SettingOutlined /> CẤU HÌNH PHÒNG KHÁM
          </Title>
          <div className="main__body-content">
            <Row className="mbc">
              <Col span={8}>
                <Title style={{ margin: "0", color: "#00008B" }} level={2}>
                  MÃ KHOA:
                </Title>
              </Col>
              <Col span={16}>
                <Input style={{ height: "40px" }} />
              </Col>
            </Row>
            <Row className="mbc">
              <Col span={8}>
                <Title style={{ margin: "0", color: "#00008B" }} level={2}>
                  MÃ PHÒNG:
                </Title>
              </Col>
              <Col span={16}>
                <Select
                  value={selectedItems}
                  mode="multiple"
                  style={{
                    width: "100%",
                    height: "40px",
                  }}
                  placeholder=""
                  onChange={handleChange}
                  optionLabelProp="label"
                  options={options}
                  optionRender={(option) => (
                    <Space>
                      <span role="img" aria-label={option.data.label}>
                        {option.data.emoji}
                      </span>
                      {option.data.desc}
                    </Space>
                  )}
                />
              </Col>
            </Row>
            <Row className="mbc">
              <Col span={8}>
                <Title style={{ margin: "0", color: "#00008B" }} level={2}>
                  SỐ LƯỢNG:
                </Title>
              </Col>
              <Col span={16}>
                <InputNumber
                  style={{ width: "100%", padding: "4px" }}
                  min={1}
                  max={5}
                  defaultValue={1}
                  onChange={onChange}
                />
              </Col>
            </Row>
          </div>
          <div className="button">
            <Button className="btn">
              <Link
                to={"qms2"}
                state={{
                  selectedItems: selectedItems,
                }}
              >
                Xác nhận
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
