"use client";
import React, { useEffect } from "react";
import { SideBarContainer } from "@/container/sideBar/SideBar";
import { useGetUser } from "@/hooks/api/useGetUser";
import { CardUser } from "@/container/user/CardUser";
import { Recommandations } from "@/container/recommandations/Recommandations";

export default function Home() {
  const user = useGetUser("NassJs");

  useEffect(() => {}, [user]);

  console.log(user);
  return (
    <div className="container-page">
      <SideBarContainer>
        {user && (
          <>
            <Recommandations followers_url={user} />
          </>
        )}
      </SideBarContainer>
      {user && <CardUser user={user} />}
    </div>
  );
}
