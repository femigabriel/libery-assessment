import { Button } from "antd";
import { ResponseFetchPaymentHistory } from "./Services";

export const paymentHistory: ResponseFetchPaymentHistory[] = [
  {
    id: 0,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className="px-3 border-0 bg-red-100 text-[#c3ad2e] font-semibold text-[12px] rounded-[8px]">
        Pending
      </Button>
    ),
  },
  {
    id: 1,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className="px-3 border-0 text-green-400 text-[12px] font-semibold rounded-[8px]">
        Paid
      </Button>
    ),
  },
  {
    id: 2,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className="px-3 border-0 bg-gray-200 text-gray-400 text-[12px] font-semibold rounded-[8px]">
        Draft
      </Button>
    ),
  },
  {
    id: 3,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className="px-3 border-0 bg-red-100 text-red-500 text-[12px] font-semibold rounded-[8px]">
        Rejected
      </Button>
    ),
  },
  {
    id: 4,
    name: "Adegoke Oluwadamilare",
    item: "Registration Fee",
    date: "11/4/2021",
    amount: 21000,
    status: (
      <Button className="px-3 border-0 bg-[darkgray] text-gray-600 text-[12px] font-semibold rounded-[8px]">
        Pending
      </Button>
    ),
  },
];
