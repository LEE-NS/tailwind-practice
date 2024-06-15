import { createContext, useState } from "react";

export const TaskContext = createContext(null);

const TaskProvider = ({ children }) => {
  const [task, setTask] = useState([
    {
      id: crypto.randomUUID(),
      title: "Example title",
      job: "Example job",
      isDone: false,
    },
  ]);

  return (
    <TaskContext.Provider value={{ task, setTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
