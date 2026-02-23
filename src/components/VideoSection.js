export default function VideoSection() {
  return (
    <>
  <div className="video-section">
    <div style={{borderRadius: `16px`,overflow: `hidden`,textAlign: `center`,background: `#000`,}}>
      <a href="https://www.youtube.com/watch?v=VJba8mH8WTk" target="_blank" style={{display: `block`,position: `relative`,}}>
        <img src="https://img.youtube.com/vi/VJba8mH8WTk/maxresdefault.jpg" alt="Wall Bed King — See It In Action"
          style={{width: `100%`,display: `block`,}} />
        <div
          style={{position: `absolute`,top: `50%`,left: `50%`,transform: `translate(-50%,-50%)`,width: `72px`,height: `72px`,borderRadius: `50%`,background: `rgba(233,69,96,0.95)`,display: `flex`,alignItems: `center`,justifyContent: `center`,fontSize: `28px`,color: `#fff`,}}>
          ▶</div>
      </a>
    </div>
  </div>

    </>
  );
}
