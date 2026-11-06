import {
  FiArrowUpRight,
  FiZap,
  FiCode,
  FiTerminal,
  FiCheck,
} from "react-icons/fi";

import {
  FaPython,
  FaBrain,
  FaLaptopCode,
  FaBriefcase,
  FaGraduationCap,
  FaMicrochip,
} from "react-icons/fa";

import "../css/Hero.css";

const highlights = [
  {
    icon: <FaGraduationCap />,
    label: "Beginner Friendly",
    detail: "No prior experience needed",
  },
  {
    icon: <FaLaptopCode />,
    label: "Hands-on Learning",
    detail: "Build real skills with practice",
  },
  {
    icon: <FaMicrochip />,
    label: "Learn with AI",
    detail: "Use ChatGPT & Gemini in coding",
  },
  {
    icon: <FaBriefcase />,
    label: "Career Ready",
    detail: "Build a strong foundation for IT job opportunities",
  },
];

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">
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

          <div className="workshop-info">
            <span className="workshop-line"></span>
            <div>
              <h3>2-Day Live Online Workshop for Beginners</h3>
              <p>14 & 15 November 2026</p>
            </div>
          </div>

          <p className="hero-description">
            Turn your curiosity into real programming skills. Learn Python step
            by step, explore AI-assisted development, and bring your ideas to
            life through practical coding.
          </p>

          <div className="hero-actions">
            <a href="#registration" className="primary-button">
              Register Now
              <FiArrowUpRight />
            </a>

            <a href="#learning" className="secondary-link">
              Explore the curriculum
              <FiArrowUpRight />
            </a>
          </div>

          <div className="hero-topic">
            <span>Python Programming with AI</span>
            <span className="topic-divider">|</span>
            <span>Generative AI & Prompt Engineering</span>
          </div>
        </div>

        <div className="hero-visual">
          <img
            src="/images/hero1.jpg"
            alt="Developer learning Python programming with AI"
            className="hero-main-image"
          />

          <div className="visual-overlay"></div>

          <div className="floating-ai-card">
            <FaBrain />
            <div>
              <span>POWERED BY</span>
              <strong>Artificial Intelligence</strong>
            </div>
          </div>

          <div className="floating-python-card">
            <FaPython />
            <div>
              <strong>Python</strong>
              <span>Learn. Build. Create.</span>
            </div>
          </div>

          <div className="code-window">
            <div className="code-window-header">
              <div className="window-controls">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="code-file">
                <FiCode />
                <span>build_with_ai.py</span>
              </div>

              <FiTerminal className="terminal-icon" />
            </div>

            <div className="code-editor">
              <div className="code-line">
                <span className="line-number">01</span>
                <code>
                  <span className="code-blue">import</span> python_ai
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">02</span>
                <code>
                  <span className="code-purple">def</span> build_with_ai():
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">03</span>
                <code className="code-indent">
                  learn(<span className="code-blue">"Python"</span>)
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">04</span>
                <code className="code-indent">
                  create(<span className="code-blue">"Projects"</span>)
                </code>
              </div>

              <div className="code-line">
                <span className="line-number">05</span>
                <code className="code-indent">
                  build(<span className="code-blue">"Future"</span>)
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

              <p>Learn Python. Build with AI.</p>
            </div>
          </div>

          <div className="visual-caption">
            <span className="caption-dot"></span>
            HANDS-ON AI POWERED LEARNING
          </div>
        </div>
      </div>

      <div className="hero-highlights">
        {highlights.map((item, index) => (
          <div className="highlight-item" key={index}>
            <span className="highlight-icon">{item.icon}</span>

            <div className="highlight-text">
              <h3>{item.label}</h3>
              <p>{item.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="hero-bottom-line">
        <span>LEARN BY DOING</span>
        <span>SCROLL TO EXPLORE ↓</span>
      </div>
    </section>
  );
}

export default Hero;
