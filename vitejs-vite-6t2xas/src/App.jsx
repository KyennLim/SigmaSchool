import React, { useState, useEffect} from "react";

const API_URL = "https://posts-demo-server.sigmashooltech.repl.co/posts";

export default function App() {
  const [ posts, setposts] = useState([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [author, setAuthor] = useState("");

  const fetchPosts = () => {
    fetch(API_URL)
      .then(res => res.json()) // Parse JSON response
      .then(data => setposts(data)) // Fetch and set posts from API
      .catch(err => console.error(err)); // Handle errors
  };

    // Fetch posts when component mounts
  useEffect(() => {
    fetchPosts();
  }, []);

  // Function to handle form submission
  const createPost = (e) => {
    e.preventDefault();
    fetch(API_URL, {
      method: "POST",
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, content, author })
    })
    .then(res => res.json())
    .then(fetchPosts)
    .catch(err => console.error(err));
    setTitle("");
    setContent("");
    setAuthor("");
  };

  return (
    <div>
      <form onSubmit={createPost}>
        <input 
          type="text"
          placeholder="Author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />
        <input 
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <button type="submit">Create Post</button>
      </form>
      <div>
        {posts.map((post) => (
          <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
            <small>By {post.author}</small>
          </div>
        ))}
      </div>
    </div>
  );
}