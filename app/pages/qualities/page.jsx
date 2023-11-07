import HeaderSection from "@/app/components/header/sectionHeader";
import React from "react";

// async function getDataQualities() {
//   const res = await fetch("", {
//     next: {
//       revalidate: 0,
//     },
//   });
//   if (!res.ok) {
//     throw new Error("failed to fetch data");
//   }
//   return res.json;
// }

export default async function Quality() {
  // const dataApi = await getDataQualities;
  return (
    <>
      <div className="flex flex-col gap-[20px] m-[20px] w-full h-full">
        <div className="bg-[#D9D9D9] w-full h-full rounded-lg flex flex-col p-[20px]">
          <div className="text-[40px] w-full p-[15px] bg-[#fcfcfc] rounded-xl">
            <HeaderSection name="IPQC" />
            <table className="border border-collapse text-[40px] text-center bg-[#9DA5EE] w-full mt-[20px]">
              <thead>
                <tr>
                  <td className="border border-slate-300">Department</td>
                  <td className="border border-slate-300">Target</td>
                  <td className="border border-slate-300">NCR</td>
                  <td className="border border-slate-300">Lot Tag</td>
                  <td className="border border-slate-300">Total Aktual</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300">CAM</td>
                  <td className="border border-slate-300">6</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">3</td>
                  <td className="border border-slate-300">4</td>
                </tr>
                <tr>
                  <td className="border border-slate-300">CNC</td>
                  <td className="border border-slate-300">12</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">3</td>
                  <td className="border border-slate-300">4</td>
                </tr>
                <tr>
                  <td className="border border-slate-300">MFG2</td>
                  <td className="border border-slate-300">5</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">3</td>
                  <td className="border border-slate-300">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-[#D9D9D9] w-full h-full rounded-lg flex flex-col p-[20px]">
          <div className="text-[40px] w-full p-[15px] bg-[#fcfcfc] rounded-xl">
            <HeaderSection name="OQC" />
            <table className="border border-collapse text-[40px] text-center bg-[#9DA5EE] w-full mt-[20px]">
              <thead>
                <tr>
                  <td className="border border-slate-300">Department</td>
                  <td className="border border-slate-300">Target</td>
                  <td className="border border-slate-300">NCR</td>
                  <td className="border border-slate-300">Lot Tag</td>
                  <td className="border border-slate-300">Total Aktual</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border border-slate-300">CAM</td>
                  <td className="border border-slate-300">7</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">3</td>
                  <td className="border border-slate-300">4</td>
                </tr>
                <tr>
                  <td className="border border-slate-300">CNC</td>
                  <td className="border border-slate-300">6</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">3</td>
                  <td className="border border-slate-300">4</td>
                </tr>
                <tr>
                  <td className="border border-slate-300">MFG2</td>
                  <td className="border border-slate-300">5</td>
                  <td className="border border-slate-300">1</td>
                  <td className="border border-slate-300">3</td>
                  <td className="border border-slate-300">4</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}
