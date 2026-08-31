class CustomFooter extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        footer {
          background: #1a202c;
          color: white;
          padding: 3rem 2rem;
          margin-top: auto;
        }

        .footer-content {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
        }

        .footer-section h3 {
          color: #FFA364;
          font-size: 1.2rem;
          margin-bottom: 1.5rem;
          font-weight: 600;
        }

        .footer-section ul {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-section li {
          margin-bottom: 0.75rem;
        }

        .footer-section a {
          color: #e2e8f0;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-section a:hover {
          color: #FF7B25;
        }

        .contact-info {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }

        .social-links {
          display: flex;
          gap: 1rem;
          margin-top: 1rem;
        }

        .social-links a {
          color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background-color: rgba(255, 255, 255, 0.1);
          transition: all 0.2s;
        }

        .social-links a:hover {
          background-color: #FF7B25;
          transform: translateY(-2px);
        }

        /* Copyright Bar */
        .copyright {
          text-align: center;
          margin-top: 3rem;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          color: #a0aec0;
          font-size: 0.875rem;
        }

        /* Disclaimer Bar */
        .disclaimer {
          max-width: 1200px;
          margin: 1.5rem auto 0;
          padding-top: 1.5rem;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
        }

        .disclaimer-box {
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 1rem 1.25rem;
          color: #a0aec0;
          font-size: 0.8rem;
          line-height: 1.6;
          text-align: center;
        }

        .disclaimer-box strong {
          color: #FFA364;
          font-weight: 600;
        }

        @media (max-width: 768px) {
          .footer-content {
            grid-template-columns: 1fr;
          }

          .disclaimer-box {
            font-size: 0.78rem;
            padding: 1rem;
          }
        }
      </style>

      <footer>

        <div class="footer-content">

          <div class="footer-section">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="about.html">About Us</a></li>
              <li><a href="voting.html">Voting Process</a></li>
              <li><a href="results.html">Election Results</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Resources</h3>
            <ul>
              <li><a href="#">Voter Registration</a></li>
              <li><a href="#">Election Calendar</a></li>
              <li><a href="#">Candidate Information</a></li>
              <li><a href="#">FAQs</a></li>
            </ul>
          </div>

          <div class="footer-section">
            <h3>Contact Us</h3>

            <div class="contact-info">

              <div class="contact-item">
                <i data-feather="map-pin"></i>
                <span>123 Democracy Square, Capital City</span>
              </div>

              <div class="contact-item">
                <i data-feather="phone"></i>
                <span>(123) 456-7890</span>
              </div>

              <div class="contact-item">
                <i data-feather="mail"></i>
                <span>info@squarevote.gov</span>
              </div>

            </div>

            <div class="social-links">
              <a href="#"><i data-feather="twitter"></i></a>
              <a href="#"><i data-feather="facebook"></i></a>
              <a href="#"><i data-feather="instagram"></i></a>
              <a href="#"><i data-feather="youtube"></i></a>
            </div>

          </div>

        </div>

        <!-- Copyright Bar -->
        <div class="copyright">
          <p>&copy; ${new Date().getFullYear()} Square Country Electoral Commission. All rights reserved.</p>
        </div>

        <!-- Disclaimer Bar -->
        <div class="disclaimer">
          <div class="disclaimer-box">
            <strong>Disclaimer:</strong>
            This website is a fictional representation of the Government of Square Country.
            Square Country is a fictional country and this website, its Ministries, agencies,
            legislation, services, and other content are created for fictional and entertainment
            purposes only. It does not represent a real government, country, institution, or organisation.
          </div>
        </div>

      </footer>
    `;
  }
}

customElements.define('custom-footer', CustomFooter);
