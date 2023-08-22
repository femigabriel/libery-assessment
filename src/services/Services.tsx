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
