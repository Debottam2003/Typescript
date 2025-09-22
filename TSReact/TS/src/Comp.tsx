import React from "react";

type propType = {
  data: string;
  children: React.ReactNode;
};

const Comp: React.FC<propType> = ({ data, children }) => {
  return (
    <div>
      Comp {data}
      {children}
    </div>
  );
};

export default Comp;
