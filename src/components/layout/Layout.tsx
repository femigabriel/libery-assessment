import React, { Children } from "react";
import { Sidebar } from "./Sidebar";
import { Headers } from "./Headers";

interface Props {
  children: React.ReactNode;
  title?: string;
  description?: string;
}

export const Layout = ({ children, title, description }: Props) => {
  return (
    <div>
      <div className="flex w-full py-7">
        <Sidebar />
        <div className="w-full px-5">
          <div>
            <div className="dashboard rounded-[30px] h-full w-full">
              <Headers
                title={title || "no title"}
                description={description || "no description"}
              />
              <div className="py-10 lg:px-7 layout">{children}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
