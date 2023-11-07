import React from "react";
import HeaderSection from "@/app/components/header/sectionHeader";
import TopTitleCard from "@/app/components/cards/topTitleCard";

async function getAktualTahunan() {
  const res = await fetch("http://192.168.10.75:5000/api/sales/get-actual", {
    next: {
      revalidate: 0,
    },
  });
  if (!res.ok) {
    throw new Error("Failed fetch data!");
  }
  return res.json();
}

export default async function Qmp() {
  const dataApi = await getAktualTahunan()
  const data = dataApi.payload.data.totalUSDSales
  const total = data.toFixed(2)

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const bgMain = 'bg-[#9DA5EE]'
  const borderMain = 'border-[#9DA5EE]'
  const bgComponent = 'bg-[#05A305]'
  const borderComponent = 'border-[#05A305]'
  return (
    <div className="w-full bg-main-base rounded-[8px] flex flex-col">
      <HeaderSection name="Data Sales tahun 2023" />
      <div className="flex flex-row h-full w-full gap-[30px] p-[15px]">
        <TopTitleCard title='Target Sales Input' value='$20000000' bg={bgMain} border={borderMain} />
        <TopTitleCard title='Aktual Tahunan' value={`${USDollar.format(total)}`} bg={bgMain} border={borderMain} />
      </div>
      <div className="grid grid-cols-4 gap-[30px] p-[15px] w-full h-full">
        <TopTitleCard title='JANUARI' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='FEBRUARI' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='MARET' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='APRIL' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='MEI' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='JUNI' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='JULI' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='AGUSTUS' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='SEPTEMBER' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='OKTOBER' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='NOVEMBER' value='98.00' bg={bgComponent} border={borderComponent} />
        <TopTitleCard title='DESEMBER' value='98.00' bg={bgComponent} border={borderComponent} />
      </div>
    </div>
  );
}
