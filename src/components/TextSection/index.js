import { baseDefaultStyle } from "../../utils/baseDefaultStyle";

const TextSection = ({ text, backgroundImage }) => {
  const containerStyle = {
    ...baseDefaultStyle,
    padding: "10vh 1rem",
    minHeight: "50vh",
    backgroundColor: "black",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
    backgroundSize: "cover",
    textAlign: "center",
  };

  const textStyle = {
    fontFamily: "sans-serif",
    fontSize: "2rem",
    color: "#333",
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default TextSection;
