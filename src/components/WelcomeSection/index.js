const WelcomeSection = ({ imageSrc }) => {
  const containerStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle = {
    fontSize: '6rem',
    color: 'white',
  };

  return (
    <div style={containerStyle}>
      <h1 style={textStyle}>Welcome to my page!</h1>
    </div>
  );
};

export default WelcomeSection;
