import React from "react";
import blogImage from "../images/blog-image.jpg";
import blogBackground from "../images/blog-background.jpg";
const blogImageAltText = "person typing on a laptop";

const blogList = [
  {
    title: "React: Flow & Structure",
    description:
      "In my article I break down React's core ideas, like components and the Virtual DOM, in a simple way. Whether you're new to React or already familiar, I compare tools like Create-React-App and Vite, making it an easy read for everyone.",
    url: "https://soniyaprasad.hashnode.dev/react-flow-structure",
  },

  {
    title: "ReactJS Foundation : Hooks, Props and Reusability Explained",
    description:
      "In my article, I simplify the magic of React, explaining hooks and props for beginners. Discover how to craft flexible and reusable components, empowering you to build impressive web applications.",
    url: "https://soniyaprasad.hashnode.dev/reactjs-foundation",
  },
  {
    title: "Access vs Refresh Tokens in Backend",
    description:
      "In my article, I demystify the crucial roles of access and refresh tokens in web development's authentication and authorization. Discover how these tokens ensure secure communication between client applications and servers, empowering developers to safeguard user resources effectively.",
    url: "https://soniyaprasad.hashnode.dev/access-vs-refresh-tokens",
  },
  {
    title: "ArrayList in Java",
    description:
      "In my blog post, I unravel the dynamic nature of ArrayLists, highlighting their key features, constructors, and methods with practical examples. Explore the flexibility of ArrayLists in Java and their role in efficient data manipulation.",
    url: "https://soniyaprasad.hashnode.dev/arraylist-in-java",
  },
];

const Blog = () => {
  return (
    <section className="padding" id="blog">
      <img className="background" src={blogImage} />
      <h2 style={{ textAlign: "center" }}>Blog</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}></div>
        <div className="container">
          {blogList.map((blogPost) => (
            <div className="box" key={blogPost.title} >
              <a href={blogPost.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{blogPost.title}</h3>
              </a>
              <p className="small">{blogPost.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
