import { useState } from "react";
import "./App.css";
import Feed from "./components/Feed";

function App() {
  const [modal, setModal] = useState(false);

  return (
    <div className={modal ? "h-screen overflow-hidden" : "h-screen"}>
      <div
        className={
          modal
            ? "fixed inset-0 flex items-center justify-center bg-black/50 z-[1000]"
            : "hidden"
        }
      >
        <div className="bg-[#FFFBFB] p-6 rounded-md shadow-lg flex flex-col w-[90%]">
          <h3 className="text-2xs font-[Poppins] text-[#BBA1A1] mb-4">
            New Poem
          </h3>
          <input
            type="text"
            placeholder="Title"
            className="w-full border px-3 py-2 rounded mb-2 border-[#FAECEC] bg-[#FFFFFF]"
          />
          <textarea
            placeholder="Write your poem..."
            rows={8}
            className="w-full border px-3 py-2 mb-2 rounded border-[#FAECEC] bg-[#FFFFFF] "
          />
          <input
            type="text"
            placeholder="Display name"
            className="w-full border px-3 py-2 rounded mb-2 border-[#FAECEC] bg-[#FFFFFF]"
          />
          <div className="flex justify-between mt-2 items-center">
            <span
              onClick={() => setModal(false)}
              className="font-bold cursor-pointer"
            >
              Cancel
            </span>
            <button className="font-[Inria] bg-[#F9EDF6] text-2xs px-5 py-2 rounded-full cursor-pointer">
              Post
            </button>
          </div>
        </div>
      </div>
      <header className="bg-[#FFF7F8] w-[100%] flex pt-15 px-5 pb-5 justify-between border-b-[#FAECEC] border-b-2">
        <h1 className="font-[Inria] text-4xl">Lilt</h1>
        <button
          onClick={() => setModal(true)}
          className="font-[Inria] bg-[#F9EDF6] text-2xs px-5 rounded-full"
        >
          Write a poem
        </button>
      </header>
      <Feed />
    </div>
  );
}

export default App;
