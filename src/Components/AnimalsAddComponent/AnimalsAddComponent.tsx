/* eslint-disable @typescript-eslint/no-unused-vars */
import { useContext, useState } from 'react';
import { animalsContext } from '../../context/animalsContext';
import { GenericList } from "../../UI/GenericList";
import { AnimalsCard } from '../AnimalsCard/AnimalsCard';
import { Pagination } from '../Pagination/Pagination';
import { generateId, generateRandomString } from "../services/ts/generateRandomIndex";
import { merge } from "../services/ts/merge";



export const AnimalsAddComponent = (): JSX.Element => {
  const animals = useContext(animalsContext);


  const [currentPage, setCurrentPage] = useState(1);
  const [offset, setOffset] = useState(0);
  const [perPage] = useState(5);

  const indexOfLastAnimal = currentPage * perPage;
  const indexOfFirstAnimal = indexOfLastAnimal - perPage;
  const currentAnimals = animals?.slice(indexOfFirstAnimal, indexOfLastAnimal);
  const paginate = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  }

  if (!animals) {
    return null!
  };

  const genericAnimals = currentAnimals?.map((animal) => {
    const ANIMALS = [
      {
        element: [<AnimalsCard key={generateRandomString()} height={animal.height}  heightUnit={animal.heightUnit} weight={animal.weight} weightUnit={animal.weightUnit} age={animal.age} name={animal.name} specName={animal.specName} onClick={() => { }} />],
        className: `${'min-w-[160px] w-full gap-2 text-xl text-black'}`,
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
      <div className="flex flex-col gap-10 px-20  items-center justify-center">
        <h2 className="text-2xl font-bold">Список наших питомцев</h2>
        <ul className='flex flex-col min-h-[300px] gap-5'>
          {genericAnimals}
        </ul>
        <Pagination animalsPerPage={perPage} totalAnimals={animals.length} paginate={paginate} />
      </div>
    </div>
  );
}
