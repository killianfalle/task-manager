import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ initials, children }) => {
  const [showForm, setShowForm] = useState(false);

  return (
    <Context.Provider
      value={{
        showForm,
        setShowForm
      }}
    >
      {children}
    </Context.Provider>
  );
};
