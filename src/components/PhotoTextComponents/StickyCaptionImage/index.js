import { useState, useEffect } from "react";
import { baseDefaultStyle } from "../../../utils/baseDefaultStyle";

const StickyCaptionImage = ({ id, imageSrc, caption, textBoxOptions }) => {
  const [isSticky, setIsSticky] = useState(true);

  // This code defines a textBoxStyle object that contains a set of default styles for an element.
  // The defaultStyle object is created by merging the properties of the baseDefaultStyle object,
  // the custom styles passed in through textBoxOptions, and some additional default styles.
  // The order of precedence is such that the custom styles passed in through textBoxOptions will
  // take priority over the default styles define
  const textBoxStyle = {
    ...baseDefaultStyle,
    position: isSticky ? "sticky" : "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "30px",
    fontSize: "1rem",
    ...textBoxOptions
  };

  useEffect(() => {
    const handleScroll = () => {
      const imageBottom = document
        .getElementById(id)
        .getBoundingClientRect().bottom;
      if (imageBottom <= window.innerHeight && isSticky) {
        setIsSticky(false);
      } else if (imageBottom > window.innerHeight && !isSticky) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [id, isSticky]);

  return (
    <div style={{ position: "relative", background: "black" }}>
      <img
        id={id}
        src={imageSrc}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={textBoxStyle}>{caption}</div>
    </div>
  );
};

export default StickyCaptionImage;
