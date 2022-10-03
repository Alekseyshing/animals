/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useContext, useEffect, useState } from 'react';
import { animalsContext } from '../../context/animalsContext';
import { GenericList } from "../../UI/GenericList";
import { AnimalsCard } from '../AnimalsCard/AnimalsCard';
import { generateId, generateRandomString } from "../services/ts/generateRandomIndex";
import { merge } from "../services/ts/merge";



export const AnimalsAddComponent = (): JSX.Element => {
  const animals = useContext(animalsContext);



  if (!animals) {
    return null!
  };

  const genericAnimals = animals?.map((animal) => {
    const ANIMALS = [
      {
        element: [<AnimalsCard name={animal.name} specName={animal.specName} onClick={() => { }} />],
        className: `${'w-full gap-2 text-xl text-black'}`,
      }
    ].map(generateId)

    const handleItemClick = () => { }

    return (
      <GenericList
        list={ANIMALS.map(merge({ onClick: handleItemClick }))}
        key={generateRandomString()}
      />
    )
  })




  return (
    <div>
      <div className="flex flex-col gap-10 px-20 items-center justify-center">
        <h2 className="text-2xl font-bold">Список наших питомцев</h2>
        <ul className='flex flex-col gap-5'>
          {genericAnimals}
        </ul>
      </div>
    </div>
  );
}
