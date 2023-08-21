import React from "react";
import { MenuBarist } from "../../services/Services";
import Link from "next/link";
import { useRouter } from "next/router";
import ArrowIcon from "@/svgs/ArrowIcon";
import Image from "next/image";
const homeIcon = "./icons/home-2.svg";
const dashboardIcon = "./icons/category-2.svg";
const personalIcon = "./icons/strongbox.svg";
const salesIcon = "./icons/shop.svg";
const talentsIcon = "./icons/3dcube.svg";
const spendIcon = "./icons/card-edit.svg";
const cardsIcon = "./icons/cards.svg";
const leaderboardIcon = "./icons/medal-star.svg";
const profileIcon = "./icons/security-user.svg";
const performanceIcon = "./icons/security-user.svg";
const arrowRightIcon = "./icons/Chevron-Right.svg";

const menuA: MenuBarist[] = [
  {
    id: 1,
    title: " Home",
    icon: <img src={homeIcon} className="" alt="home-icon" />,
    link: "/home",
  },
  {
    id: 2,
    title: "Analytics Dashboard",
    icon: <img src={dashboardIcon} className="" alt="dashboard-icon" />,
    link: "/",
  },
];

const menuB: MenuBarist[] = [
  {
    id: 1,
    title: "Personal",
    icon: <img src={personalIcon} className="" alt="personal icon" />,
    link: "/personal",
  },
  {
    id: 2,
    title: "Sales Hub",
    icon: <img src={salesIcon} className="" alt="sales icon" />,
    link: "/sales",
  },
  {
    id: 3,
    title: "Talent Management",
    icon: <img src={talentsIcon} className="" alt="talents icon" />,
    link: "/talent",
  },
  {
    id: 4,
    title: "Spend Management",
    icon: <img src={spendIcon} className="" alt="spend icon" />,
    link: "/spend",
  },
  {
    id: 5,
    title: "Cards",
    icon: <img src={cardsIcon} className="" alt="cards icon" />,
    link: "/card",
  },
];
const menuC: MenuBarist[] = [
  {
    id: 1,
    title: "Leaderboard",
    icon: <img src={leaderboardIcon} className="" alt="leaderboard icon" />,
    link: "/leaderboard",
  },
  {
    id: 2,
    title: "Profile & Settings",
    icon: <img src={profileIcon} className="" alt="profile icon" />,
    link: "/profile",
  },
  {
    id: 3,
    title: "Bank performance",
    icon: <img src={performanceIcon} className="" alt="performance icon" />,
    link: "/performance",
  },
];
export const Sidebar = () => {
  const router = useRouter();
  return (
    <div className="sidebar shadow-md px-5">
      <div className="pt-10 menu-list ">
        <div>
          <div className="mb-10 sidebar-title">
            <h3 className=" text-[32px] font-bold  ">Paybox</h3>
            <p>by LiberyPay</p>
          </div>
          <nav className="mb-5">
            {menuA?.map((list: any, index) => {
              return (
                <Link
                  key={index}
                  href={list.link}
                  className={`${
                    router.pathname === list.link ? "active" : ""
                  } text-[14px] py-3 font-medium cursor-pointer flex mb-3`}
                >
                  <span className="px-3">{list.icon}</span>
                  <span className="tracking-[-0.011em]">{list.title}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
      <div className="menu-list mt-5 ">
        <nav className="">
          {menuB?.map((list: any, index) => {
            return (
              <Link
                key={index}
                href={list.link}
                className={`${
                  router.pathname === list.link ? "active" : ""
                } text-[14px] py-2 font-medium cursor-pointer flex justify-between mb-3`}
              >
                <div className="flex">
                  <span className="px-3 icon">{list.icon}</span>
                  <span className="tracking-[-0.011em]">{list.title}</span>
                </div>
                <img src={arrowRightIcon} className="" alt="arrowRight icon" />
              </Link>
            );
          })}
        </nav>
      </div>
      <div className="menu-list mt-5 ">
        <nav className="">
          {menuC?.map((list: any, index) => {
            return (
              <Link
                key={index}
                href={list.link}
                className={`${
                  router.pathname === list.link ? "active" : ""
                } text-[14px] py-2 font-medium cursor-pointer flex justify-between mb-2`}
              >
                <div className="flex">
                  <span className="px-3 icon">{list.icon}</span>
                  <span className="tracking-[-0.011em]">{list.title}</span>
                </div>
                <img src={arrowRightIcon} className="" alt="arrowRight icon" />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};
