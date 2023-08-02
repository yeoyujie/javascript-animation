import { getTextBoxStyle } from "../../../utils/getTextBoxStyle";

const StaticPhotoWithSideCaptions = ({ imageSrc, caption, textBoxOptions, overlayStyleType="right" }) => {
  
  const textBoxStyle = getTextBoxStyle(overlayStyleType, textBoxOptions);

  return (
    <div style={{ position: "relative", display: "flex", height: "100vh" }}>
      <img src={imageSrc} alt="background" style={{ width: "100%", objectFit: "cover" }} />
      <div style={textBoxStyle}>{caption}</div>
    </div>
  );
};

export default StaticPhotoWithSideCaptions;

