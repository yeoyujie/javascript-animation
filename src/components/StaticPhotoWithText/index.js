import { baseDefaultStyle } from "../../utils/baseDefaultStyle";

const StaticPhotoWithText = ({ imageSrc, overlayText, textBoxOptions }) => {
  const defaultStyle = {
    ...baseDefaultStyle,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    padding: "10px",
    borderRadius: "5px",
    fontSize: "2rem",
  };

  return (
    <div style={{ position: "relative", display: "flex" }}>
      <img
        src={imageSrc}
        alt="overlay"
        style={{ width: "100%" }}
      />
      {overlayText && (
        // The spread operator (...) is used to merge the defaultStyle and textBoxOptions objects.
        // If there are any properties with the same name in both objects, the value of the property in textBoxOptions will overwrite the value of the property in defaultStyle.
        // This means that you can customize the style of the text box by passing in an object with the desired style properties as textBoxOptions.
        <div style={{ ...defaultStyle, ...textBoxOptions }}>{overlayText}</div>
      )}
    </div>
  );
};

export default StaticPhotoWithText;
