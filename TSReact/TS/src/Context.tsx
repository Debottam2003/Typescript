import React, { ReactNode, useState } from "react";
import { createContext } from "react";

// Define the user details type
interface UserDetails {
  username: string;
  active: boolean;
  setUserName?: React.Dispatch<React.SetStateAction<string>>;
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
}

// Create the context with a default value
export const userContext: React.Context<UserDetails> =
  createContext<UserDetails>({
    username: "Debottam",
    active: false,
  });

interface propType {
  children: ReactNode;
}

const Context: React.FC<propType> = ({ children }) => {
  const [username, setUserName] = useState<string>("Debottam");
  const [active, setActive] = useState<boolean>(false);
  return (
    <userContext.Provider value={{ username, active, setUserName, setActive }}>
      {children}
    </userContext.Provider>
  );
};

export default Context;
