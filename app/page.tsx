"use client";

import { useState } from "react";

const features = [
  {
    number: "01",
    title: "Understand",
    text: "See your financial picture clearly, without the noise.",
  },
  {
    number: "02",
    title: "Act",
    text: "Turn financial information into confident decisions.",
  },
  {
    number: "03",
    title: "Grow",
    text: "Build better habits and move closer to your financial goals.",
  },
];

const stats = [
  { value: "₹8.42L", label: "Total balance" },
  { value: "₹42.3K", label: "Monthly spending" },
  { value: "₹5.20L", label: "Investments" },
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main>
      {/* NAVBAR */}
      <nav className="navbar">
        <a href="#" className="logo">
          <span className="logo-mark">F</span>
          <span>FERMOR</span>
        </a>

        <div className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
          <a href="#why">Why Fermor</a>
          <a href="#how">How it works</a>
          <a href="#preview">Preview</a>
          <a href="#about">About</a>
        </div>

        <div className="nav-actions">
          <button className="login-btn">Log in</button>
          <button className="nav-cta">Get started <span>↗</span></button>
        </div>

        <button
          className="menu-button"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? "×" : "☰"}
        </button>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-glow glow-one" />
        <div className="hero-glow glow-two" />

        <div className="hero-content">
          <div className="eyebrow">
            <span className="eyebrow-dot" />
            A clearer way to manage your money
          </div>

          <h1>
            Make sense of your money.
            <span> Make better moves.</span>
          </h1>

          <p className="hero-text">
            Fermor brings your financial world into focus, helping you
            understand where you stand, take smarter action, and grow with
            confidence.
          </p>

          <div className="hero-actions">
            <button className="primary-btn">
              Get started <span>↗</span>
            </button>
            <a href="#how" className="secondary-btn">
              See how it works <span>↓</span>
            </a>
          </div>

          <div className="hero-note">
            <span>✦</span>
            Built around clarity, not complexity.
          </div>
        </div>

        {/* HERO VISUAL */}
        <div className="hero-visual">
          <div className="dashboard-card">
            <div className="dashboard-top">
              <div>
                <p className="mini-label">Your overview</p>
                <h3>Good morning, Alex</h3>
              </div>
              <div className="avatar">A</div>
            </div>

            <div className="balance-section">
              <p>Total balance</p>
              <div className="balance-row">
                <strong>₹8,42,500</strong>
                <span className="positive">+8.4%</span>
              </div>
            </div>

            <div className="chart">
              <div className="chart-labels">
                <span>₹9L</span>
                <span>₹6L</span>
                <span>₹3L</span>
                <span>₹0</span>
              </div>

              <svg
                viewBox="0 0 500 180"
                preserveAspectRatio="none"
                className="chart-svg"
              >
                <defs>
                  <linearGradient id="chartFill" x1="0" x2="0" y1="0" y2="1">
                    <stop offset="0%" stopColor="#173d2c" stopOpacity="0.18" />
                    <stop offset="100%" stopColor="#173d2c" stopOpacity="0" />
                  </linearGradient>
                </defs>

                <path
                  d="M0 145 C35 132, 52 142, 78 115 S125 130, 150 105 S198 110, 220 82 S260 94, 290 66 S335 83, 360 53 S408 60, 435 34 S470 45, 500 15 L500 180 L0 180 Z"
                  fill="url(#chartFill)"
                />

                <path
                  d="M0 145 C35 132, 52 142, 78 115 S125 130, 150 105 S198 110, 220 82 S260 94, 290 66 S335 83, 360 53 S408 60, 435 34 S470 45, 500 15"
                  fill="none"
                  stroke="#173d2c"
                  strokeWidth="3"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            <div className="dashboard-stats">
              {stats.map((stat) => (
                <div className="dashboard-stat" key={stat.label}>
                  <span>{stat.label}</span>
                  <strong>{stat.value}</strong>
                </div>
              ))}
            </div>
          </div>

          <div className="floating-card spending-card">
            <div className="floating-icon">↗</div>
            <div>
              <span>Spending this month</span>
              <strong>₹42,350</strong>
            </div>
          </div>

          <div className="floating-card goal-card">
            <div className="goal-ring">
              <span>78%</span>
            </div>
            <div>
              <span>Goal progress</span>
              <strong>On track</strong>
            </div>
          </div>
        </div>
      </section>

      {/* VALUE STRIP */}
      <section className="value-strip">
        <div>
          <span className="strip-number">01</span>
          <p>Less confusion</p>
        </div>
        <div>
          <span className="strip-number">02</span>
          <p>More clarity</p>
        </div>
        <div>
          <span className="strip-number">03</span>
          <p>Better decisions</p>
        </div>
        <div>
          <span className="strip-number">04</span>
          <p>Long-term growth</p>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="problem-section" id="why">
        <div className="section-label">THE PROBLEM</div>

        <div className="problem-grid">
          <h2>
            Your finances shouldn&apos;t
            <span> feel complicated.</span>
          </h2>

          <div className="problem-copy">
            <p>
              Money decisions get harder when everything is scattered across
              numbers, accounts, goals and endless information.
            </p>
            <p>
              Fermor is designed around one simple idea: give people the
              clarity they need to make their next move with confidence.
            </p>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="how-section" id="how">
        <div className="section-heading">
          <div>
            <div className="section-label">HOW FERMOR WORKS</div>
            <h2>
              From information
              <span> to action.</span>
            </h2>
          </div>

          <p>
            A simpler approach to understanding where you are and where you
            want to go.
          </p>
        </div>

        <div className="feature-grid">
          {features.map((feature) => (
            <article className="feature-card" key={feature.number}>
              <span className="feature-number">{feature.number}</span>

              <div className="feature-icon">
                {feature.number === "01"
                  ? "◌"
                  : feature.number === "02"
                    ? "↗"
                    : "✦"}
              </div>

              <h3>{feature.title}</h3>
              <p>{feature.text}</p>

              <div className="feature-arrow">↗</div>
            </article>
          ))}
        </div>
      </section>

      {/* PRODUCT PREVIEW */}
      <section className="preview-section" id="preview">
        <div className="preview-copy">
          <div className="section-label">A CLEARER VIEW</div>

          <h2>
            See the bigger
            <span> financial picture.</span>
          </h2>

          <p>
            Good financial decisions start with knowing what is happening.
            Fermor turns scattered information into a view that feels
            understandable and useful.
          </p>

          <div className="check-list">
            <div>
              <span>✓</span>
              Understand your financial position
            </div>
            <div>
              <span>✓</span>
              Spot patterns and opportunities
            </div>
            <div>
              <span>✓</span>
              Stay focused on what matters
            </div>
          </div>

          <button className="outline-btn">
            Explore the experience <span>↗</span>
          </button>
        </div>

        <div className="preview-window">
          <div className="window-header">
            <div className="window-dots">
              <span />
              <span />
              <span />
            </div>
            <span>fermOR / overview</span>
            <span className="window-menu">•••</span>
          </div>

          <div className="window-body">
            <div className="window-sidebar">
              <div className="sidebar-logo">F</div>
              <span className="sidebar-active">◈</span>
              <span>◫</span>
              <span>◌</span>
              <span>◎</span>
            </div>

            <div className="window-content">
              <div className="window-content-top">
                <div>
                  <span>Overview</span>
                  <h3>Your financial snapshot</h3>
                </div>
                <button>Last 30 days⌄</button>
              </div>

              <div className="mini-grid">
                <div className="mini-box large">
                  <span>Net worth</span>
                  <strong>₹12,84,200</strong>
                  <small>↑ 12.8% this year</small>

                  <div className="mini-chart">
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                    <div />
                  </div>
                </div>

                <div className="mini-box">
                  <span>Monthly income</span>
                  <strong>₹1,24,000</strong>
                  <small>↑ 4.2%</small>
                </div>

                <div className="mini-box">
                  <span>Savings rate</span>
                  <strong>32.4%</strong>
                  <small>↑ 6.1%</small>
                </div>
              </div>

              <div className="activity-box">
                <div className="activity-title">
                  <span>Recent activity</span>
                  <a href="#">View all →</a>
                </div>

                <div className="activity-row">
                  <div className="activity-avatar">H</div>
                  <div>
                    <strong>Home expenses</strong>
                    <span>Today, 10:42 AM</span>
                  </div>
                  <b>− ₹8,240</b>
                </div>

                <div className="activity-row">
                  <div className="activity-avatar investment">↗</div>
                  <div>
                    <strong>Investment added</strong>
                    <span>Yesterday, 4:20 PM</span>
                  </div>
                  <b className="green-text">+ ₹15,000</b>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WHY FERMOR */}
      <section className="why-section" id="about">
        <div className="why-heading">
          <div className="section-label">WHY FERMOR</div>
          <h2>
            Finance, without
            <span> the friction.</span>
          </h2>
        </div>

        <div className="why-grid">
          <div className="why-card">
            <span>01</span>
            <h3>Simple by design</h3>
            <p>
              Remove the unnecessary complexity and focus on the information
              that actually helps.
            </p>
          </div>

          <div className="why-card featured">
            <span>02</span>
            <h3>Clarity first</h3>
            <p>
              A calmer, more understandable way to look at your financial
              world.
            </p>
          </div>

          <div className="why-card">
            <span>03</span>
            <h3>Built for progress</h3>
            <p>
              Turn financial awareness into meaningful action and long-term
              growth.
            </p>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="final-cta">
        <div className="cta-glow" />

        <div className="section-label light-label">YOUR NEXT MOVE</div>

        <h2>
          A clearer financial
          <span> future starts here.</span>
        </h2>

        <p>
          Understand where you are. Decide where you want to go. Start moving.
        </p>

        <button className="light-btn">
          Get started with Fermor <span>↗</span>
        </button>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div>
            <a href="#" className="logo footer-logo">
              <span className="logo-mark">F</span>
              <span>FERMOR</span>
            </a>
            <p>
              Making finance simpler,
              <br />
              clearer and easier to use.
            </p>
          </div>

          <div className="footer-links">
            <div>
              <span>Explore</span>
              <a href="#why">Why Fermor</a>
              <a href="#how">How it works</a>
              <a href="#preview">Preview</a>
            </div>

            <div>
              <span>Company</span>
              <a href="#about">About</a>
              <a href="#">Contact</a>
              <a href="#">Careers</a>
            </div>

            <div>
              <span>Legal</span>
              <a href="#">Privacy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© 2026 Fermor. All rights reserved.</span>
          <span>Designed with clarity.</span>
        </div>
      </footer>
    </main>
  );
}