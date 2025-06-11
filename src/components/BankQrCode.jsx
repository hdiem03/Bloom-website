import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const BankQrCode = () => {
  const { getTotalPayment } = useContext(ShopContext);

  const bank = 'VIETCOMBANK';              
  const account = '1051238310';    
  const qr = `https://img.vietqr.io/image/${bank}-${account}-compact2.png?amount=${getTotalPayment()}`;

  return (
    <div className='flex flex-col items-center'>
        <p className='text-sm pb-3'>Quý khách vui lòng quét mã thanh toán</p>
      <img src={qr} className='w-64 h-64' />
    </div>
  );
};

export default BankQrCode;