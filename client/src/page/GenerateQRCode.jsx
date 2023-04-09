import React, { useState } from 'react';
import QRCode from 'qrcode.react';

const generatePayload = require('promptpay-qr');


function QRCodeGenerator() {
  const [ phoneNumber, setPhoneNumber ] = useState("0992399337");
  const [ amount, setAmount ] = useState(1.00);         
  const [ qrCode ,setqrCode ] = useState("sample");
  function handlePhoneNumber(e) {
    setPhoneNumber(e.target.value);
  }
  function handleAmount(e) {
    setAmount(parseFloat(e.target.value));
  }
  function handleQR() {
    setqrCode(generatePayload(phoneNumber, { amount }));
  }
  return(
    <div>
      <h2>Scan the QR code to pay.</h2>
      <input type="text" value={phoneNumber} onChange={handlePhoneNumber} />
      <input type="number" value={amount} onChange={handleAmount} />
      <button onClick={handleQR}>Generate Promptpay QR</button>
      <QRCode value={qrCode} />
    </div>
   );
}

export default QRCodeGenerator;