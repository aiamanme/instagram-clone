import { SetStateAction, useState } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../config/firebase";

function Home() {
  const [todos, setTodos] = useState<string[]>([]);
  const [currentTodo, setCurrentTodo] = useState("");

  function handelCurrentTodo(event: {
    target: { value: SetStateAction<string> };
  }) {
    setCurrentTodo(event.target.value);
  }

  const handelSignOut = () => {
    signOut(auth)
      .then(() => {
        window.location.href = "/authPage";
        console.log("Signed out successfully");
      })
      .catch((error) => {
        console.error(error);
      });
    window.location.href = "/authPage";
  };

  function handeAddTodo(event: { preventDefault: () => void }) {
    setTodos([...todos, currentTodo]);
    setCurrentTodo("");
    event.preventDefault();
  }
  function handeDelete(task: string) {
    setTodos(todos.filter((todos) => todos !== task));
  }

  return (
    <>
      <div className="flex flex-col gap-4 justify-start items-center h-[90vh] mt-10 ml-10">
        <button className="bg-red-700" onClick={handelSignOut}>
          SignOut
        </button>
        <div>
          <form
            onSubmit={handeAddTodo}
            className="flex felx-col items-center justify-center"
          >
            <input
              type="text"
              value={currentTodo}
              placeholder="Task here 🖋️..."
              onChange={handelCurrentTodo}
              className="bg-[#303134] shadow-lg hover:bg-[#35363a] focus:bg-[#35363a] text-white border-0 outline-0 py-[8px] font-semibold px-4 rounded-lg m-2 w-[30svw]"
            />
            <button
              type="submit"
              className="bg-violet-800  hover:bg-violet-700 active:bg-violet-600 text-white px-2 h-10 rounded-full shadow-lg font-semibold flex items-center justify-center"
            >
              <span className="material-symbols-outlined justify-center flex items-center">
                add_circle
              </span>
            </button>
          </form>
          <div className="m-4">
            <h1 className="text-white text-xl font-bold">Todo's :</h1>
            <ul className="m-2">
              {todos.map((task) => (
                <div className="flex gap-3 justify-start items-center text-white font-semibold text-lg max-w-96">
                  <button
                    className="h-7 w-auto"
                    onClick={() => handeDelete(task)}
                  >
                    <span className="material-symbols-outlined">delete</span>
                  </button>
                  <li>{task}</li>
                </div>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
