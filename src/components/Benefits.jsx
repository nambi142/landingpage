
import React, { useEffect, useRef } from "react";
import {
  FaPython,
  FaLaptopCode,
  FaBrain,
  FaBriefcase,
  FaCertificate,
  FaCheckCircle,
  FaArrowRight,
  FaAward,
} from "react-icons/fa";

import "../css/Benefits.css";

const Benefits = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll(".benefit-reveal");

    if (!elements) return;

    // Respect reduced-motion accessibility settings.
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      elements.forEach((element) => element.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  const benefits = [
    {
      icon: <FaPython />,
      title: "Practical Python Skills",
      description:
        "Develop practical Python programming skills and build a strong foundation.",
      number: "01",
    },
    {
      icon: <FaLaptopCode />,
      title: "Hands-on Experience",
      description:
        "Gain hands-on experience by developing a mini-project during the workshop.",
      number: "02",
    },
    {
      icon: <FaBrain />,
      title: "Explore AI Technology",
      description:
        "Learn how AI is used in modern software development and explore its possibilities.",
      number: "03",
    },
    {
      icon: <FaBriefcase />,
      title: "Career Opportunities",
      description:
        "Strengthen your foundation for entry-level IT and Python-related job opportunities.",
      number: "04",
    },
  ];

  return (
    <section
      className="benefits-section"
      id="benefits"
      ref={sectionRef}
    >
      <div className="benefits-background-glow"></div>
      <div className="benefits-grid-pattern"></div>

      <div className="benefits-container">

        {/* Main Benefits Content */}
        <div className="benefits-main">

          {/* Left Visual Area */}
          <div className="benefits-visual benefit-reveal">
            <div className="benefits-visual-orbit orbit-one"></div>
            <div className="benefits-visual-orbit orbit-two"></div>

            <div className="benefits-image-wrapper">
              <img
                src="/images/whychooseus.png"
                alt="Python programming and artificial intelligence technology"
                className="benefits-hero-image"
              />
            </div>

            <div className="benefits-floating-icon floating-python">
              <FaPython />
            </div>

            <div className="benefits-floating-icon floating-ai">
              <FaBrain />
              <span>AI</span>
            </div>

            <div className="benefits-visual-caption">
              <span className="caption-dot"></span>
              <span>LEARN. BUILD. INNOVATE.</span>
            </div>
          </div>

          {/* Right Content Area */}
          <div className="benefits-content">

            <div className="benefits-eyebrow benefit-reveal">
              <span className="eyebrow-line"></span>
              WHY JOIN THIS WORKSHOP?
            </div>

            <h2 className="benefits-heading benefit-reveal">
              Build Skills.
              <br />
              Prepare for
              <br />
              <span>Your Career.</span>
            </h2>

            <p className="benefits-intro benefit-reveal">
              Join our Python Programming & AI workshop to gain
              practical knowledge, hands-on experience, and
              industry-ready skills for the modern technology world.
            </p>

            {/* Original Workshop Benefits */}
            <div className="benefits-list">
              {benefits.map((benefit, index) => (
                <div
                  className="benefit-item benefit-reveal"
                  key={benefit.number}
                  style={{ "--delay": `${index * 120}ms` }}
                >
                  <div className="benefit-icon">
                    {benefit.icon}
                  </div>

                  <div className="benefit-text">
                    <h3>{benefit.title}</h3>
                    <p>{benefit.description}</p>
                  </div>

                  <span className="benefit-number">
                    {benefit.number}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Certificate Section */}
        <div className="benefits-certificate benefit-reveal">

          <div className="certificate-icon-wrapper">
            <div className="certificate-icon">
              <FaAward />
            </div>
            <span className="certificate-icon-glow"></span>
          </div>

          <div className="certificate-divider"></div>

          <div className="certificate-content">
            <span className="certificate-label">
              RECOGNIZE YOUR ACHIEVEMENT
            </span>

            <h3>
              Certificate of <span>Completion</span>
            </h3>

            <p>
              Awarded to all participants who successfully complete
              the workshop. Showcase your newly acquired skills and
              take another step towards your career.
            </p>
          </div>

          <div className="certificate-highlights">
            <div>
              <FaCheckCircle />
              <span>Official Certificate</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Skill Recognition</span>
            </div>

            <div>
              <FaCheckCircle />
              <span>Boost Your Resume</span>
            </div>
          </div>

          <a href="#details" className="certificate-button">
            Register Now
            <FaArrowRight />
          </a>

        </div>

        {/* Bottom Message */}
        <div className="benefits-bottom-text benefit-reveal">
          <span>Invest in Your Skills.</span>
          <strong>Build Your Future.</strong>
        </div>

      </div>
    </section>
  );
};

export default Benefits;
