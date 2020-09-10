import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
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
  );
};

export default Footer;
