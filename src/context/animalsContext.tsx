import React from "react";

interface IAnimalsContextData {
  name: string,
  specName: string,
  age: number,
  weight: number,
  weightUnit: string,
  height: number, 
  heightUnit: string,
  element?: React.ReactNode,
  onClick: (id: string) => void;
}

export const animalsContext = React.createContext<IAnimalsContextData[] | undefined>([]);