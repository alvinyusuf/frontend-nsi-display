'use client'

import Link from "next/link";
import { io } from "socket.io-client";
import { useEffect, useState } from "react";
import MaintenanceSection from "./components/sections/maintenanceSection";
import ProductionSection from "./components/sections/productionSection";
import QualitySection from "./components/sections/qualitySection";
import SalesSection from "./components/sections/salesSection";
import getDataDowntime from "./functions/getDataDowntime";
import getDataProduction from "./functions/getDataProduction";
import getCurrentDowntime from "./functions/getCurrentDowntime";
import getDataQuality from "./functions/getDataQuality";
import getDataQmp from "./functions/getDataQmp";
import getListCustomer from "./functions/getListCustomer";

const socket = io('http://192.168.10.75:5000')

export default function Home() {
  const defaultProd = [
    {
      PostDate: new Date(),
      LineType: 'CAM',
      RataRata: 0,
    },
    {
      PostDate: new Date(),
      LineType: 'LINE1',
      RataRata: 0,
    },
    {
      PostDate: new Date(),
      LineType: 'LINE2',
      RataRata: 0
    },
    {
      PostDate: new Date(),
      LineType: 'LINE3',
      RataRata: 0,
    },
  ]

  const [downtime, setDowntime] = useState(0)
  const [quality, setQuality] = useState({percentCamIpqc: 0.001, percentCncIpqc: 0.001, percentMfgIpqc: 0.001, percentCamOqc: 0.001, percentCncOqc: 0.001, percentMfgOqc: 0.001})
  const [defaultDowntime1, setDefaultDowntime1] = useState(0)
  const [defaultDowntime2, setDefaultDowntime2] = useState(0)
  const [production, setProduction] = useState(defaultProd)
  const [qmp, setQmp] = useState(0.00)
  const [monthly, setMonthly] = useState([
    {
      tahun: null,
      bulan: null,
      namaCustomer: null,
      namaCustomer1: null,
      totalTargetQuantity: null,
      totalAktualQuantity: null,
      totalTargetUSD: null,
      totalAktualUSD: null,
    }
  ])
  // const [monthly, setMonthly] = useState(0.00)

  useEffect(() => {
    getCurrentDowntime().then((downtime) => setDowntime(downtime))
    getDataQuality().then((data) => setQuality(data))
    getDataDowntime(1).then((downtime) => setDefaultDowntime1(downtime))
    getDataDowntime(2).then((downtime) => setDefaultDowntime2(downtime))
    getDataProduction().then((data) => setProduction(data))
    getDataQmp().then((data) => setQmp(data))
    getListCustomer().then((data) => setMonthly(data))

    socket.on('percentProduction', (data) => {
      setProduction(data)
    })

    socket.on('currentDowntime', (data) => {
      setDowntime(data)
    })

    socket.on('percenClaims', (data) => {
      setQuality(data)
    })

    socket.on('monthlySales', (data) => {
      setMonthly(data)
    })

    socket.on('qmpSales', (data) => {
      setQmp(data)
    })

    return () => {
      socket.off('connection')
    }
  }, [])

  const sales = {qmp, monthly}
  const maintenance = {
    currentMonth: downtime,
    lastMonth: defaultDowntime1,
    beforeLastMonth: defaultDowntime2,
  }

  return (
    <>
      <Link href="/pages/productions" prefetch={false}>
        <ProductionSection value={production} />
      </Link>

      <Link href="/pages/maintenances" prefetch={false}>
        <MaintenanceSection value={maintenance} />
      </Link>

      <div className="w-[680px] rounded-[8px] flex flex-col gap-[10px]">
        <QualitySection value={quality} />
        <SalesSection value={sales} />
      </div>
    </>
  )
}
