import React from 'react'
import useToken from '../../hooks/useToken';
import { ExpiredComponent } from '../ExpiredComponent/ExpiredComponent';
import { tokenContext } from "../../context/tokenContext";
import { animalsContext } from '../../context/animalsContext';
import { useAnimalsData } from '../../hooks/useAnimals';
import { AnimalsAddComponent } from '../AnimalsAddComponent/AnimalsAddComponent';

export const Animals = (): JSX.Element => {
  const token = useToken();
  const [animals] = useAnimalsData(`${token.myToken}`);

  return (
    <tokenContext.Provider value={token.myToken}>
    <animalsContext.Provider value={animals}>
        {token.myToken ? <AnimalsAddComponent /> : <ExpiredComponent/>}
    </animalsContext.Provider>
  </tokenContext.Provider>
  );
}