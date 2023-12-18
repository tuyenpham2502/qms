export default function HienThiUuTien(props) {
  const { count } = props;

  return (
    <div>
      <h5>SỐ ĐANG GỌI</h5>
      <h1>{count}</h1>
    </div>
  );
}
