import { leftSideOverlayStyle, rightSideOverlayStyle } from "../../../utils/stylePresets";

const StaticPhotoWithSideCaptions = ({ imageSrc, caption, textBoxOptions, overlayPosition }) => {
  
  // Choose the overlay style based on the overlayPosition prop
  const textBoxStyle = {
    ...(overlayPosition === "left" ? leftSideOverlayStyle : rightSideOverlayStyle),
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    fontSize: "1rem",
    ...textBoxOptions
  };

  return (
    <div style={{ position: "relative", display: "flex", height: "100vh" }}>
      <img src={imageSrc} alt="background" style={{ width: "100%", objectFit: "cover" }} />
      <div style={textBoxStyle}>{caption}</div>
    </div>
  );
};

export default StaticPhotoWithSideCaptions;

