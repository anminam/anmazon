import React from "react";
import GitHubIcon from "@material-ui/icons/GitHub";
import FacebookIcon from "@material-ui/icons/Facebook";

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
        <ul className="footer__links">
          {/* 아이템 */}
          <li className="footer__links__item">
            <a
              href="https://github.com/anminam/anmazon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <GitHubIcon />
            </a>
          </li>
          {/* 아이템 */}
          <li className="footer__links__item">
            <a
              href="https://www.facebook.com/minam.an.37"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
          </li>
        </ul>
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
