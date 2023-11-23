import React from "react";
import HeaderSection from "@/app/components/header/sectionHeader";
import TopTitleCard from "@/app/components/cards/topTitleCard";
import getDataTargetQmp from "@/app/functions/getDataTargetQmp";

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

async function getPercen() {
  const res = await fetch("http://192.168.10.75:5000/api/sales/get-percen", {
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
  const dataApi = await getAktualTahunan();
  const dataList = await getListMonthly();
  const dataTarget = await getDataTarget();
  const lists = dataList.payload.data;
  let bgComponent;
  let borderComponent;

  const data = dataApi.payload.data.totalUSDSales;
  const total = data.toFixed(2);
  const target = dataTarget.qmp;

  const USDollar = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  const bgMain = "bg-[#9DA5EE]";
  const borderMain = "border-[#9DA5EE]";
  return (
    <div className="w-full bg-main-base rounded-[8px] flex flex-col">
      <HeaderSection name="Data Sales tahun 2023" />
      <div className="flex flex-row h-full w-full gap-[30px] p-[15px]">
        <TopTitleCard
          title="Target Sales Input"
          value={`${USDollar.format(target)}`}
          bg={bgMain}
          border={borderMain}
        />
        <TopTitleCard
          title="Aktual Tahunan"
          value={`${USDollar.format(total)}`}
          bg={bgMain}
          border={borderMain}
        />
      </div>
      <div className="grid grid-cols-4 gap-[30px] p-[15px] w-full h-full">
        {lists.map((element) => {
          bgComponent =
            element.percen < 75
              ? "bg-[#FF0000]"
              : element.percen >= 75 && element.percen < 90
              ? "bg-[#FF9900]"
              : "bg-[#05A305]";
          borderComponent =
            element.percen < 75
              ? "border-[#FF0000]"
              : element.percen >= 75 && element.percen < 90
              ? "border-[#FF9900]"
              : "border-[#05A305]";
          return (
            <TopTitleCard
              key={element.bulan}
              title={element.bulan}
              value={USDollar.format(element.percen)}
              bg={bgComponent}
              border={borderComponent}
            />
          );
        })}
      </div>
    </div>
  );
}
