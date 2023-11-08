'use client'

import Link from "next/link";
import HeaderSection from "../header/sectionHeader";
import TopTitleCard from "../cards/topTitleCard";
import getDataMonthly from "@/app/functions/getDataMonthly";
import { useState } from "react";

export default function SalesSection({ value }) {
  const { qmp, monthly } = value;
  const limit = 20000000
  const resultQmp = ((qmp / limit) * 100).toFixed(2)
  const [dataMonthly, setDataMonthly] = useState(0);
  getDataMonthly(monthly).then((data) => setDataMonthly(data));
  const resultMonthly = (dataMonthly).toFixed(2);

  const bgQmp = parseFloat(resultQmp) <= 70 ? 'bg-[#FF0000]' : (parseFloat(resultQmp) > 70) && (parseFloat(resultQmp) <= 90) ? 'bg-[#FF9900]' : 'bg-[#05A305]'
  const bgMonthly = parseFloat(resultMonthly) <= 70 ? 'bg-[#FF0000]' : (parseFloat(resultMonthly) > 70) && (parseFloat(resultMonthly) <= 90) ? 'bg-[#FF9900]' : 'bg-[#05A305]'
  const borderQmp = parseFloat(resultQmp) <= 70 ? 'border-[#FF0000]' : (parseFloat(resultQmp) > 70) && (parseFloat(resultQmp) <= 90) ? 'border-[#FF9900]' : 'border-[#05A305]'
  const borderMonthly = parseFloat(resultMonthly) <= 70 ? 'border-[#FF0000]' : (parseFloat(resultMonthly) > 70) && (parseFloat(resultMonthly) <= 90) ? 'border-[#FF9900]' : 'border-[#05A305]'

  return (
    <div className="col h-full rounded-lg bg-[#D9D9D9] p-[10px] flex flex-col gap-[38px]">
      <HeaderSection name='SALES' />
      <div className="col h-full flex gap-6">
        <Link href="/pages/sales/qmp" className='w-full' prefetch={false}>
          {/* <button className="w-full"> */}
          <TopTitleCard value={`${resultQmp} %`} title='QMP' bg={bgQmp} border={borderQmp} />
          {/* </button> */}
        </Link>
        <Link href="/pages/sales/monthly" className='w-full' prefetch={false}>
          <TopTitleCard value={`${resultMonthly} %`} title='MONTHLY' bg={bgMonthly} border={borderMonthly} />
        </Link>
      </div>
    </div>
  )
}
