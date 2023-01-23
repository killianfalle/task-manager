import React, { createContext, useState } from "react";

export const Context = createContext();
export const ContextProvider = ({ initials, children }) => {
  const [showForm, setShowForm] = useState({
    show: false,
    data: null
  });  // form modal

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

  const [toast, setToast] = useState({
    visible: false,
    title: null,
    type: "info",     // refer to defaultColors in "assets/theme/theme.js"
    position: "top",  // top, bottom
    visibilityTime: 3500,
    icon: null,
    onSubmit: () => {}
  });

  return (
    <Context.Provider
      value={{
        showForm,
        setShowForm,
        tasks,
        setTasks,
        toast,
        setToast
      }}
    >
      {children}
    </Context.Provider>
  );
};
