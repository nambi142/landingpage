
import {
  FiArrowUpRight,
  FiZap,
  FiCode,
  FiTerminal,
  FiCpu,
  FiCheck,
} from "react-icons/fi";

import {
  FaPython,
  FaBrain,
  FaLaptopCode,
  FaBriefcase,
} from "react-icons/fa";

import "./Hero.css";

const highlights = [
  { icon: <FaPython />, label: "Python", detail: "Fundamentals" },
  { icon: <FaLaptopCode />, label: "Practical", detail: "Projects" },
  { icon: <FaBrain />, label: "AI", detail: "Assisted Learning" },
  { icon: <FaBriefcase />, label: "Career", detail: "Focused Skills" },
];

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        {/* LEFT CONTENT */}
        <div className="hero-content">

          <div className="hero-label">
            <FiZap />
            <span>PYTHON PROGRAMMING WITH AI</span>
          </div>

          <h1>
            Think in Code.
            <br />
            Create with
            <br />
            <span>Python & AI.</span>
          </h1>

          <p className="hero-description">
            Turn your curiosity into real programming skills.
            Learn Python step by step, explore AI-assisted
            development, and bring your ideas to life through
            practical coding.
          </p>

          <div className="hero-actions">
            <a href="#registration" className="primary-button">
              Start Your Learning Journey
              <FiArrowUpRight />
            </a>

            <a href="#learning" className="secondary-link">
              Explore the curriculum
              <FiArrowUpRight />
            </a>
          </div>

          <div className="hero-highlights">
            {highlights.map((item, index) => (
              <div className="highlight-item" key={index}>
                <span className="highlight-icon">{item.icon}</span>
                <span className="highlight-text">
                  {item.label}
                  <strong>{item.detail}</strong>
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT VISUAL */}
        <div className="hero-visual">

          <div className="visual-heading">
            <span className="visual-index">01 / THE EXPERIENCE</span>
            <span className="visual-status">
              <span className="status-dot"></span>
              CODE. CREATE. EXPLORE.
            </span>
          </div>

          <div className="code-window">

            <div className="code-window-header">
              <div className="window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-file">
                <FaPython />
                <span>first_program.py</span>
              </div>

              <FiTerminal className="terminal-icon" />
            </div>

            <div className="code-editor">
              <div className="code-line">
                <span className="line-number">01</span>
                <code>
                  <span className="code-purple">def</span>{" "}
                  <span className="code-blue">create_future</span>():
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">02</span>
                <code>
                  &nbsp;&nbsp;<span className="code-purple">print</span>(
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">03</span>
                <code>
                  &nbsp;&nbsp;&nbsp;&nbsp;
                  <span className="code-green">
                    "Ideas into reality."
                  </span>
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">04</span>
                <code>&nbsp;&nbsp;)</code>
              </div>

              <div className="code-line">
                <span className="line-number">05</span>
                <code></code>
              </div>

              <div className="code-line">
                <span className="line-number">06</span>
                <code>
                  <span className="code-yellow">create_future</span>()
                </code>
              </div>
            </div>

            <div className="code-output">
              <div className="output-heading">
                <FiTerminal />
                <span>OUTPUT</span>
                <span className="output-success">
                  <FiCheck /> SUCCESS
                </span>
              </div>

              <p>Ideas into reality.</p>
            </div>
          </div>

          <div className="visual-bottom">
            <div className="visual-bottom-icon">
              <FiCpu />
            </div>

            <div>
              <span className="visual-bottom-label">
                THE POWER OF PYTHON + AI
              </span>
              <p>Learn the logic. Build the future.</p>
            </div>

            <span className="visual-bottom-number">PY / AI</span>
          </div>

        </div>
      </div>

      <div className="hero-bottom-line">
        <span>LEARN BY DOING</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Hero;
