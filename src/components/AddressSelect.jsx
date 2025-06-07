import React, { useEffect, useState } from 'react'
import { getDistrictsByProvinceCode, getProvinces, getWardsByDistrictCode } from 'sub-vn';

const AddressSelect = () => {
  const [cityCode, setCityCode] = useState('');
  const [districtCode, setDistrictCode]  = useState('');
  const [wardCode, setWardCode] = useState('');
  
  const [city, setCity] = useState([]);
  const [district, setDistrict] = useState([]);
  const [ward, setWard] = useState([]);
  
  useEffect(()=>{
    setCity(getProvinces());
  },[])

  useEffect(()=>{
    if (cityCode) {
      setDistrict(getDistrictsByProvinceCode(cityCode))
      setDistrictCode('')
      setWard([])
      
    }

  },[cityCode])

  useEffect(()=>{
    if (districtCode) {
      setWard(getWardsByDistrictCode(districtCode))
      setWardCode('')

      
    }

  },[districtCode])


  return (
    <div className='flex flex-col gap-4'>
      <select className='border px-3 py-2 ' value={cityCode} onChange={e =>setCityCode(e.target.value)}>
        <option value="">Tỉnh/Thành phố</option>
        {city.map(c => <option key={c.code} value={c.code}>{c.name} </option> )}
      </select>
      <select className='border px-3 py-2' value={districtCode} onChange={e => setDistrictCode(e.target.value)}>
        <option value="">Quân/Huyện</option>
        {district.map(d => <option key={d.code} value={d.code}>{d.name} </option> )}
      </select>
      <select className='border px-3 py-3' value={wardCode} onChange={e => setWardCode(e.target.value)}>
        <option value="">Phường/Xã</option>
        {ward.map(w => <option key={w.code} value={w.code}>{w.name} </option> )}
      </select>

    </div>
  )
}

export default AddressSelect