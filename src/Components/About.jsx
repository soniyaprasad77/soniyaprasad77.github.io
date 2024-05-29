import React from "react";
import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "I am a Problem Solver and a Passionate Final-Year B.Tech student in CSE with a keen interest in full-stack web dev. On the front end, I have a deep understanding of JavaScript, including the latest ES6+ features, Typescript and I am proficient in React. Moving to the back end, I am skilled in server-side technologies like Node.js, Express.js, and database systems like MongoDB or MySQL.";

const skillsList = [
  "HTML CSS JavaScript",
  "ReactJs Tailwind",
  "Node Express EJS",
  "NextJs GraphQL",
  "MongoDB PostgreSQL",
  "Version Control(Git)",
  "CI/CD with Docker",
  "DSA in Java"
];

const detailOrQuote =
  "I am passionate about solving problems in new creative ways.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "2rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: "2",
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
