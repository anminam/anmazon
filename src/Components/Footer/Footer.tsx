import React from "react";
import "./Footer.scss";

const Footer = () => {
  /**
   * 클릭
   */
  const handleToTopButtonClick = () => {
    window.scrollTo({ behavior: "smooth", top: 0 });
  };

  return (
    <div className="footer">
      <div className="footer__back-to-top">
        <button onClick={handleToTopButtonClick}>Back to top</button>
      </div>
      <div className="footer__buttom">
        <div className="footer__social-copyright">
          <p>
            @ 2020{" "}
            <strong>
              <a
                href="https://anminam.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Anminam In The House
              </a>
            </strong>{" "}
            all right resurved. Designed by <strong>Anminam</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
