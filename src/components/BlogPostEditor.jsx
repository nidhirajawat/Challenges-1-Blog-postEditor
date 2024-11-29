import React, { useState } from "react";

const BlogPostEditor = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  // Word count logic
  const wordCount = body.trim().split(/\s+/).filter(word => word).length;

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-gray-100 rounded shadow">
      <h1 className="text-2xl font-bold mb-4 text-center text-red">Blog Post Editor</h1>

      {/* Title Input */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          id="title"
          className="w-full p-2 border border-gray-300 rounded"
          placeholder="Enter your title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      {/* Body Input */}
      <div className="mb-4">
        <label className="block text-lg font-medium mb-2" htmlFor="body">
          Body
        </label>
        <textarea
          id="body"
          className="w-full p-2 h-40 border border-gray-300 rounded"
          placeholder="Write your blog content here..."
          value={body}
          onChange={(e) => setBody(e.target.value)}
        ></textarea>
        <p className="text-sm text-gray-600 mt-1">
          Word Count: <span className="font-bold">{wordCount}</span>
        </p>
      </div>

      {/* Preview Section */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Live Preview</h2>
        <div className="p-4 bg-white border border-gray-300 rounded">
          <h3 className="text-lg font-bold">{title || "Title will appear here"}</h3>
          <p className="mt-2 text-gray-700">{body || "Content will appear here"}</p>
        </div>
      </div>
    </div>
  );
};

export default BlogPostEditor;
