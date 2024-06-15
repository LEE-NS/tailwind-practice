import React, { useContext, useRef } from "react";
import { TaskContext } from "./context/TaskContext";
import Section from "./components/Section";

const App = () => {
  const { task, setTask } = useContext(TaskContext);

  const title = useRef("");
  const job = useRef("");

  const addTask = (e) => {
    e.preventDefault();
    const newTask = {
      id: crypto.randomUUID(),
      title: title.current.value,
      job: job.current.value,
      isDone: false,
    };
    setTask([...task, newTask]);
    title.current.value = "";
    job.current.value = "";
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-10">
      <h1 className="text-[#ff0000] w-40 h-10 bg-gray-100 border border-black">
        연습용 게시판
      </h1>
      <form onSubmit={addTask} className="flex justify-center gap-10">
        <input
          type="text"
          ref={title}
          className="bg-red-500 px-3 py-2 rounded-md"
        />
        <input
          type="text"
          ref={job}
          className="bg-red-500 px-3 py-2 rounded-md"
        />
        <button className="inline-block px-3 py-2 bg-gray-100 rounded-md">
          ADD
        </button>
      </form>
      <Section isDone={false} />
      <Section isDone={true} />
    </div>
  );
};

export default App;
