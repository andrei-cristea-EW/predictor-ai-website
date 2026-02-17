function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <span className="footer__copy">
          &copy; 2026 The Predictor. All rights reserved.
        </span>
        <div className="footer__socials">
          <a href="#" aria-label="Twitter / X">
            <i className="fa-brands fa-x-twitter"></i>
          </a>
          <a href="#" aria-label="LinkedIn">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="#" aria-label="GitHub">
            <i className="fa-brands fa-github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
