"use client";
import Link from "next/link";
import React from "react";
import { Navbar } from "@/components/navbar/Navbar";
import "./Nav.css";
import { LuLayoutDashboard } from "react-icons/lu";
import { BiAlignJustify } from "react-icons/bi";
import { usePathname } from "next/navigation";
import { PiGithubLogo } from "react-icons/pi";
interface INav {
  children: React.ReactNode;
}
export const Nav = ({ children }: INav) => {
  const usePath = usePathname();

  return (
    <Navbar>
      <div className="contains-nav">
        <div className="git-logo">
          <PiGithubLogo />
        </div>
        <ul className="nav-lists">
          <Link className={usePath === "/" ? "nav-activeLink" : ""} href="/">
            <li className="nav">
              <span className="nav-logo">
                <LuLayoutDashboard />
              </span>
              Dashboard
            </li>
          </Link>

          <Link
            className={usePath === "/Repository" ? "nav-activeLink" : ""}
            href="/Repository/"
          >
            <li className="nav">
              <span className="nav-logo">
                <BiAlignJustify />
              </span>
              Repositories
            </li>
          </Link>
        </ul>
      </div>
      {children}
    </Navbar>
  );
};
