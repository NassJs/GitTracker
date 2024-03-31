"use client";
import React, { useEffect } from "react";
import { SideBarContainer } from "@/container/sideBar/SideBar";
import { useGetUser } from "@/hooks/api/useGetUser";
import { CardUser } from "@/container/user/CardUser";
import { Recommandations } from "@/container/recommandations/Recommandations";
import { SearchProfil } from "@/container/search/SearchProfil";
export default function Home() {
  const user = useGetUser("NassJs");

  useEffect(() => {}, [user]);

  console.log(user);
  return (
    <div className="container-page">
      <SideBarContainer>
        {user && (
          <>
            <SearchProfil />
            <Recommandations followers_url={user} />
          </>
        )}
      </SideBarContainer>
      {user && <CardUser user={user} />}
    </div>
  );
}
