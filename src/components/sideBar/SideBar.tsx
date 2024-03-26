"use client";
import React from "react";
import "./SideBar.css";

type typeSideBar = {
  children: React.ReactNode;
  padding: string;
};

export const SideBar = ({ children, padding }: typeSideBar) => {
  return <nav className={`sidebar ${padding}`}>{children}</nav>;
};
