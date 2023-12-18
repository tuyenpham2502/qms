import { Col, Row } from "antd";

export default function HeaderQMS({ selectedItems }) {
  console.log("HeaderQMS selectedItemsData", selectedItems);
  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "space-between" }}
        className="content"
      >
        {selectedItems.map((item, index) => (
          <h5 className="room">{item.label}</h5>
        ))}
      </div>
    </>
  );
}
