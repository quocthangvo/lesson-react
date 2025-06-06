import React, { useEffect, useState } from "react";

const tabs = ["posts", "comments", "albums"];

const Content = () => {
  //1. useEffect(callback)
  //2. useEffect(callback,[])
  //- chỉ gọi callback 1 lần sau khi component mounted
  //3. useEffect(callback,[deps])
  //- call back sẽ được gọi lại mỗi khi deps thay đổi

  //callback luôn được gọi  sau khi component mounted

  const [title, setTitle] = useState("");
  const [posts, setPosts] = useState([]);
  const [type, setType] = useState("posts");
  //   console.log(type);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${type}`)
      .then((response) => response.json())
      .then((posts) => setPosts(posts));
  }, [type]);

  useEffect(() => {
    const handleScroll = () => {
      console.log(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
  });

  //chạy return trước giao diện, sau đó chạy userffect sau
  return (
    <div className="p-10">
      {tabs.map((tab) => (
        <button
          key={tab}
          style={
            type === tab
              ? {
                  color: "#fff",
                  backgroundColor: "gray",
                }
              : {}
          }
          onClick={() => setType(tab)}
        >
          {tab}
        </button>
      ))}
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Content;
