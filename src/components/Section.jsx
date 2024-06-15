import React, { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import Tasks from "./Tasks";

const Section = ({ isDone }) => {
  const { task } = useContext(TaskContext);

  //isDone의 값이 일치하는 task만 렌더한다

  return (
    <section>
      <h2>{isDone ? "Done" : "On Progress"}</h2>
      <ul>
        {task.map(
          (each) =>
            each.isDone === isDone && (
              <li key={each.id}>
                <Tasks each={each} />
              </li>
            )
        )}
      </ul>
    </section>
  );
};

export default Section;
