
import React, { useEffect, useRef } from "react";
import {
  FaCalendarAlt,
  FaClock,
  FaDesktop,
  FaHourglassHalf,
  FaArrowRight,
  FaRegCreditCard,
} from "react-icons/fa";
import "../css/WorkshopDetails.css";

const workshopInfo = [
  {
    icon: <FaCalendarAlt />,
    label: "WORKSHOP DATE",
    value: <>14 & 15<br />November 2026</>,
  },
  {
    icon: <FaClock />,
    label: "TIME",
    value: <>10:00 AM–12:00 PM<br />(UAE Time)</>,
  },
  {
    icon: <FaDesktop />,
    label: "MODE",
    value: <>Live Online<br />(English)</>,
  },
  {
    icon: <FaHourglassHalf />,
    label: "DURATION",
    value: <>4 Hours</>,
  },
];

const WorkshopDetails = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const elements =
      sectionRef.current?.querySelectorAll(".workshop-reveal");

    if (!elements?.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("workshop-visible");
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
      className="workshop-details-section"
      id="details"
      ref={sectionRef}
    >
      <div className="workshop-details-container">

        <div className="workshop-section-heading workshop-reveal">
          <div className="workshop-eyebrow">
            <span></span>
            PLAN YOUR LEARNING EXPERIENCE
          </div>

          <h2>
            Workshop <span>Details</span>
          </h2>

          <p>
            Everything you need to know before joining the workshop.
          </p>
        </div>

        <div className="workshop-layout">

          <div className="workshop-info-panel workshop-reveal">
            <div className="workshop-panel-heading">
              <div className="workshop-panel-icon">
                <FaRegCreditCard />
              </div>

              <div>
                <h3>WORKSHOP DETAILS</h3>
                <span>YOUR WORKSHOP AT A GLANCE</span>
              </div>
            </div>

            <div className="workshop-info-grid">
              {workshopInfo.map((item, index) => (
                <div className="workshop-info-item" key={item.label}>
                  <div className="workshop-info-icon">
                    {item.icon}
                  </div>

                  <div className="workshop-info-text">
                    <span>{item.label}</span>
                    <h4>{item.value}</h4>
                  </div>
                </div>
              ))}
            </div>

            <div className="workshop-panel-footer">
              <span className="workshop-live-dot"></span>
              LIVE ONLINE WORKSHOP
            </div>
          </div>

          <div className="workshop-fee-panel workshop-reveal">
            <div className="fee-panel-glow"></div>

            <span className="fee-label">WORKSHOP FEE</span>

            <div className="fee-amount">
              <span className="fee-currency">AED</span>
              <strong>299</strong>
            </div>

            <div className="fee-divider"></div>

            <p>Join the Python & AI workshop</p>

            <a href="#registration" className="fee-register-button">
              Register Now <FaArrowRight />
            </a>

            <span className="fee-bottom-note">
              2-DAY LIVE ONLINE WORKSHOP
            </span>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WorkshopDetails;
