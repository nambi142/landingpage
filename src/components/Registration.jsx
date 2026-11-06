
import React, { useState } from "react";
import "../css/Registration.css";

const WORKSHOP_FEE = 299;
const CURRENCY = "AED";

const Registration = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    whatsapp: "",
    country: "",
  });

  const [paymentMethod, setPaymentMethod] = useState("card");
  const [showCheckout, setShowCheckout] = useState(false);
  const [paymentStatus, setPaymentStatus] = useState("idle");
  const [transactionId, setTransactionId] = useState("");

  const [errors, setErrors] = useState({});

  // =====================================
  // FORM INPUT HANDLING
  // =====================================

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "whatsapp") {
      const digits = value.replace(/\D/g, "").slice(0, 10);

      setFormData((prev) => ({
        ...prev,
        whatsapp: digits,
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }

    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  // =====================================
  // VALIDATE REGISTRATION FORM
  // =====================================

  const validateForm = () => {
    const newErrors = {};

    const nameRegex = /^[A-Za-z][A-Za-z\s.'-]{1,59}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

    if (!nameRegex.test(formData.fullName.trim())) {
      newErrors.fullName =
        "Enter a valid full name (at least 2 characters).";
    }

    if (!emailRegex.test(formData.email.trim())) {
      newErrors.email =
        "Please enter a valid email address.";
    }

    if (!/^\d{10}$/.test(formData.whatsapp)) {
      newErrors.whatsapp =
        "WhatsApp number must contain exactly 10 digits.";
    }

    if (!formData.country.trim()) {
      newErrors.country = "Please enter your country.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  // =====================================
  // CONTINUE TO DEMO CHECKOUT
  // =====================================

  const handleContinue = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    setShowCheckout(true);
    setPaymentStatus("idle");

    setTimeout(() => {
      document
        .getElementById("registration-checkout")
        ?.scrollIntoView({
          behavior: "smooth",
          block: "center",
        });
    }, 100);
  };

  // =====================================
  // DEMO PAYMENT SIMULATION
  // =====================================

  const simulatePayment = (result) => {
    if (paymentStatus === "processing") return;

    setPaymentStatus("processing");

    setTimeout(() => {
      if (result === "success") {
        const reference =
          "DEMO" +
          Date.now().toString().slice(-10);

        setTransactionId(reference);
        setPaymentStatus("success");
      } else {
        setPaymentStatus("failed");
      }
    }, 1800);
  };

  // =====================================
  // RESET DEMO PAYMENT
  // =====================================

  const resetPayment = () => {
    setPaymentStatus("idle");
    setTransactionId("");
  };

  const startNewRegistration = () => {
    setFormData({
      fullName: "",
      email: "",
      whatsapp: "",
      country: "",
    });

    setErrors({});
    setShowCheckout(false);
    setPaymentStatus("idle");
    setTransactionId("");
    setPaymentMethod("card");
  };

  // =====================================
  // SUCCESS SCREEN
  // =====================================

  if (paymentStatus === "success") {
    return (
      <section
        className="registration-section"
        id="registration"
      >
        <div className="registration-background-grid"></div>
        <div className="registration-glow registration-glow-one"></div>

        <div className="registration-container">
          <div className="registration-result-card success-result">

            <div className="registration-result-icon">
              <span>✓</span>
            </div>

            <span className="registration-overline">
              DEMO TRANSACTION COMPLETED
            </span>

            <h2>Payment Successful!</h2>

            <p>
              This is a simulated payment. Your demo
              registration flow has been completed successfully.
            </p>

            <div className="registration-receipt">

              <div>
                <span>Participant</span>
                <strong>{formData.fullName}</strong>
              </div>

              <div>
                <span>Email Address</span>
                <strong>{formData.email}</strong>
              </div>

              <div>
                <span>Workshop</span>
                <strong>Python Programming & AI</strong>
              </div>

              <div>
                <span>Demo Amount</span>
                <strong>AED {WORKSHOP_FEE}</strong>
              </div>

              <div>
                <span>Payment Method</span>
                <strong>
                  {paymentMethod === "card"
                    ? "Card"
                    : paymentMethod === "upi"
                    ? "UPI"
                    : "Net Banking"}
                </strong>
              </div>

              <div>
                <span>Demo Reference ID</span>
                <strong>{transactionId}</strong>
              </div>

            </div>

            <div className="registration-demo-notice">
              <strong>Demo only:</strong> No real payment
              was processed and no actual seat was booked.
            </div>

            <button
              className="registration-primary-button"
              onClick={startNewRegistration}
            >
              Start New Registration
              <span>↗</span>
            </button>

          </div>
        </div>
      </section>
    );
  }

  // =====================================
  // MAIN REGISTRATION PAGE
  // =====================================

  return (
    <section
      className="registration-section"
      id="registration"
    >
      <div className="registration-background-grid"></div>

      <div className="registration-glow registration-glow-one"></div>
      <div className="registration-glow registration-glow-two"></div>

      <div className="registration-container">

        {/* SECTION HEADING */}

        <div className="registration-heading">

          <span className="registration-overline">
            <span></span>
            WORKSHOP REGISTRATION
          </span>

          <h2>
            Reserve Your
            <span> Learning Journey.</span>
          </h2>

          <p>
            Take your first step into Python Programming
            and Artificial Intelligence. Complete your
            details and explore our demo checkout.
          </p>

        </div>

        {/* MAIN LAYOUT */}

        <div className="registration-layout">

          {/* LEFT INFORMATION PANEL */}

          <div className="registration-info-panel">

            <div className="registration-info-top">
              <span className="registration-info-tag">
                PYTHON + AI WORKSHOP
              </span>

              <div className="registration-info-icon">
                <span>AI</span>
              </div>
            </div>

            <h3>
              Build Skills.
              <br />
              Create Your Future.
            </h3>

            <p>
              Start learning practical Python programming
              and discover the possibilities of Artificial
              Intelligence.
            </p>

            <div className="registration-benefits">

              <div>
                <span>✓</span>
                Practical Python learning
              </div>

              <div>
                <span>✓</span>
                Hands-on mini-project
              </div>

              <div>
                <span>✓</span>
                Introduction to AI
              </div>

              <div>
                <span>✓</span>
                Certificate of Completion
              </div>

            </div>

            <div className="registration-price-card">

              <span>WORKSHOP REGISTRATION FEE</span>

              <div className="registration-price">
                <strong>{WORKSHOP_FEE}</strong>
                <span>AED</span>
              </div>

              <p>One-time demo checkout amount</p>

            </div>

          </div>

          {/* RIGHT FORM PANEL */}

          <div className="registration-form-panel">

            <div className="registration-form-heading">
              <span>01 / YOUR INFORMATION</span>
              <h3>Register for the Workshop</h3>
              <p>Enter your details to continue.</p>
            </div>

            <form onSubmit={handleContinue} noValidate>

              {/* FULL NAME */}

              <div className="registration-field">

                <label htmlFor="registration-name">
                  FULL NAME <span>*</span>
                </label>

                <input
                  type="text"
                  id="registration-name"
                  name="fullName"
                  placeholder="Enter your full name"
                  value={formData.fullName}
                  onChange={handleChange}
                  autoComplete="name"
                  maxLength={60}
                  required
                />

                {errors.fullName && (
                  <small className="registration-error">
                    {errors.fullName}
                  </small>
                )}

              </div>

              {/* EMAIL */}

              <div className="registration-field">

                <label htmlFor="registration-email">
                  EMAIL ADDRESS <span>*</span>
                </label>

                <input
                  type="email"
                  id="registration-email"
                  name="email"
                  placeholder="example@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />

                {errors.email && (
                  <small className="registration-error">
                    {errors.email}
                  </small>
                )}

              </div>

              {/* WHATSAPP */}

              <div className="registration-field">

                <label htmlFor="registration-whatsapp">
                  WHATSAPP NUMBER <span>*</span>
                </label>

                <div className="registration-phone-input">

                  <span>+91</span>

                  <input
                    type="tel"
                    id="registration-whatsapp"
                    name="whatsapp"
                    placeholder="10 digit mobile number"
                    value={formData.whatsapp}
                    onChange={handleChange}
                    inputMode="numeric"
                    autoComplete="tel-national"
                    maxLength={10}
                    required
                  />

                  <span className="registration-phone-count">
                    {formData.whatsapp.length}/10
                  </span>

                </div>

                {errors.whatsapp && (
                  <small className="registration-error">
                    {errors.whatsapp}
                  </small>
                )}

              </div>

              {/* COUNTRY */}

              <div className="registration-field">

                <label htmlFor="registration-country">
                  COUNTRY <span>*</span>
                </label>

                <input
                  type="text"
                  id="registration-country"
                  name="country"
                  placeholder="Enter your country"
                  value={formData.country}
                  onChange={handleChange}
                  autoComplete="country-name"
                  maxLength={60}
                  required
                />

                {errors.country && (
                  <small className="registration-error">
                    {errors.country}
                  </small>
                )}

              </div>

              <div className="registration-form-divider"></div>

              {/* PAYMENT CHECKOUT */}

              {showCheckout ? (

                <div
                  className="registration-checkout"
                  id="registration-checkout"
                >

                  <div className="registration-checkout-heading">
                    <span>02 / PAYMENT DETAILS</span>
                    <h3>Complete Your Checkout</h3>
                    <p>Select a payment method to preview the demo.</p>
                  </div>

                  {/* PAYMENT METHODS */}

                  <div className="registration-payment-methods">

                    <button
                      type="button"
                      className={
                        paymentMethod === "card"
                          ? "payment-method active"
                          : "payment-method"
                      }
                      onClick={() => setPaymentMethod("card")}
                    >
                      <span>▣</span>
                      Card
                    </button>

                    <button
                      type="button"
                      className={
                        paymentMethod === "upi"
                          ? "payment-method active"
                          : "payment-method"
                      }
                      onClick={() => setPaymentMethod("upi")}
                    >
                      <span>⌁</span>
                      UPI
                    </button>

                    <button
                      type="button"
                      className={
                        paymentMethod === "bank"
                          ? "payment-method active"
                          : "payment-method"
                      }
                      onClick={() => setPaymentMethod("bank")}
                    >
                      <span>▤</span>
                      Banking
                    </button>

                  </div>

                  {/* METHOD PREVIEW */}

                  <div className="registration-method-preview">

                    {paymentMethod === "card" && (
                      <>
                        <div className="demo-card-visual">
                          <div className="demo-card-top">
                            <span>DEMO CARD</span>
                            <span>▰</span>
                          </div>

                          <div className="demo-card-number">
                            •••• •••• •••• ••••
                          </div>

                          <div className="demo-card-bottom">
                            <span>YOUR NAME</span>
                            <span>DEMO ONLY</span>
                          </div>
                        </div>

                        <p>
                          Card checkout preview. No real card
                          information is required.
                        </p>
                      </>
                    )}

                    {paymentMethod === "upi" && (
                      <div className="demo-method-card">
                        <div className="demo-method-icon">UPI</div>

                        <strong>UPI Payment Preview</strong>

                        <p>
                          A simulated UPI payment flow.
                          No actual UPI app or payment is opened.
                        </p>

                        <span>DEMO@UPI</span>
                      </div>
                    )}

                    {paymentMethod === "bank" && (
                      <div className="demo-method-card">
                        <div className="demo-method-icon">₹</div>

                        <strong>Net Banking Preview</strong>

                        <p>
                          Simulated banking checkout.
                          No bank login information is requested.
                        </p>

                        <span>DEMO BANKING</span>
                      </div>
                    )}

                  </div>

                  {/* ORDER SUMMARY */}

                  <div className="registration-order-summary">

                    <div>
                      <span>Workshop Registration</span>
                      <strong>₹{WORKSHOP_FEE}</strong>
                    </div>

                    <div>
                      <span>Processing Fee</span>
                      <strong>₹0</strong>
                    </div>

                    <div className="registration-total">
                      <span>Total Amount</span>
                      <strong>₹{WORKSHOP_FEE}</strong>
                    </div>

                  </div>

                  {/* PAYMENT BUTTONS */}

                  {paymentStatus === "processing" ? (

                    <div className="registration-processing">
                      <span className="registration-spinner"></span>
                      <strong>Processing demo payment...</strong>
                      <p>Please wait a moment.</p>
                    </div>

                  ) : paymentStatus === "failed" ? (

                    <div className="registration-failure">

                      <strong>Demo Payment Failed</strong>

                      <p>
                        This is a simulated failure.
                        You can try the demo again.
                      </p>

                      <button
                        type="button"
                        onClick={resetPayment}
                        className="registration-primary-button"
                      >
                        Try Again ↻
                      </button>

                    </div>

                  ) : (

                    <div className="registration-demo-actions">

                      <button
                        type="button"
                        className="registration-primary-button"
                        onClick={() => simulatePayment("success")}
                      >
                        Simulate Successful Payment
                        <span>↗</span>
                      </button>

                      <button
                        type="button"
                        className="registration-fail-button"
                        onClick={() => simulatePayment("failure")}
                      >
                        Simulate Failed Payment
                      </button>

                    </div>

                  )}

                  <button
                    type="button"
                    className="registration-back-button"
                    onClick={() => {
                      setShowCheckout(false);
                      resetPayment();
                    }}
                  >
                    ← Back to registration details
                  </button>

                </div>

              ) : (

                <button
                  type="submit"
                  className="registration-primary-button"
                >
                  Continue to Payment
                  <span>↗</span>
                </button>

              )}

            </form>

            <div className="registration-security-note">
              <span>✓</span>
              Frontend demonstration only. No real transactions.
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Registration;
