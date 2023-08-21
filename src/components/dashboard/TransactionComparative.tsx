import React from "react";
import styles from "../../styles/dashboard.module.css";
import DownIcon from "@/svgs/DownIcon";
import BarChat from "@/svgs/BarChat";
import Image from "next/image";

const cashoutTransactionDetails = [
  {
    id: 1,
    title: "Average commission per transaction",
    todayAmout: "₦87,000",
    yesterdayAmount: "₦102, 000",
    subTitle1: "POS commission",
    subTitle2: "Lotto commission",
  },
];
export const TransactionComparative = () => {
  return (
    <div
    // className="w-full lg:max-w-[75%] flex  gap-3 card"
    >
      <div className="w-full lg:max-w-[75%] flex card">
        <AverageCommissionCard />
        <TransactionComparativeChart />
      </div>
    </div>
  );
};

export const AverageCommissionCard = () => {
  return (
    <div className="lg:w-[55%] mb-5">
      {cashoutTransactionDetails?.map((list: any, index) => {
        return (
          <div key={index} className={styles.savings_card}>
            <div className="px-2 py-5 bg-[#F6FAFF] rounded-[10px] ">
              <div className="flex justify-between mb-5">
                <p className="mt-1">{list.title}</p>
                <button className="flex ">
                  <span className="mr-2"> Today</span>
                  <DownIcon />
                </button>
              </div>
              <div className="flex justify-between my-3">
                <div className="flex flex-col">
                  <h5>{list.subTitle1}</h5>
                  <h4>{list.todayAmout}</h4>
                </div>
                <div className="flex flex-col">
                  <h5>{list.subTitle2}</h5>
                  <h4>{list.yesterdayAmount}</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export const TransactionComparativeChart = () => {
  return (
    <div className={styles.comperative_card}>
      <div className="flex justify-between  px-3 w-full card">
        <div className="pt-3 pb-2">
          <p className="text-[#37474F] text-[16px] font-medium tracking-[0.16px]">
            Transaction Comparative
          </p>
          <div className="flex mt-3 w-full">
            <div className="rounded-[100px] bg-[#032282] w-[8px] h-[8px] mt-1"></div>
            <small className="ml-2 text-[10px] text-[#37474F] tracking-[0.16px]">
              Send money
            </small>
          </div>
          <div className="border border-x-0 border-t-0 border-dashed border-[#C4C4C4] w-[13em] ">
            <h2 className="text-[#263238] text-[16px] font-semibold tracking-[1.16px] mb-1">
              ₦105,000,000
            </h2>
          </div>

          <div className="flex gap-5 ">
            <div className="">
              <div className="flex mt-3">
                <div className="rounded-[100px] bg-[#F4BE38] w-[8px] h-[8px] mt-1"></div>
                <small className="ml-2 text-[10px] text-[#37474F] tracking-[0.16px]">
                  Cashout
                </small>
              </div>
              <h2 className="text-[#263238] text-[16px] font-semibold tracking-[1.16px]">
                ₦12,00,000
              </h2>
            </div>
            <div>
              <div className="flex mt-3 ">
                <div className="rounded-[100px] bg-[#EDE1FF] w-[8px] h-[8px] mt-1"></div>
                <small className="ml-2 text-[10px] text-[#37474F] tracking-[0.16px]">
                  Utilities and Bills
                </small>
              </div>
              <h2 className="text-[#263238] text-[16px] font-semibold tracking-[1.16px]">
                ₦42,00,000
              </h2>
            </div>
          </div>
        </div>
        <div className="flex lg:justify-center">
          <Image
            src="/images/bar-chat.png"
            width={200}
            height={200}
            className=" cursor-pointer lg:w-[170px] lg:h-[171px]"
            alt="profile-image"
          />
        </div>
      </div>
    
    </div>
  );
};
