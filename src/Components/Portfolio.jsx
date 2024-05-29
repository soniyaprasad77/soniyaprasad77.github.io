/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "HungryHub - Food Ordering Website",
    description:
      "A React-based food ordering website app featuring a menu display, cart management UI build using Reactjs, TailwiindCss and live Swiggy APIs",
    url: "https://github.com/soniyaprasad77/HungryHub",
  },
  {
    title: "WatchNext - Video Sharing App",
    description:
      "Explore WatchNext, a Backend project for a seamless video-sharing experience. Enjoy features like secure user authentication, and video management.",
    url: "https://github.com/soniyaprasad77/watchnext",
  },
  {
    title: "ThoughtTrail - Blogging App",
    description: "It is blogging website built using Reactjs, TailwindCSS, and Appwrite (BaaS).",
    url: "https://github.com/soniyaprasad77/thoughttrail",
  },
  {
    title: "URL Shortener",
    description:
      "Introducing the ultimate URL Shortener app that makes your links extremely small and super convenient.",
    url: "https://github.com/soniyaprasad77/urlshortener",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
