function MessageBox({ message, top, opacity }) {
  return (
    <div className="message-box" style={{ top, opacity }}>
      <p>{message}</p>
    </div>
  );
}


export default MessageBox;