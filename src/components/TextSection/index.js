import { baseDefaultStyle } from "../../utils/stylePresets";

const TextSection = ({ text, backgroundImage }) => {
  const containerStyle = {
    ...baseDefaultStyle,
    padding: "10vh 1rem",
    minHeight: "85vh",
    backgroundColor: "white",
    backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
    backgroundSize: "cover",
    textAlign: "center",
  };

  const textStyle = {
    fontFamily: "sans-serif",
    fontSize: "2rem",
    color: "white",
  };

  return (
    <div style={containerStyle}>
      <p style={textStyle}>{text}</p>
    </div>
  );
};

export default TextSection;
