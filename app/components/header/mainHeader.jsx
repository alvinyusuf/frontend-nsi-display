'use client'

import Arrow from "@/app/components/icons/Arrow"

import React from 'react'
import { usePathname, useRouter } from 'next/navigation';

export default function MainHeader() {
  const pathname = usePathname()
  const arrMonth = [
    "Januari", "Februari", "Maret", "April",
    "Mei", "Juni", "Juli", "Agustus", "September",
    "Oktober", "November", "Desember",
  ];

  const router = useRouter()

  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const bulan = `${arrMonth[month]}`;
  const year = now.getFullYear();
  const dayDate = `${day} ${bulan} ${year}`;

  return (
    <div className="flex flex-row">
      <div className={`absolute top-7 left-7 ${pathname == '/' ? 'hidden' : ''}`}>
        <button onClick={() => router.back()}>
          <Arrow />
        </button>
      </div>
      <div className="col w-full h-[150px] flex justify-center items-center">
        <div className="basis-10/12 text-center">
          <p className=" text-[64px]">DASHBORD CONTROL MANUFACTURING</p>
          <p className=" text-[48px]">{dayDate}</p>
        </div>
      </div>
    </div>
  )
}
