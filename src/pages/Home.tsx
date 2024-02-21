import { useState } from "react";
import Card from "../components/Card";
import Nav from "../components/Nav";
import TaskComponent from "../components/Task";

export interface Task {
  state: boolean;
  title: string;
  discription: string;
}

function Home() {
  const [taskWindow, setTaskWindow] = useState<boolean>(false);
  const [tasks, setTasks] = useState<Task[]>([
    {
      state: false,
      title: "Do the Dishs. In night to.",
      discription:
        "do this task before 7am and don't forgat to  to dish of subjs.",
    },
    {
      state: true,
      title: "Do the Dishs.",
      discription:
        "do this task before 3am and don't forgat to  to dish of subjs.",
    },
  ]);

  return (
    <>
      <div id="main-cantiner" className="text-white">
        <Nav />
        <div id="lower-part" className="flex my-8 mx-8 justify-around gap-32">
          <div id="left-part">
            <Card tasks={tasks} />
          </div>
          <div id="right-part">
            <div id="right-part-main" className="text-xl font-semibold m-2">
              <div className="flex justify-between">
                <h1>
                  To-Do's{" "}
                  <span className="text-neutral-400">"{tasks.length}"</span>
                </h1>
                <button
                  onClick={() => setTaskWindow(!taskWindow)}
                  className="bg-[#7763bd] px-2 py-2 flex justify-center items-center rounded-full"
                >
                  <span className="material-symbols-outlined">add_task</span>
                </button>
              </div>
              <div
                id="main-todo-window"
                className="w-[750px] h-96 overflow-y-scroll m-4 scrollbar-hide"
              >
                <ul className="text-lg font-medium">
                  {tasks.length === 0 ? (
                    <div className="w-full h-full flex justify-center mt-[24%]">
                      <h1 className="text-2xl font-bold">No Task avabeles</h1>
                    </div>
                  ) : (
                    tasks.map((task, index) => (
                      <li
                        className="mb-6 flex gap-4 items-center hover:bg-neutral-700 hover:cursor-pointer rounded-xl pl-4 mr-3 pb-2 pt-1"
                        key={task.title + index}
                      >
                        <button
                          className="bg-[#fbe6a2] text-black h-6 w-6 rounded-lg"
                          onClick={() => {
                            let temp = tasks;
                            temp[index].state = !temp[index].state;
                            setTasks([...temp]);
                          }}
                        >
                          {task.state && (
                            <i className="material-symbols-outlined">done</i>
                          )}
                        </button>
                        <div>
                          <h1
                            className={`w-[650px] text-ellipsis overflow-hidden h-7 ${
                              task.state && "line-through text-neutral-200"
                            }`}
                          >
                            {task.title}
                          </h1>
                          <p
                            className={`font-normal text-neutral-300 max-w-[650px] h-6 w-[650px] text-ellipsis overflow-hidden ${
                              task.state && "line-through text-neutral-200"
                            }`}
                          >
                            {task.discription}
                          </p>
                        </div>
                      </li>
                    ))
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {taskWindow ? (
        <TaskComponent setTaskWindow={setTaskWindow} setTasks={setTasks} />
      ) : (
        ""
      )}
    </>
  );
}

export default Home;
