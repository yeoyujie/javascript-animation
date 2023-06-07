function MessageBox({ message, show, top, opacity }) {
  return (
    <>
      {show && (
        <div className="message-box" style={{ top, opacity }}>
          <p>{message}</p>
        </div>
      )}
    </>
  );
}


export default MessageBox;