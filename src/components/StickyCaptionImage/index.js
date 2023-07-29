const StickyCaptionImage = ({ imageSrc, caption, textBoxOptions }) => {
  const defaultStyle = {
    position: "sticky",
    bottom: 0,
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    color: "white",
    padding: "10px",
    textAlign: "center",
    fontSize: "1.5rem",
  };

  return (
    <div style={{ position: "relative" }}>
      <img
        src={imageSrc}
        alt="background"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
      <div style={{ ...defaultStyle, ...textBoxOptions }}>{caption}</div>
    </div>
  );
};

export default StickyCaptionImage;
