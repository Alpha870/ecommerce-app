import React from "react";
import './BannerTitle.css'

const BannerTitle = ({ title, description, timeAnimationIntro, mouseOver }) => {
  return (
    <div
      className="div-title"
      style={{
        animation: timeAnimationIntro ? "watch 150ms 2.4s 1 linear " : "",
      }}
    >
      <h1 style={{ opacity: mouseOver || timeAnimationIntro ? 0 : 1 }}>
        {title}
      </h1>
      <p style={{ opacity: mouseOver || timeAnimationIntro ? 0 : 1 }}>
        {description}
      </p>
    </div>
  );
};

export default BannerTitle;
