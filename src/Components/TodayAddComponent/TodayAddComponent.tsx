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
  if (!posts) return null!;


  const genericPosts = posts?.map((post) => {
    const POSTS = [
      {
        element: [<ExecutionsCard type={post.type} name={post.name} time={post.time} key={post.id} />],
        className: `${''}`,
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
    <>
      {token && token !== null && posts && (
        <ul>
          {genericPosts}
        </ul>
      )}
      {!token && (
        <div className='flex flex-col max-w-[600px] hover:shadow-lg duration-300 ease-in mx-auto items-center justify-center p-10 gap-4 border-2 rounded-lg border-solid'>
          <h2 className='text-base  font-bold'>Время сеанса истекло</h2>
          <div className='flex gap-2'>
            <p className='text-sm'>Пожалуйста</p>
            <Link to='/login' className='text-lime-600 hover:text-lime-400 duration-150 ease-in text-sm font-bold'>авторизуйтесь</Link>
          </div>
        </div>
      )}
    </>
  );
}