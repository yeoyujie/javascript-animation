import { leftSideOverlayStyle, rightSideOverlayStyle, bottomLeftOverlayTextStyle, bottomRightOverlayTextStyle } from "./stylePresets";

export const getTextBoxStyle = (overlayStyleType="bottomRight", textBoxOptions) => {
  // Choose the overlay style based on the overlayStyleType prop
  let textBoxStyle;

  switch (overlayStyleType) {
    case "left":
      textBoxStyle = { ...leftSideOverlayStyle, ...textBoxOptions };
      break;
    case "right":
      textBoxStyle = { ...rightSideOverlayStyle, ...textBoxOptions };
      break;
    case "bottomLeft":
      textBoxStyle = { ...bottomLeftOverlayTextStyle, ...textBoxOptions };
      break;
    case "bottomRight":
      textBoxStyle = { ...bottomRightOverlayTextStyle, ...textBoxOptions };
      break;
    default:
      textBoxStyle = { ...textBoxOptions };
  }
  return textBoxStyle;
};
