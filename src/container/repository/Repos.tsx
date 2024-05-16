"use client"

import { useGetRepos } from "@/hooks/api/useGetRepos";
import React, {useState} from "react";


export const Repos = () => {
    const [locals, setLocals] =  useState<string | null >("");
    const fetchRepos = useGetRepos(locals);
    console.log(fetchRepos);

    const local = async () => {
        let getNameLocalStorage = await localStorage.getItem("user");
        setLocals(getNameLocalStorage)
    } 
    local();

    console.log(locals, "locals")
  return <div>
     {locals}
    </div>;
};


