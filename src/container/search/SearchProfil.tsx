"use client";

import React, { Dispatch, SetStateAction, ChangeEvent, MouseEvent } from "react";

interface TypeSearchProfil {
  setValue: Dispatch<SetStateAction<string | number>>;
  handleSearch: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const SearchProfil = ({ setValue, handleSearch }: TypeSearchProfil) => {

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
     
    </>
  );
};

