"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SideBarContainer } from "@/container/sideBar/SideBar";
import { useGetUser } from "@/hooks/api/useGetUser";
import { CardUser } from "@/container/user/CardUser";
import { Recommandations } from "@/container/recommandations/Recommandations";
export default function Home() {
  const [value, setValue] = useState<string | number>("");
  const [searchUser, setSearchUser] = useState<string>("NassJs");
  const user = useGetUser(searchUser);

  useEffect(() => {}, [user]);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    console.log(value, "value");
    localStorage.setItem("user", value);
    console.log(searchUser, "new profil");
  };

  return (
    <div className="container-page">
      <SideBarContainer>
        {user && (
          <>
            <Recommandations followers_url={user} />
          </>
        )}
      </SideBarContainer>
      <div className="">
      <input placeholder="search profil" onChange={handleInputChange} />
      <button onClick={handleClick}>search</button>
      {user && <CardUser user={user} />}
      </div>
      
      
    </div>
  );
}
