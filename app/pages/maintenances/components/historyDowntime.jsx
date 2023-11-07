import SideTitleCard from '@/app/components/cards/sideTitleCard'
import React from 'react'

async function getHistoryDowntime() {
  const res = await fetch('http://192.168.10.75:5000/api/maintenance/history-downtime', {next: {revalidate: 0}})
  if (!res.ok) {
    throw new Error('failed to fetch data')
  }
  return res.json()
}

export default async function HistoryDowntime() {
  const dataApi = await getHistoryDowntime()
  const data = dataApi.payload.data
  return (
    <>
      <div className="col h-full grid grid-cols-3 place-content-stretch gap-4">
        {data.map((element) => (
          <SideTitleCard
            key={element.percentDowntime}
            value={element.percentDowntime}
            title={element.bulanDowntime}
            tFont='20' vFont='40'
          />
        ))}
      </div>
    </>
  )
}
