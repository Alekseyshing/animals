import React from 'react';
import { Header } from './Components/Header/Header';
import './index.css';
import useToken from '../src/hooks/useToken';
import { useExecutionsData } from '../src/hooks/useExecutions';
import { postsContext } from '../src/context/postsContext';

function App() {
  const token = useToken()
  const [posts] = useExecutionsData(token.myToken);

  return (
    <div>
      <postsContext.Provider value={posts}>
        <Header />
      </postsContext.Provider>
    </div>
  );
}

export default App;
