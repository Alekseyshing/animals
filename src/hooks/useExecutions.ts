/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";


interface IExecutionsData {
  id: string,
  time?: number,
  type?: string,
  animal?: {
    id: string,
    name: string,
    age: number,
    height: number,
    heightUnit: string,
    weight: number,
    weightUnit: string,
    spec: {
      id: string,
      name: string,
      type: string
    }
  }
}

export function useExecutionsData(token: string | null) {
  const [posts, setPosts] = useState<IExecutionsData[]>();

  const CONFIG = {
    headers: {
      'Authorization': `bearer ${token}`,
      'Content-Type': 'application/json'

    }
  };

  const URL = "https://acits-test-back.herokuapp.com/api/executions/today";


  useEffect(() => {
    try {
      if (token && token.length > 0 && token !== "undefined") {
        axios.get(URL, CONFIG)
          .then((resp) => {
            const postsData = resp.data;
            console.log(postsData);

            const dataList: IExecutionsData[] = [];

   
            for (let i = 0; i < postsData.length; i++) {
              dataList.push({
                id: postsData.id,
                type: "",
                animal: {
                  id: "",
                  name: "",
                  age: 0,
                  height: 0,
                  heightUnit: "",
                  weight: 0,
                  weightUnit: "",
                  spec: {
                    id: "",
                    name: "",
                    type: ""
                  }
                }
              });
            }

            if (postsData !== undefined) {
              setPosts(dataList);
            }
          })
      }
    } catch (error) {
      console.error(error)
    }
  }, [token])

  return [posts];
}

