import React from 'react';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { postId } = useParams();
  
  // Simulate blog post data
  const blogPosts = {
    '1': { title: 'Getting Started with React Router', content: 'Learn how to set up routing in your React applications...' },
    '2': { title: 'Advanced Routing Techniques', content: 'Explore nested routes, protected routes, and dynamic routing...' },
    '3': { title: 'Authentication in React', content: 'Implement user authentication and protected routes...' }
  };

  const post = blogPosts[postId];

  if (!post) {
    return <div className="error">Blog post not found!</div>;
  }

  return (
    <div className="blog-post">
      <h2>{post.title}</h2>
      <p>Post ID: {postId}</p>
      <div className="post-content">
        <p>{post.content}</p>
      </div>
    </div>
  );
};

export default BlogPost;
