import "./Emoji.sass";

function Emoji() {
  return (
    <div className="emoji__box">
      <img
        src="//cdn.jsdelivr.net/emojione/assets/png/1f638.png"
        width="36"
        height="36"
      />
      <span className="emoji__id"> Smile</span>
      <span className="emoji__copy"> Click to copy emoji</span>
    </div>
  );
}

export default Emoji;
