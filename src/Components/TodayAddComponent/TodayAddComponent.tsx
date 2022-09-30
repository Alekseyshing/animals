import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { postsContext } from "../../context/postsContext";
import useToken from '../../hooks/useToken';
import { GenericList } from "../../UI/GenericList";
import { ExecutionsCard } from "../ExecutionCard/ExecutionsCard";
import { generateId, generateRandomString } from "../services/ts/generateRandomIndex";
import { merge } from "../services/ts/merge";



export const TodayAddComponent = (): JSX.Element => {
  const token = useToken()
  const posts = useContext(postsContext);
  if (!posts) {
    return null!
  };



  const genericPosts = posts?.map((post) => {
    const POSTS = [
      {
        element: [<ExecutionsCard type={post.type} name={post.name} time={post.time} key={post.id} />],
        className: `${'w-full gap-2 text-xl text-black'}`,
      }
    ].map(generateId)

    const handleItemClick = () => { }

    return (
      <GenericList
        list={POSTS.map(merge({ onClick: handleItemClick }))}
        key={generateRandomString()}
      />
    )
  })


  return (
    <div>
        <div className="flex flex-col gap-10 h-96 px-20 items-center justify-center">
          <h2 className="text-2xl font-bold">Расписание животных с назначениями на сегодня</h2>
          <ul className='flex flex-col gap-5'>
            {genericPosts}
          </ul>
        </div>
    </div>
  );
}