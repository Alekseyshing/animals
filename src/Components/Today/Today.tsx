/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable react-hooks/rules-of-hooks */
import { postsContext } from "../../context/postsContext";
import useToken from '../../hooks/useToken';
import { useExecutionsData } from '../../hooks/useExecutions';
import { TodayAddComponent } from '../TodayAddComponent/TodayAddComponent';


export const Today = (): JSX.Element => {
  const token = useToken()
  const [posts] = useExecutionsData(token.myToken);

  return (
    <postsContext.Provider value={posts}>
      <div className="flex flex-col gap-10 px-20 items-center justify-center">
        <h2 className="text-2xl font-bold">Расписание животных с назначениями на сегодня</h2>
        <TodayAddComponent />
      </div>
    </postsContext.Provider>
  );
}