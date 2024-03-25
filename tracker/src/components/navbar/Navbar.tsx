"use client";
import React from "react";
import "./Navbar.css";

type typeNavbar = {
  children: React.ReactNode;
};

export const Navbar = ({ children }: typeNavbar) => {
  return <nav className="navbar">{children}</nav>;
};
