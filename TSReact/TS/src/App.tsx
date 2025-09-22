import { useState } from "react"

const App: React.FC = function () {
  const [data, setData] = useState<number>(0);
  return (
    <h2>
      Typescript for react
      <h2>{data}</h2>
      <button onClick={() => setData(data + 1)} >This is a button</button>
    </h2>
  )
}

export default App
