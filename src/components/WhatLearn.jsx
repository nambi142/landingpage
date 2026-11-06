
import React, { useEffect, useRef } from "react";
import {
  FaPython,
  FaLayerGroup,
  FaMicrochip,
  FaLaptopCode,
  FaMagic,
  FaRocket,
  FaArrowRight,
} from "react-icons/fa";
import "../css/WhyLearn.css";

const learningTopics = [
  {
    number: "01",
    icon: <FaPython />,
    title: "Python Fundamentals",
  },
  {
    number: "02",
    icon: <FaLayerGroup />,
    title: "Variables, Data Types & Loops",
  },
  {
    number: "03",
    icon: <FaMicrochip />,
    title: "AI-Assisted Coding with ChatGPT & Gemini",
  },
  {
    number: "04",
    icon: <FaLaptopCode />,
    title: "Debugging & Problem Solving",
  },
  {
    number: "05",
    icon: <FaMagic />,
    title: "Real-World Prompting & Workflow Automation",
  },
  {
    number: "06",
    icon: <FaRocket />,
    title: "Build Your First Python Mini-Project",
  },
];

const WhatLearn = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".learn-reveal");

    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("learn-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className="why-learn-section"
      id="learning"
      ref={sectionRef}
    >
      <div className="learn-background-glow"></div>

      <div className="why-learn-container">
        <div className="learn-heading-area learn-reveal">
          <div className="learn-eyebrow">
            <span className="learn-eyebrow-line"></span>
            WORKSHOP CURRICULUM
          </div>

          <h2>
            What You'll Learn
            <span className="learn-heading-dot">.</span>
          </h2>

          <p>
            A practical, hands-on introduction to Python programming
            and AI-assisted development.
          </p>

          <div className="learn-heading-bottom">
            <span className="learn-heading-indicator"></span>
            <span>YOUR LEARNING JOURNEY STARTS HERE</span>
          </div>
        </div>

        <div className="learn-card-area">
          {learningTopics.map((topic, index) => (
            <article
              className="learn-card learn-reveal"
              key={topic.number}
              style={{ "--card-index": index }}
            >
              <div className="learn-card-top">
                <span className="learn-card-number">{topic.number}</span>
                <span className="learn-card-icon">{topic.icon}</span>
              </div>

              <div className="learn-card-content">
                <h3>{topic.title}</h3>
                <span className="learn-card-arrow">
                  <FaArrowRight />
                </span>
              </div>

              <div className="learn-card-bottom-line"></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatLearn;
