import React from "react";
import { SideBarContainer } from "@/container/sideBar/SideBar";
import {Repos} from "@/container/repository/Repos";

const Repository = () => {
  return (
    <div className="container-page">
      <SideBarContainer>Nass</SideBarContainer>
      <Repos />
    </div>
  );
};

export default Repository;
