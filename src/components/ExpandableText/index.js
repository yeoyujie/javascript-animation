const ExpandableText = ({ text, backgroundImage }) => {
    const containerStyle = {
      padding: '10vh 1rem',
      backgroundColor: 'black',
      minHeight: '50vh',
      backgroundImage: backgroundImage ? `url(${backgroundImage})` : null,
      backgroundSize: 'cover',
    };
  
    const textStyle = {
      fontFamily: 'sans-serif',
      fontSize: '2rem',
      color: '#333',
    };
  
    return (
      <div style={containerStyle}>
        <p style={textStyle}>{text}</p>
      </div>
    );
  };
  
  export default ExpandableText;