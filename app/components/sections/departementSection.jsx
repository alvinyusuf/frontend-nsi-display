'use client'

import HeaderSection from '@/app/components/header/sectionHeader'
import SideTitleCard from '../cards/sideTitleCard'

export default function DepartementSection({ departement, value }) {
  let percentCam;
  let percentCnc;
  let percentMfg;
  if (departement === 'IPQC') {
    percentCam = value.percentCamIpqc
    percentCnc = value.percentCncIpqc
    percentMfg = value.percentMfgIpqc
  } else {
    percentCam = value.percentCamOqc
    percentCnc = value.percentCncOqc
    percentMfg = value.percentMfgOqc
  }

  const bgCam = parseFloat(percentCam) <= 70 ? 'bg-[#05A305]' : (parseFloat(percentCam) > 70) && (parseFloat(percentCam) <= 90) ? 'bg-[#FF9900]' : 'bg-[#FF0000]'
  const bgCnc = parseFloat(percentCnc) <= 70 ? 'bg-[#05A305]' : (parseFloat(percentCnc) > 70) && (parseFloat(percentCnc) <= 90) ? 'bg-[#FF9900]' : 'bg-[#FF0000]'
  const bgMfg = parseFloat(percentMfg) <= 70 ? 'bg-[#05A305]' : (parseFloat(percentMfg) > 70) && (parseFloat(percentMfg) <= 90) ? 'bg-[#FF9900]' : 'bg-[#FF0000]'
  const borderCam = parseFloat(percentCam) <= 70 ? 'border-[#05A305]' : (parseFloat(percentCam) > 70) && (parseFloat(percentCam) <= 90) ? 'border-[#FF9900]' : 'border-[#FF0000]'
  const borderCnc = parseFloat(percentCnc) <= 70 ? 'border-[#05A305]' : (parseFloat(percentCnc) > 70) && (parseFloat(percentCnc) <= 90) ? 'border-[#FF9900]' : 'border-[#FF0000]'
  const borderMfg = parseFloat(percentMfg) <= 70 ? 'border-[#05A305]' : (parseFloat(percentMfg) > 70) && (parseFloat(percentMfg) <= 90) ? 'border-[#FF9900]' : 'border-[#FF0000]'

  return (
    <div className="basis-1/2 h-full flex flex-col gap-3 border border-black p-2 rounded-sm">
      <HeaderSection name={departement} />
      <div className="col h-full flex flex-col gap-3">
        <SideTitleCard value={percentCam} title='CAM' tFont='46' vFont='56' bg={bgCam} border={borderCnc} />
        <SideTitleCard value={percentCnc} title='CNC' tFont='46' vFont='56' bg={bgCnc} border={borderCnc} />
        <SideTitleCard value={percentMfg} title='MFG' tFont='46' vFont='56' bg={bgMfg} border={borderMfg} />
      </div>
    </div>
  )
}
