import React from "react";
import Solar from "../Image/solar_full.webp"
type BadgeProps = {
  message: string;
  color: string;
};

const Badge: React.FC<BadgeProps> = ({ message =  Solar, color}) => {
  return (
    <div>
      <div className="badge_design" style={{color: `${color}`}}>
        {message}
        <span></span>
      </div>
    </div>
  );
};

export default Badge;
