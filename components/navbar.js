class CustomNavbar extends HTMLElement {
  connectedCallback() {
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        nav {
          background: linear-gradient(135deg, #FF7B25 0%, #FFA364 100%);
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          box-shadow: 0 4px 6px rgba(0,0,0,0.1);
          position: sticky;
          top: 0;
          z-index: 50;
        }
        .logo-container {
          display: flex;
          align-items: center;
          gap: 0.5rem;
        }
        .logo {
          color: white;
          font-weight: bold;
          font-size: 1.5rem;
          letter-spacing: -0.5px;
        }
        .logo-icon {
          width: 32px;
          height: 32px;
        }
        ul {
          display: flex;
          gap: 1.5rem;
          list-style: none;
          margin: 0;
          padding: 0;
        }
        a {
          color: white;
          text-decoration: none;
          font-weight: 500;
          padding: 0.5rem 0;
          position: relative;
          transition: all 0.3s ease;
        }
        a:hover {
          opacity: 0.9;
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: white;
          transition: width 0.3s ease;
        }
        a:hover::after {
          width: 100%;
        }
        .mobile-menu-btn {
          display: none;
          background: none;
          border: none;
          color: white;
          cursor: pointer;
        }
        @media (max-width: 768px) {
          ul {
            display: none;
            position: absolute;
            top: 70px;
            left: 0;
            right: 0;
            background: linear-gradient(135deg, #FF7B25 0%, #FFA364 100%);
            flex-direction: column;
            padding: 1rem;
            gap: 1rem;
          }
          ul.show {
            display: flex;
          }
          .mobile-menu-btn {
            display: block;
          }
        }
      </style>
      <nav>
        <div class="logo-container">
          <i data-feather="square" class="logo-icon"></i>
          <span class="logo">Electoral Commission of Square Country</span>
        </div>
        <button class="mobile-menu-btn" id="menuBtn">
          <i data-feather="menu"></i>
        </button>
        <ul id="navMenu">
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About</a></li>
          <li><a href="voting.html">How to Vote</a></li>
          <li><a href="results.html">Results</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
      </nav>
    `;

    // Mobile menu toggle
    const menuBtn = this.shadowRoot.getElementById('menuBtn');
    const navMenu = this.shadowRoot.getElementById('navMenu');

    menuBtn.addEventListener('click', () => {
      navMenu.classList.toggle('show');
      const icon = menuBtn.querySelector('i');
      icon.setAttribute('data-feather', navMenu.classList.contains('show') ? 'x' : 'menu');
      feather.replace();
    });

    // Initialize icons
    feather.replace();
  }
}

customElements.define('custom-navbar', CustomNavbar);
