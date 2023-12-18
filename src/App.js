import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Config from "./components/pages/Config";
import QMS from "./components/pages/QMS";
import QMS2 from "./components/pages/QMS2";
import LaySoThuTu from "./components/pages/LaySoThuTu";

function App() {
  return (
    <>
      <div className="main">
        <Header />
        <Routes>
          <Route path="/" element={<Config />} />
          <Route path="qms" element={<QMS />} />
          <Route path="qms2" element={<QMS2 />} />
          <Route path="laysothutu" element={<LaySoThuTu />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
