export default function Header() {
  function postPoem() {
    return (
      <div className="bg-black opacity-50 absolute">
        <div>
          <h3>New Poem</h3>
          <input type="text" placeholder="Title" />
        </div>
      </div>
    );
  }

  return (
    <header className="bg-[#FFF7F8] w-[100%] flex pt-15 px-5 pb-5 justify-between border-b-[#FAECEC] border-b-2">
      <h1 className="font-[Inria] text-4xl">Lilt</h1>
      <button
        onClick={postPoem}
        className="font-[Inria] bg-[#F9EDF6] text-2xs px-5 rounded-full"
      >
        Write a poem
      </button>
    </header>
  );
}
