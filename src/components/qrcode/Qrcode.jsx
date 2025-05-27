// src/components/qrcode/Qrcode.jsx

import QRCode from "react-qr-code";

const Qrcode = ({ value }) => {
  return (
    <div className="bg-white p-2 inline-block rounded-sm">
      <QRCode value={value} size={80} />
    </div>
  );
};

export default Qrcode;
