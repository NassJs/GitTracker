"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { SideBarContainer } from "@/container/sideBar/SideBar";
import { useGetUser } from "@/hooks/api/useGetUser";
import { CardUser } from "@/container/user/CardUser";
import { Recommandations } from "@/container/recommandations/Recommandations";
import { SearchProfil } from "@/container/search/SearchProfil";
export default function Home() {
  const [value , setValue] = useState<string | number>("");
  const [searchUser, setSearchUser] = useState<string>("NassJs");

  const user = useGetUser(searchUser);

  useEffect(() => {}, [user]);

 const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleClick = () => {
    console.log(value, "value");
    setSearchUser(value);
    console.log(searchUser, "new profil");

  }

  return (
    <div className="container-page">
      <SideBarContainer>
        {user && (
          <>
           <input placeholder="search profil" onChange={handleInputChange} />
           <button onClick={handleClick}>search</button>
            {/* <SearchProfil setValue={setValue} handleSearch={handleSearch}/> */}
            <Recommandations followers_url={user} />
          </>
        )}
      </SideBarContainer>
      {user && <CardUser user={user} />}
    </div>
  );
}
