"use client";
import Link from "next/link";
import React from "react";
import { SideBar } from "@/components/sideBar/SideBar";
import "./SideBar.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiAlignJustify } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { PiGithubLogo } from "react-icons/pi";
import { VscArchive } from "react-icons/vsc";

interface side {
  children: React.ReactNode;
}
export const SideBarContainer = ({ children }: side) => {
  const usePath = usePathname();

  return (
    <SideBar padding="p20">
      <div className="git-logo">
        <PiGithubLogo />
      </div>
      <ul className="lists">
        <Link className={usePath === "/" ? "activeLink" : ""} href="/">
          <li className="liste">
            <span className="nav-logo">
              <LuLayoutDashboard />
            </span>
            <span className="title"> Dashboard</span>
          </li>
        </Link>

        <Link
          className={usePath === "/Repository" ? "activeLink" : ""}
          href="/Repository/"
        >
          <li className="liste">
            <span className="nav-logo">
              <BiAlignJustify />
            </span>
            <span className="title"> Repositories</span>
          </li>
        </Link>

        <Link className={usePath === "/TTDE" ? "activeLink" : ""} href="/">
          <li className="liste">
            <span className="nav-logo">
              <VscArchive />
            </span>
            <span className="title"> MES FAV'S </span>
          </li>
        </Link>
      </ul>
      {children}
    </SideBar>
  );
};
