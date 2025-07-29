import React from "react";

export default function Feed() {
  const [posts, setPosts] = React.useState([]);

  React.useEffect(() => {
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

  function Card() {
    return (
      <div className="p-5">
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
    );
  }

  return (
    <div className="h-[100vh] w-[100%] bg-gradient-to-b from-[#FEF6F7] to-[#FCEFF9] overflow-auto">
      <Card />
    </div>
  );
}
