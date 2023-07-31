import { baseDefaultStyle } from "../../utils/baseDefaultStyle";

const StaticPhotoWithSideCaptions = ({ imageSrc, caption, textBoxOptions }) => {
    const defaultStyle = {
        ...baseDefaultStyle,
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        width: '30%',
        color: 'white',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        fontSize: '1rem',
        ...textBoxOptions
      };
    
      return (
        <div style={{ position: 'relative' }}>
          <img src={imageSrc} alt="background" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={defaultStyle}>{caption}</div>
        </div>
      );
    };

export default StaticPhotoWithSideCaptions;
