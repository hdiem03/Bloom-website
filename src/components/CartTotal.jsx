import React, { useContext } from 'react';
import { ShopContext } from '../context/ShopContext';

const CartTotal = () => {
  const { currency, delivery_fee, getCartAmount } = useContext(ShopContext);

  return (
    <div className="bg-gray-50 p-4 ">
      <p className="text-xl font-semibold">Tạm tính</p>

      <div className="flex flex-col gap-2 mt-2 text-sm">
        <div className="flex justify-between py-2">
          <p>Tạm tính</p>
          <p>{getCartAmount().toLocaleString('vi-VN')}{currency}</p>
        </div>

        <div className="flex justify-between py-2">
          <p>Phí vận chuyển</p>
          <p>{delivery_fee.toLocaleString('vi-VN')}{currency}</p>
        </div>

        <div className="flex justify-between py-2 border-t pt-2 font-semibold">
          <p>Tổng thanh toán</p>
          <p>
            {(getCartAmount() === 0 && 0) || (getCartAmount() + delivery_fee).toLocaleString('vi-VN')}
            {currency}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CartTotal;

