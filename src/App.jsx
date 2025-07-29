import { useState, useEffect } from "react";
import "./App.css";
import Feed from "./components/Feed";

function App() {
  const [modal, setModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    setPosts((prev) => [...prev, { title, content, author }]);
    setTitle("");
    setContent("");
    setAuthor("");
    setModal(false);
  }

  useEffect(() => {
    setPosts([
      {
        title: "The Unforgiven",
        content: `I am weightless, unbound
In the quiet dawn
Breath of the morning
Frees me from the night`,
        author: "Emma Turner",
      },
    ]);
  }, []);

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
          <form onSubmit={handleSubmit} action="">
            <input
              required
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Title"
              className="font-[Inria] w-full border px-3 py-2 rounded mb-2 border-[#FAECEC] bg-[#FFFFFF]"
            />
            <textarea
              required
              placeholder="Write your poem..."
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={8}
              className="font-[Inria] w-full border px-3 py-2 mb-2 rounded border-[#FAECEC] bg-[#FFFFFF] "
            />
            <input
              required
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              placeholder="Display name"
              className="font-[Inria] w-full border px-3 py-2 rounded mb-2 border-[#FAECEC] bg-[#FFFFFF]"
            />
            <div className="flex justify-between mt-2 items-center">
              <span
                onClick={() => setModal(false)}
                className="font-bold cursor-pointer"
              >
                Cancel
              </span>
              <button
                type="submit"
                className="font-[Inria] bg-[#F9EDF6] text-2xs px-5 py-2 rounded-full cursor-pointer"
              >
                Post
              </button>
            </div>
          </form>
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
      <div className="w-full h-full bg-gradient-to-b from-[#FEF6F7] to-[#FCEFF9] overflow-auto">
        <div className="p-5 flex flex-col-reverse">
          {posts.map((post, index) => (
            <div key={index} className="mb-6 p-4 bg-white rounded shadow">
              <h2 className="font-[Cardo] text-xl font-bold mb-2">
                {post.title}
              </h2>
              <p className="font-[Cardo] mb-2 whitespace-pre-line">
                {post.content}
              </p>
              <span className="text-sm text-[#BBA1A1]">by {post.author}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
