export const baseDefaultStyle = {
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  color: "white",
  fontSize: "1.2rem",
  textAlign: "left",
  fontFamily: "sans-serif",
};

const sideOverlayStyle = {
  ...baseDefaultStyle,
  position: "absolute",
  display: "flex",
  width: "30%",
  top: 0,
  bottom: 0,
  padding: "15px",
  alignItems: "center",
  fontSize: "1rem",
};

export const rightSideOverlayStyle = {
  ...sideOverlayStyle,
  right: 0,
};

export const leftSideOverlayStyle = {
  ...sideOverlayStyle,
  left: 0,
};

export const bottomRightOverlayTextStyle = {
  ...baseDefaultStyle,
  position: "absolute",
  bottom: 50,
  right: 50,
  padding: "10px",
  width: "30%",
  fontSize: "1rem",
}