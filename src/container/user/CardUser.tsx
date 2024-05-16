"use client";
import React from "react";
import { GitHubUser } from "@/models/models";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

interface CardUserProps {
  user: GitHubUser;
  src: string | undefined;
}

export const CardUser: React.FC<CardUserProps> = ({ user }) => {

  return (
    <div className="h-24">
      {user && (
        <Card className="p-3 border-solid border-2 m-20px w-80%">
          <Image src={user.avatar_url} alt="picture" width={200} height={100} />
          <div>{user.login}</div>
          <div> active depuis : {user.created_at}</div>
          { user.bio &&
            <div> {user.bio}</div>
          }
        </Card>
      )}
    </div>
  );
};
