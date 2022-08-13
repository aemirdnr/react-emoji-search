import "./Emoji.sass";

function Emoji({ title, symbol, keywords }) {
  const codePointHex = symbol.codePointAt(0).toString(16);
  const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;

  return (
    <div className="emoji__box">
      <img src={src} alt={keywords} width="36" height="36" />
      <span className="emoji__id"> {title}</span>
      <span className="emoji__copy"> Click to copy emoji</span>
    </div>
  );
}

export default Emoji;
