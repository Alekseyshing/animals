/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import { postsContext } from "../../context/postsContext";
import useToken from '../../hooks/useToken';
import { useExecutionsData } from '../../hooks/useExecutions';
import { TodayAddComponent } from '../TodayAddComponent/TodayAddComponent';
import { tokenContext } from "../../context/tokenContext";
import { ExpiredComponent } from "../ExpiredComponent/ExpiredComponent";


export const Today = (): JSX.Element => {
  const token = useToken();
  const [posts] = useExecutionsData(`${token.myToken}`);

  return (
    <tokenContext.Provider value={token.myToken}>
      <postsContext.Provider value={posts}>
          {token.myToken ? <TodayAddComponent /> : <ExpiredComponent/>}
      </postsContext.Provider>
    </tokenContext.Provider>
  );
}