export default function ContactFooter({ dict }) {
  return (
    <>
      <section className="contact">
        <div style={{ maxWidth: `600px`, margin: `0 auto`, }}>
          <h3>{dict.contact.title}</h3>
          <p dangerouslySetInnerHTML={{ __html: dict.contact.desc }}></p>
        </div>
      </section>


      <footer className="footer">
        <div className="footer-inner">
          <div>{dict.footer.copyright}</div>
          <div className="footer-links">
            <a href="/privacy" className="footer-link" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}>{dict.footer.privacy}</a>
            <span style={{ color: '#ccc' }}>|</span>
            <a href="/impressum" className="footer-link" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}>{dict.footer.contact}</a>
            <span style={{ color: '#ccc' }}>|</span>
            <span>wallbedking.com</span>
          </div>
        </div>
      </footer>

    </>
  );
}
