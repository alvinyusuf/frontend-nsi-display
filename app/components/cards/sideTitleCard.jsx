import React from 'react'

export default function SideTitleCard({ title, value, tFont, vFont, bg, border }) {
  return (
    <div className={`col h-full rounded flex flex-row border ${border}`}>
    {/* <div className='col h-full rounded flex flex-row border border-[#05A305]'> */}
      <div className="basis-4/12 h-full flex justify-center items-center">
        <p className={`text-[${tFont}px]`}>{title}</p>
      </div>
      <div className={`basis-8/12 h-full flex items-center rounded ${bg}`}>
      {/* <div className='basis-8/12 h-full flex items-center rounded bg-[#05A305]'> */}
        <span className="text-stroke">
          <p className={`text-[${vFont}px] ms-2`}>{(value).toFixed(2)} %</p>
        </span>
      </div>
    </div>
  )
}
