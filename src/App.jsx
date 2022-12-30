import { useState } from 'react'
import Jokes from './Components/Jokes';
import data from './Components/Data';

const App = () => {
  const [jokes, setJokes] = useState(data);

  return (
    <main>
      <Jokes jokes={jokes} />
    </main>
  )
}

export default App
