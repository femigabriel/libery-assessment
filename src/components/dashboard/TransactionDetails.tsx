import React from "react";
import styles from "../../styles/dashboard.module.css";
import DownIcon from "@/svgs/DownIcon";

const transactionDetails = [
  {
    id: 1,
    title: "Total transfer",
    todayAmout: "₦500",
    yesterdayAmount: "₦200",
    weekAmount: "₦500",
    lastWeek: "₦500",
  },
  {
    id: 2,
    title: "Total inflow",
    todayAmout: "₦2,000,000",
    yesterdayAmount: "₦5,000,000",
    weekAmount: "₦5,000,000",
    lastWeek: "₦5,000,000",
  },
  {
    id: 3,
    title: "Total transactions",
    todayAmout: "₦2,000,000",
    yesterdayAmount: "₦5,000,000",
    weekAmount: "₦5,000,000",
    lastWeek: "₦5,000,000",
  },
  {
    id: 4,
    title: "Total count",
    todayAmout: "₦2,000,000",
    yesterdayAmount: "₦5,000,000",
    weekAmount: "₦5,000,000",
    lastWeek: "₦5,000,000",
  },
];
export const TransactionDetails = () => {
  return (
    <div className="my-5 grid grid-cols-4 gap-3 card">
      {transactionDetails?.map((list: any, index) => {
        return (
          <div key={index} className={styles.savings_card}>
            <div className="px-2 py-5 bg-[#F6FAFF] rounded-[10px] ">
              <div className="flex justify-between mb-5">
                <p className="mt-1">{list.title}</p>
                <button className="flex ">
                  <span className="mr-2"> More</span>
                  <DownIcon />
                </button>
              </div>
              <div className="flex justify-between my-3">
                <div className="flex flex-col">
                  <h5>Today</h5>
                  <h4>{list.todayAmout}</h4>
                </div>
                <div className="flex flex-col">
                  <h5>Yesterday</h5>
                  <h4>{list.yesterdayAmount}</h4>
                </div>
              </div>
              <div className="flex justify-between ">
                <div className="flex flex-col">
                  <h5>This week</h5>
                  <h4>{list.weekAmount}</h4>
                </div>
                <div className="flex flex-col">
                  <h5>Last week</h5>
                  <h4>{list.lastWeek}</h4>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
