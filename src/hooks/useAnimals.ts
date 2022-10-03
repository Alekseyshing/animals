/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

interface IAnimalsData {
  name: string,
  specName: string,
  element?: React.ReactNode,
  onClick: (id: string) => void;
}

export function useAnimalsData(token: string | undefined) {
  const [animals, setAnimals] = useState<IAnimalsData[]>();
  const getAuthorizationHeader = () => `Bearer ${token}`;
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);
  const [pageCount, setPageCount] = useState(0);

  const CONFIG = {
    headers: {
      'Authorization': getAuthorizationHeader(),
      'Content-Type': 'application/json',
    }
  };

  const ANIMALS_URL = `https://acits-test-back.herokuapp.com/api/animals?limit=${perPage}&offset=${offset}`;

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

