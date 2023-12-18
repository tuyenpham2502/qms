export default function BenhNhanDangKham({ ten, tuoi, stt }) {
  return (
    <>
      <div className="list_bndk">
        <table className="list_bndk-content">
          <th>BỆNH NHÂN ĐANG KHÁM</th>
          <tbody>
            <tr>
              <td className="so_dangkham">{stt}</td>
            </tr>
            <tr>
              <td className="benhnhan_dangkham">
                {ten} - {tuoi}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
