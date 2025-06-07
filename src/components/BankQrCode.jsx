import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const BankQrCode = () => {
  const { getTotalPayment } = useContext(ShopContext);

  const bank = 'VIETCOMBANK';              
  const account = '1051238310';    
  const qrUrl = `https://img.vietqr.io/image/${bank}-${account}-compact2.png?amount=${getTotalPayment()}`;

  return (
    <div className="text-center mt-4">
        <p className="text-sm pb-3">Quý khách vui lòng quét mã thanh toán</p>
      <img src={qrUrl} alt="QR thanh toán ngân hàng" className="mx-auto w-64 h-64" />
    </div>
  );
};

export default BankQrCode;