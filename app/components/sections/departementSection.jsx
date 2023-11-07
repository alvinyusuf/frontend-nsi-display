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

  return (
    <div className="basis-1/2 h-full flex flex-col gap-3 border border-black p-2 rounded-sm">
      <HeaderSection name={departement} />
      <div className="col h-full flex flex-col gap-3">
        <SideTitleCard value={percentCam} title='CAM' tFont='46' vFont='56' />
        <SideTitleCard value={percentCnc} title='CNC' tFont='46' vFont='56' />
        <SideTitleCard value={percentMfg} title='MFG' tFont='46' vFont='56' />
      </div>
    </div>
  )
}
