export type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

export type ResponseFetchTickets = {
  duration: string;
  arriveDate: string;
  arriveTime: string;
  id: number;
  logo: any;
  departDate: string;
  departTime: string;
  button: any;
  price: number;
};
export type MenuBarist = {
  title: string;
  id: number;
  icon: React.ReactElement;
  link: any;
};
export type AuthList = {
  title: string;
  description: string;
};

export type ResponseFetchUsers = {
  [x: string]: any;
  title: string;
  description: string;
  id: number;
  name: string;
  phone: string;
  email: string;
  address: string;
  agenda: string;
  years: number;
  country: string;
  dob: string;
  status: string;
  occupation: string;
  interest: string;
  education: string;
  purpose: string;
  profile: any;
};
export type ResponseFetchPaymentHistory = {
  id: number;
  name: string;
  item: string;
  date: string;
  amount: number;
  status: any;
};

export const ClientListApi = [
  {
    id: 0,
    name: "Adekola Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
  },
  {
    id: 1,
    name: "Odusote Mayokun",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
  },
  {
    id: 2,
    name: "Mayokun Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
  },
  {
    id: 3,
    name: "Adekola Damilare",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
  },
  {
    id: 3,
    name: "Mayokun Kemi",
    phone: "08165654564",
    email: "adeokola@gmail.com",
    address: "No 2, Olonade Close, Montana, Ibadan, Oyo State, Nigeria",
    agenda: "Male",
    years: 54,
    country: "Ngeria",
    dob: "04/11/20012",
    status: "married",
    occupation: "Software Engineer",
    interest: "Iceland",
    education: "Bachelor Degree",
    purpose: "Trading",
  },
];
