import { GitHubUser } from "@/models/models";


export const  getFirstThreeObjects = (data : any[]) =>  {
    const firstThreeObjects = [];

    for (let i = 0; i < 3; i++) {
        firstThreeObjects.push(data[i]);
    }

    return firstThreeObjects;
}