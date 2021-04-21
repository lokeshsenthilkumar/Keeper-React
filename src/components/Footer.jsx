import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>Copyright &#169; {year} <br></br> Made with 💙 by Lokesh</p>
    </footer>
  );
}

export default Footer;
