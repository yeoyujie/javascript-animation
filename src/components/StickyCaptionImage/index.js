import { useState, useEffect } from "react";
import { baseDefaultStyle } from "../../utils/baseDefaultStyle";

const StickyCaptionImage = ({ id, imageSrc, caption, textBoxOptions }) => {
  const [isSticky, setIsSticky] = useState(true);

  const defaultStyle = {
    ...baseDefaultStyle,
    position: isSticky ? "sticky" : "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    padding: "10px",
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
    <div style={{ position: "relative" }}>
      <img
        id={id}
        src={imageSrc}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ ...defaultStyle, ...textBoxOptions }}>{caption}</div>
    </div>
  );
};

export default StickyCaptionImage;
