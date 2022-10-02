import { Header } from './Components/Header/Header';
import './index.css';
import useToken from '../src/hooks/useToken';
import { useExecutionsData } from '../src/hooks/useExecutions';
import { postsContext } from '../src/context/postsContext';


function App() {
  const token = useToken();
  console.log(`${token.myToken}`);
  const [posts] = useExecutionsData(token.myToken);

  return (
    // <tokenContext.Provider value={token.myToken}>
      <postsContext.Provider value={posts}>
        <Header />
      </postsContext.Provider>
    // </tokenContext.Provider>
  );
}

export default App;
