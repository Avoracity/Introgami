import { useState } from 'react';
import Index from "../pages/index";

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Index />

    </div>
  )
}

export default App
