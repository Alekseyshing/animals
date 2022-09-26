/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";


interface IExecutionsData {
  time: number,
  type: string,
  name: string,
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
      axios.get(URL, CONFIG)
        .then((resp) => {
          const postsData = resp.data.results;
          const dataList: IExecutionsData[] = [];

          for (let i = 0; i < postsData.length; i++) {
            dataList.push({
              type: postsData[i].type,
              time: postsData[i].time,
              name: postsData[i].animal.spec.name,
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

