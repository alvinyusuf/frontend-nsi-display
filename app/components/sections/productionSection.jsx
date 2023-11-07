import React from 'react'
import HeaderSection from '../header/sectionHeader'
import CornerTitleCard from '../cards/cornerTitleCard';

export default function ProductionSection({ value }) {
  return (
    <div className="w-[400px] rounded-[8px] bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px] h-full">
      <HeaderSection name='PRODUCTION' />
      <div className="col h-full flex flex-col gap-6">
        {value.map((element) => {
          const bg = element.LineType == 'CAM' ? element.RataRata <= 60 ? 'bg-[#FF0000]' : cam > 60 && cam <= 80 ? 'bg-[#FF9900]' : 'bg-[#05A305]' : element.RataRata <= 70 ? 'bg-[#FF0000]' : cam > 70 && cam <= 85 ? 'bg-[#FF9900]' : 'bg-[#05A305]'
          return (
          <CornerTitleCard key={element.LineType} value={(element.RataRata).toFixed(2)} title={element.LineType} bg={bg} />
        )})}
      </div>
    </div>
  )
}
