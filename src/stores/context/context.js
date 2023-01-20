import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ initials, children }) => {
  const [showForm, setShowForm] = useState(false);  // form modal
  const [tasks, setTasks] = useState({              // task data
    todo: {
      title: 'To do',
      data: [],
    },
    completed: {
      title: 'Completed',
      data: [],
    }
  });

  return (
    <Context.Provider
      value={{
        showForm,
        setShowForm,
        tasks,
        setTasks
      }}
    >
      {children}
    </Context.Provider>
  );
};
