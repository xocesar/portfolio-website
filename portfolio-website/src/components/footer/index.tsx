
import React from "react";
import SocialLinks from "./social-links";

function Footer() {
  return (
    <div className="flex flex-row items-center justify-evenly gap-10 min-h-[200px] bg-[#D5BBA8]">
      <div>
            <SocialLinks />
      </div>

      <div>
            {/* If one day to be link to different pages, it should be put here */}

      </div>
        
    </div>
  )
}

export default Footer;
