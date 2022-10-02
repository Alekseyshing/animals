/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";

interface IExecutionsData {
  name: string,
  specName: string,
  element?: React.ReactNode,
  onClick: (id: string) => void;
}

export function useExecutionsData(token: string | undefined) {
  const [posts, setPosts] = useState<IExecutionsData[]>();
  const getAuthorizationHeader = () => `Bearer ${token}`;

  const CONFIG = {
    headers: {
      'Authorization': getAuthorizationHeader(),
      'Content-Type': 'application/json',
    }
  };

  const ANIMALS_URL = "https://acits-test-back.herokuapp.com/api/animals";

  useEffect(() => {
    try {
      axios.get(ANIMALS_URL, CONFIG)
        .then((resp) => {
          const postsData = resp.data.results;

          const dataList: IExecutionsData[] = [];

          for (let i = 0; i < postsData.length; i++) {
            dataList.push({
              name: postsData[i].name,
              specName: postsData[i].spec.name,
              onClick: () => {}
            })          
          }
          
          if (postsData !== undefined) {
            setPosts(dataList)
          }
        })
    } catch (error) {
      console.error(error)
    }
  }, [token])
  return [posts]
}

