import { Input } from "antd";
import React, { useState } from "react";
import {
  BellOutlined,
  MenuOutlined,
  LoginOutlined,
  UserOutlined,
  UsergroupAddOutlined,
} from "@ant-design/icons";
import { AuthList } from "../../services/Services";
import Image from "next/image";
const bellIcons = "./icons/bellIcons.svg";
import type { DrawerProps, RadioChangeEvent } from "antd";
import { Drawer } from "antd";
import Link from "next/link";
import { useRouter } from "next/router";
import type { MenuProps } from "antd";
import { Dropdown } from "antd";
import { HomeOutlined } from "@ant-design/icons";
import { usePathname } from "next/navigation";
import HomeIcon from "@/svgs/HomeIcon";
import DashboardIcon from "@/svgs/DashboardIcons";
import UsersIcon from "@/svgs/UsersIcons";
import LogIcon from "@/svgs/LogIcon";
import PurseIcon from "@/svgs/PurseIcon";
import SettingsIcon from "@/svgs/SettingIcon";
import RequesIcon from "@/svgs/RequestIcon";
import DarkModeIcon from "@/svgs/DarkModeIcon";
import DeviceIcon from "@/svgs/DeviceIcon";
const downArrowIcon = "./icons/downArrowIcon.svg";
const homeIcon = "./icons/home-2.svg";
const dashboardIcon = "./icons/category-2.svg";
const salesIcon = "./icons/shop.svg";
const personalIcon = "./icons/strongbox.svg";
const talentsIcon = "./icons/3dcube.svg";
const spendIcon = "./icons/card-edit.svg";
const cardsIcon = "./icons/cards.svg";
const leaderboardIcon = "./icons/medal-star.svg";
const profileIcon = "./icons/security-user.svg";
const performanceIcon = "./icons/security-user.svg";
const arrowRightIcon = "./icons/Chevron-Right.svg";

export const Headers = (props: AuthList) => {
  const router = useRouter;
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<DrawerProps["placement"]>("left");

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const menu = [
    {
      id: 0,
      title: " Home",
      icon: <img src={homeIcon} className="" alt="home-icon" />,
      link: "/home",
    },
    {
      id: 1,
      title: "Analytics Dashboard",
      icon: <img src={dashboardIcon} className="" alt="home-icon" />,
      link: "/",
    },
    {
      id: 2,
      title: "Personal",
      icon: <img src={personalIcon} className="" alt="home-icon" />,
      link: "/personal",
    },
    {
      id: 3,
      title: "Sales Hub",
      icon: <img src={salesIcon} className="" alt="home-icon" />,
      link: "/sales",
    },
    {
      id: 4,
      title: "Talent Management",
      icon: <img src={talentsIcon} className="" alt="home-icon" />,
      link: "/talent",
    },
    {
      id: 5,
      title: "Spend Management",
      icon: <img src={spendIcon} className="" alt="home-icon" />,
      link: "/spend",
    },
    {
      id: 6,
      title: "Cards",
      icon: <img src={cardsIcon} className="" alt="home-icon" />,
      link: "/card",
    },
    {
      id: 7,
      title: "Leaderboard",
      icon: <img src={leaderboardIcon} className="" alt="home-icon" />,
      link: "/leaderboard",
    },
    {
      id: 8,
      title: "Profile & Settings",
      icon: <img src={profileIcon} className="" alt="home-icon" />,
      link: "/profile",
    },
    {
      id: 9,
      title: "Bank performance",
      icon: <img src={performanceIcon} className="" alt="home-icon" />,
      link: "/performance",
    },
  ];

  // Proofile dropdown
  const items: MenuProps["items"] = [
    {
      key: "1",
      label: (
        <Link href="/" className="login-link flex">
          <img src={dashboardIcon} className="mt-2" />
          <span className="text-[16px] font-semibold mx-3 mt-2">
            Analytics Dashboard
          </span>
        </Link>
      ),
    },
    {
      key: "2",
      label: (
        <Link href="/" className="login-link  bg-red-200\  flex rounded-md">
          <LoginOutlined className="mt-2 text-red-600" />
          <span className="text-[16px] font-semibold mx-3 text-red-600">
            Log out
          </span>
        </Link>
      ),
    },
  ];

  return (
    <div>
      <div className="header bg-white w-full rounded-[30px]">
        <header className="flex justify-between px-10 py-5">
          <div className="mobile-menu"></div>
          <div>
            <h1 className="text-[24px] text-[#242424] font-normal mt-3">
              {props.title}
            </h1>
          </div>
          <div className="flex rounded-full cursor-pointer">
            <img src={bellIcons} className="cursor-pointer mt-3" alt="bell" />
            <Dropdown menu={{ items }} placement="bottomRight" arrow>
              <div className="flex justify-between mt-1">
                <Image
                  src="/images/profile.jpg"
                  width={50}
                  height={50}
                  className="w-[40px] mt-2 h-[40px] mx-3 cursor-pointer rounded-full"
                  alt="profile-image"
                />
                <div className="mt-3">
                  <h3 className="text-[#000] text-[14px] font-bold">
                    Dexter Olaniyi
                  </h3>
                  <div className="flex ">
                    <p className="text-[#818181] text-[10px] font-normal">
                      Dexterola@gmail.com
                    </p>
                    <img
                      src={downArrowIcon}
                      className="ml-2 text-[10px]"
                      alt="downArrow icon"
                    />
                  </div>
                </div>
              </div>
            </Dropdown>
          </div>
        </header>
      </div>
      <div className="mobile-header px-5">
        <div className="mt-14 ">
          <h3 className="text-[#fff] text-[18px] font-normal tracking-[-0.24px]">
            Analytics dashboard
          </h3>
        </div>
        <button
          onClick={showDrawer}
          className="bg-[#2D4696] mt-14 text-white tracking-[-0.24px] font-normal  rounded-[10px] px-5 h-[36px] w-[87px]"
        >
          Menu
        </button>
      </div>
      <Drawer
        // title="Menu"
        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
      >
        <nav className="mobile-drawer">
          {menu?.map((list: any, index) => {
            return (
              <Link
                key={index}
                href={list.link}
                className="text-[14px] py-2 font-medium cursor-pointer flex mb-3"
              >
                <span className="px-3 icon">{list.icon}</span>
                <span className="tracking-[-0.011em]">{list.title}</span>
              </Link>
            );
          })}
        </nav>
      </Drawer>
    </div>
  );
};
