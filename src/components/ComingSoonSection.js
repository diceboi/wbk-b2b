export default function ComingSoonSection({ dict }) {
  return (
    <>
      <section style={{ background: `linear-gradient(135deg,#0f3460,#1a1a2e)`, padding: `50px 40px`, textAlign: `center`, color: `#fff`, }}>
        <div style={{ maxWidth: `700px`, margin: `0 auto`, }}>
          <div
            style={{ display: `inline-block`, background: `rgba(233,69,96,0.15)`, border: `1px solid rgba(233,69,96,0.3)`, borderRadius: `20px`, padding: `6px 18px`, fontSize: `12px`, color: `#e94560`, fontWeight: `600`, marginBottom: `16px`, }}>
            {dict.coming_soon.tag}</div>
          <h3 style={{ fontSize: `24px`, fontWeight: `800`, marginBottom: `12px`, }}>{dict.coming_soon.title}</h3>
          <p style={{ fontSize: `15px`, color: `rgba(255,255,255,0.6)`, lineHeight: `1.7`, }}>{dict.coming_soon.desc}</p>
        </div>
      </section>

    </>
  );
}
