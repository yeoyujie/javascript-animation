const FullWidthPhotoWithText = ({ imageSrc, overlayText, textBoxOptions }) => {
  const defaultStyle = {
    position: 'absolute',
    bottom: 50,
    left: 50,
    right: 50,
    top: 50,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    color: 'white',
    padding: '10px',
    textAlign: 'left',
  };

  return (
    <div style={{ position: 'relative' }}>
      <img src={imageSrc} style={{ width: '100%' }} />
      {overlayText && (
        <div style={{ ...defaultStyle, ...textBoxOptions }}>{overlayText}</div>
      )}
    </div>
  );
};

export default FullWidthPhotoWithText;
