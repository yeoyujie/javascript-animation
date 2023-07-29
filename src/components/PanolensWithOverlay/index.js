import BasePanolens from "../BasePanolens";

const PanolensWithOverlay = ({ imageSrc, overlaySrc }) => (
  <div>
    <BasePanolens imageSrc={imageSrc} />
    <img
      src={overlaySrc}
      alt="overlay"
      style={{ position: "absolute", bottom: 0, left: 0 }}
    />
  </div>
);

export default PanolensWithOverlay;
