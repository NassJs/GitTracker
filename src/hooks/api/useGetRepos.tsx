import { useState } from "react";
import { Repository } from "@/models/models";
interface Repos {
    user: string; 
}
export const useGetRepos = async (user: Repos) => {
    const [reposUser, setReposUser] = useState<Repository>();
    const response = await fetch(`https://api.github.com/users/${user}/repos`);
    const responseJson = await response.json();
    console.log(responseJson)
    try {
        if(responseJson.ok){
            setReposUser(responseJson)  
            console.log("ok res repos")  
        }
    } catch {
        console.log("echec repository")
    }

    return reposUser;
}
