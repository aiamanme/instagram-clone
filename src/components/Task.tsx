import { type Dispatch, SetStateAction } from "react";
import { type Task } from "../pages/Home";

interface Props {
  setTaskWindow: Dispatch<SetStateAction<boolean>>;
  setTasks: Dispatch<SetStateAction<Task[]>>;
}

const Task = ({ setTaskWindow, setTasks }: Props) => {
  const closeModal = () => setTaskWindow(false);

  return (
    <>
      <div
        id="TaksCD"
        className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center"
        onClick={closeModal}
      >
        <form
          onClick={(e) => e.stopPropagation()}
          className="bg-neutral-700 shadow-xl p-5 rounded-3xl flex gap-5 flex-col w-[450px] h-96 text-black"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget);

            setTasks((currentState) => {
              return [
                {
                  state: false,
                  title: data.get("title")?.toString() || "",
                  discription: data.get("discription")?.toString() || "",
                },
                ...currentState,
              ];
            });

            closeModal();
          }}
        >
          <input
            type="text"
            name="title"
            required
            placeholder="You Task's Title Over Hear..."
            className="h-10 px-3 rounded-xl"
          />
          <textarea
            name="discription"
            required
            placeholder="And discription Goes Hear..."
            className="h-[250px] p-3 rounded-xl"
          ></textarea>
          <div className="flex justify-between items-center">
            <button className="bg-[#7763bd] px-2 py-2 pr-3 rounded-full flex gap-1 justify-center items-center text-white">
              <span className="material-symbols-outlined">done</span> Add Task
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Task;
