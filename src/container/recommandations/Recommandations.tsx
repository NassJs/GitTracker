"use client";

import React, { useState, useEffect } from "react";
import { CardFlex } from "@/components/ui/card";
import { GitHubUser } from "../../models/models";
import Image from "next/image";
interface RecommandationsProps {
  followers_url?: string | undefined;
}
export const Recommandations: React.FC<RecommandationsProps> = ({
  followers_url,
}) => {
  const [recommandationUser, setRecommandationUser] = useState<GitHubUser>();
  console.log("state", recommandationUser);
  useEffect(() => {
    if (followers_url) {
      handleCallFollowing();
    }
  }, [followers_url]);

  const handleCallFollowing = async () => {
    try {
   
      const response = await fetch(followers_url.followers_url);
      const followersData = await response.json();
      const threeRecommandationUser = followersData.slice(0, 3);
      setRecommandationUser(threeRecommandationUser);
    } catch (error) {
      console.error("Error fetching followers data:", error);
    }
  };
  return (
    <>
      <h3> Recommandations </h3>
      <div>
        {recommandationUser &&
          recommandationUser.map((recoms: any) => (
            <CardFlex flex="flex m-3 items-center">
              <Image
              className="rounded-xl"
                src={recoms.avatar_url}
                height={20}
                width={30}
                alt="picure avatar"
                loading="lazy"
              />
              <div> {recoms.login}</div>
            </CardFlex>
          ))}
      </div>
    </>
  );
};
