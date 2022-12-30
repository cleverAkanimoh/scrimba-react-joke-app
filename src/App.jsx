import { useState } from 'react'
import Jokes from './Components/Jokes'

function App() {
  const [jokes, setJokes] = useState(data);

  return (
    <div className="App">
      <Jokes />
    </div>
  )
}

export default App
