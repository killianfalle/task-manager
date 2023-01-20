import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ initials, children }) => {
  const [createTask, setCreateTask] = useState(false);

  return (
    <Context.Provider
      value={{
        createTask,
        setCreateTask
      }}
    >
      {children}
    </Context.Provider>
  );
};
