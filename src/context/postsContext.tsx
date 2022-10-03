import React from "react";

interface IPostsContextData {
  type: string,
  time: string,
  name: string,
  id?: string,
  specName: string,
  age: number,
  weight: number,
  weightUnit: string,
  height: number, 
  heightUnit: string,
  element?: React.ReactNode | null,
  onClick: (id: string) => void,
}

export const postsContext = React.createContext<IPostsContextData[] | undefined>([]);
