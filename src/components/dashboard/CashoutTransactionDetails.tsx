import React from "react";
import styles from "../../styles/dashboard.module.css";
import DownIcon from "@/svgs/DownIcon";
import BarChat from "@/svgs/BarChat";

const cashoutTransactionDetails = [
  {
    id: 1,
    title: "Total Cashout",
    todayAmout: "₦1,200,000",
    yesterdayAmount: "₦1,200,000",
    subTitle1: "Today",
    subTitle2: "Yesterday",
  },
  {
    id: 2,
    title: "Transaction status",
    todayAmout: "422",
    yesterdayAmount: "18",
    subTitle1: (
      <div className="flex">
        <div className="rounded-[100px] bg-[#18A201] w-[8px] h-[8px] mt-1"></div>
        <div className="ml-2">Successful</div>
      </div>
    ),
    subTitle2: (
      <div className="flex ">
        <div className="rounded-[100px] bg-[#FF0000] w-[8px] h-[8px] mt-1"></div>
        <div className="ml-2">Failed</div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Average transaction Count",
    todayAmout: "₦20,400",
    yesterdayAmount: "422",
    subTitle1: "Value",
    subTitle2: "Count",
  },
  {
    id: 4,
    title: "Total commission",
    todayAmout: "₦87,000",
    yesterdayAmount: "₦102, 000",
    subTitle1: "POS commission",
    subTitle2: "Lotto commission",
  },
];
export const CashoutTransactionDetails = () => {
  return (
    <div className="">
      <div className="my-5 grid grid-cols-4 gap-3 w-full card">
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
    </div>
  );
};
