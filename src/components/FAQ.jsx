
import React, {
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";

import "../css/FAQ.css";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [openHeight, setOpenHeight] = useState(0);

  const sectionRef = useRef(null);
  const answerRefs = useRef([]);

  // =====================================
  // FAQ CONTENT
  // =====================================

  const faqData = [
    {
      question: "Who can attend these workshops?",
      answer:
        "These workshops are suitable for students, beginners, aspiring developers, and anyone interested in learning Python programming and Artificial Intelligence. It is a great opportunity to explore modern technology and develop useful technical skills.",
    },
    {
      question: "Do I need any prior programming or AI experience?",
      answer:
        "No advanced programming or AI experience is required. The workshop focuses on helping participants develop their Python programming foundation and understand how AI is used in modern software development.",
    },
    {
      question: "Will the workshops be conducted online or offline?",
      answer:
        "The workshop delivery mode and session arrangements will be communicated to registered participants. Please check the Workshop Details section for the latest information.",
    },
    {
      question: "Will participants receive a certificate?",
      answer:
        "Yes! All participants who successfully complete the workshop will receive a Certificate of Completion as recognition of their participation and learning experience.",
    },
    {
      question: "What is the workshop fee and how can I register?",
      answer:
        "You can find the workshop fee and registration information in the Workshop Details section. Click the Register Now button to proceed with the registration process.",
    },
  ];

  // =====================================
  // SCROLL REVEAL
  // Only for non-accordion elements
  // =====================================

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const elements = section.querySelectorAll(".faq-reveal");

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (reducedMotion || !("IntersectionObserver" in window)) {
      elements.forEach((element) => {
        element.classList.add("faq-visible");
      });

      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("faq-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    elements.forEach((element) => observer.observe(element));

    return () => observer.disconnect();
  }, []);

  // =====================================
  // ACCORDION HEIGHT CALCULATION
  // =====================================

  useLayoutEffect(() => {
    if (activeIndex === null) {
      setOpenHeight(0);
      return;
    }

    const answerElement = answerRefs.current[activeIndex];

    if (!answerElement) return;

    const updateHeight = () => {
      setOpenHeight(answerElement.scrollHeight);
    };

    // Measure after DOM has updated.
    updateHeight();

    // Recalculate if text wraps or content changes.
    if (typeof ResizeObserver !== "undefined") {
      const resizeObserver = new ResizeObserver(updateHeight);

      resizeObserver.observe(answerElement);

      return () => resizeObserver.disconnect();
    }

    window.addEventListener("resize", updateHeight);

    return () => {
      window.removeEventListener("resize", updateHeight);
    };
  }, [activeIndex]);

  // =====================================
  // TOGGLE FAQ
  // =====================================

  const toggleFAQ = (index) => {
    setActiveIndex((previousIndex) => {
      return previousIndex === index ? null : index;
    });
  };

  return (
    <section
      className="faq-section"
      id="faq"
      ref={sectionRef}
    >
      {/* BACKGROUND DECORATIONS */}

      <div className="faq-bg-grid"></div>

      <div className="faq-bg-glow faq-bg-glow-one"></div>

      <div className="faq-bg-glow faq-bg-glow-two"></div>

      <div className="faq-bg-ring faq-bg-ring-one"></div>

      <div className="faq-bg-ring faq-bg-ring-two"></div>

      {/* MAIN CONTAINER */}

      <div className="faq-container">

        {/* LEFT CONTENT */}

        <div className="faq-heading-area faq-reveal">

          <div className="faq-eyebrow">
            <span className="faq-eyebrow-line"></span>
            FREQUENTLY ASKED QUESTIONS
          </div>

          <h2 className="faq-main-heading">
            Frequently
            <br />
            Asked
            <br />
            <span>Questions.</span>
          </h2>

          <p className="faq-description">
            Everything you need to know about our Python
            Programming and AI workshop. Explore the answers
            and get ready to start your learning journey.
          </p>

          <div className="faq-heading-decoration">
            <span className="faq-decoration-dot"></span>

            <span className="faq-decoration-line"></span>

            <span className="faq-decoration-text">
              YOUR QUESTIONS, ANSWERED
            </span>
          </div>

          {/* HELP CARD */}

          <div className="faq-help-card">
            <div className="faq-help-icon">?</div>

            <div className="faq-help-content">
              <strong>Still have questions?</strong>
              <span>We're here to help you.</span>
            </div>

            <span className="faq-help-arrow">↗</span>
          </div>

        </div>

        {/* RIGHT ACCORDION */}

        <div className="faq-accordion-area">

          <div className="faq-top-label faq-reveal">

            <span>FIND YOUR ANSWERS</span>

            <span className="faq-question-count">
              05 QUESTIONS
            </span>

          </div>

          {/* FAQ LIST */}

          <div className="faq-list">

            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  className={`faq-card ${
                    isOpen ? "faq-card-active" : ""
                  }`}
                  key={index}
                >
                  {/* QUESTION */}

                  <button
                    type="button"
                    className="faq-question"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-answer-${index}`}
                    id={`faq-question-${index}`}
                  >
                    <span className="faq-question-number">
                      0{index + 1}
                    </span>

                    <span className="faq-question-text">
                      {faq.question}
                    </span>

                    <span
                      className={`faq-arrow ${
                        isOpen ? "faq-arrow-open" : ""
                      }`}
                      aria-hidden="true"
                    >
                      <span></span>
                      <span></span>
                    </span>
                  </button>

                  {/* ANSWER */}

                  <div
                    className={`faq-answer-wrapper ${
                      isOpen ? "faq-answer-open" : ""
                    }`}
                    id={`faq-answer-${index}`}
                    role="region"
                    aria-labelledby={`faq-question-${index}`}
                    aria-hidden={!isOpen}
                    inert={!isOpen}
                    style={{
                      height:
                        isOpen && activeIndex === index
                          ? `${openHeight}px`
                          : "0px",
                    }}
                  >
                    <div
                      className="faq-answer-inner"
                      ref={(element) => {
                        answerRefs.current[index] = element;
                      }}
                    >
                      <span className="faq-answer-line"></span>

                      <p className="faq-answer">
                        {faq.answer}
                      </p>
                    </div>
                  </div>

                </div>
              );
            })}

          </div>

          {/* BOTTOM CTA */}

          <div className="faq-bottom-cta faq-reveal">

            <div className="faq-cta-content">

              <span className="faq-cta-label">
                READY TO GET STARTED?
              </span>

              <h3>
                Your journey into Python & AI starts here.
              </h3>

            </div>

            <a
              href="#details"
              className="faq-cta-button"
            >
              Explore Workshop
              <span>↗</span>
            </a>

          </div>

        </div>

      </div>
    </section>
  );
};

export default FAQ;
