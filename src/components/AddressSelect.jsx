import React, { useState, useEffect } from 'react'
import { getProvinces, getDistrictsByProvinceCode, getWardsByDistrictCode } from 'sub-vn'

const AddressSelect = () => {
  const [provinceCode, setProvinceCode] = useState('')
  const [districtCode, setDistrictCode] = useState('')
  const [wardCode, setWardCode] = useState('')

  const [provinces, setProvinces] = useState([])
  const [districts, setDistricts] = useState([])
  const [wards, setWards] = useState([])

  useEffect(() => {
    setProvinces(getProvinces())
  }, [])

  useEffect(() => {
    if (provinceCode) {
      setDistricts(getDistrictsByProvinceCode(provinceCode))
      setDistrictCode('')
      setWards([])
    }
  }, [provinceCode])

  useEffect(() => {
    if (districtCode) {
      setWards(getWardsByDistrictCode(districtCode))
      setWardCode('')
    }
  }, [districtCode])

  return (
    <div className="flex flex-col gap-4">
        
      <select className="border px-3 py-2 " value={provinceCode} onChange={e => setProvinceCode(e.target.value)}>
        <option value="" >Tỉnh/Thành phố</option>
        {provinces.map(p => <option key={p.code} value={p.code}>{p.name}</option>)}
      </select>

      <select className="border px-3 py-2" value={districtCode} onChange={e => setDistrictCode(e.target.value)} disabled={!provinceCode}>
        <option value="">Quận/Huyện</option>
        {districts.map(d => <option key={d.code} value={d.code}>{d.name}</option>)}
      </select>

      <select className="border px-3 py-2" value={wardCode} onChange={e => setWardCode(e.target.value)} disabled={!districtCode}>
        <option value="">Phường/Xã</option>
        {wards.map(w => <option key={w.code} value={w.code}>{w.name}</option>)}
      </select>
    </div>
  )
}

export default AddressSelect
