const SingleColor = ({ index, color }) => {
  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${color.hex}` }}
    >
      <p className="percent-value">{color.weight}%</p>
      <p className="color-value">#{color.hex}</p>
    </article>
  );
};
export default SingleColor;
