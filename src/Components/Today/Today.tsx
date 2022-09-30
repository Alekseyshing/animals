/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import { postsContext } from "../../context/postsContext";
import useToken from '../../hooks/useToken';
import { useExecutionsData } from '../../hooks/useExecutions';
import { TodayAddComponent } from '../TodayAddComponent/TodayAddComponent';
import { tokenContext } from "../../context/tokenContext";
import { TodayErrComponent } from "../TodayErrComponent/TodayErrComponent";


export const Today = (): JSX.Element => {
  const token = useToken();
  console.log(token.myToken);

  const [posts] = useExecutionsData(`${token.myToken}`);

  return (
    <tokenContext.Provider value={token.myToken}>
      <postsContext.Provider value={posts}>
          {token.myToken ? <TodayAddComponent /> : <TodayErrComponent/>}
      </postsContext.Provider>
    </tokenContext.Provider>
  );
}