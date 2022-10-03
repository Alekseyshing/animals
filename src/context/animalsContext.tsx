import React from "react";

interface IAnimalsContextData {
  name: string,
  specName: string,
  element?: React.ReactNode,
  onClick: (id: string) => void;
}

export const animalsContext = React.createContext<IAnimalsContextData[] | undefined>([]);