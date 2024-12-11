import React from "react";
import PagesLinks from "./pages-links";
import SocialLinks from "./social-links";

function Footer() {
  return (
    <div className="flex flex-row items-center justify-evenly gap-10 min-h-[200px]">
      <div>
            <SocialLinks />
      </div>

      <div>
            <PagesLinks />
      </div>
        
    </div>
  )
}

export default Footer;
