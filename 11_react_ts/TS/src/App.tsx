import React, { useState } from "react";
import Comp from "./Comp";

const App: React.FC = function () {
  const [data, setData] = useState<number>(0);
  return (
    <div>
      Typescript for react
      <h3>{data}</h3>
      <button onClick={() => setData(data + 1)}>This is a button</button>
      <Comp data={"this is data"}>
        <div>
          <h3>This is a child tsx component</h3>
        </div>
        <div>OP</div>
      </Comp>
      <form
        onSubmit={(e: React.FormEvent<HTMLFormElement>) => {
          e.preventDefault();
        }}
      >
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            console.log(e.target.value);
          }}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default App;
