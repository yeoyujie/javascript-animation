import { baseDefaultStyle } from "../../../utils/stylePresets";

const StaticPhotoWithText = ({ imageSrc, overlayText, textBoxOptions }) => {
  // This code defines a defaultStyle object that contains a set of default styles for an element.
  // The defaultStyle object is created by merging the properties of the baseDefaultStyle object,
  // the custom styles passed in through textBoxOptions, and some additional default styles.
  // The order of precedence is such that the custom styles passed in through textBoxOptions will
  // take priority over the default styles defined in both baseDefaultStyle and defaultStyle.
  const textBoxStyle = {
    ...baseDefaultStyle,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "2rem",
    ...textBoxOptions
  };

  return (

    <div style={{ position: "relative", display: "flex" }}>
      <img
        src={imageSrc}
        alt="overlay"
        style={{ width: "100%" }}
      />
      {overlayText && (
        <div style={textBoxStyle}>{overlayText}</div>
      )}
    </div>
  );
};

export default StaticPhotoWithText;
