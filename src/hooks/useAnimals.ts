/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

export interface IAnimalsData {
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

export function useAnimalsData(token: string | undefined) {
  const [animals, setAnimals] = useState<IAnimalsData[]>();
  const getAuthorizationHeader = () => `Bearer ${token}`;

  const CONFIG = {
    headers: {
      'Authorization': getAuthorizationHeader(),
      'Content-Type': 'application/json',
    }
  };

  const ANIMALS_URL = `https://acits-test-back.herokuapp.com/api/animals`;

  useEffect(() => {
    try {
      axios.get(ANIMALS_URL, CONFIG)
        .then((resp) => {

          const animalsData = resp.data.results;
          const dataList: IAnimalsData[] = [];

          for (let i = 0; i < animalsData.length; i++) {
            dataList.push({
              name: animalsData[i].name,
              specName: animalsData[i].spec.name,
              age: animalsData[i].age,
              weight: animalsData[i].weight,
              weightUnit: animalsData[i].weightUnit,
              height: animalsData[i].height, 
              heightUnit: animalsData[i].heightUnit,
              onClick: () => { }
            })
          }

          if (animalsData !== undefined) {
            setAnimals(dataList);
          }
        })
    } catch (error) {
      console.error(error)
    }
  }, [token])
  return [animals]
}

