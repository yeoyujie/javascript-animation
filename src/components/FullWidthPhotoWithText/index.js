const FullWidthPhotoWithText = ({ imageSrc, overlayText, textBoxOptions }) => {
  const defaultStyle = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "10px",
    borderRadius: "5px",
    textAlign: "left",
    fontSize: "2rem",
  };

  return (
    <div style={{ position: "relative", alignItems: "center" }}>
      <img
        src={imageSrc}
        alt="overlay"
        style={{ width: "100%", height: "100vh" }}
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

export default FullWidthPhotoWithText;
