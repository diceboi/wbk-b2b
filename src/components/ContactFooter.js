export default function ContactFooter({ dict, lang }) {
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
            <a href={lang ? `/${lang}/privacy` : "/privacy"} className="footer-link" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}>{dict.footer.privacy}</a>
            <span className="footer-separator" style={{ color: '#ccc' }}>|</span>
            <a href={lang ? `/${lang}/impressum` : "/impressum"} className="footer-link" style={{ color: '#888', textDecoration: 'none', transition: 'color 0.2s' }}>{dict.footer.impressum}</a>
            <span className="footer-separator" style={{ color: '#ccc' }}>|</span>
            <span>wallbedking.com</span>
          </div>
        </div>
      </footer>

    </>
  );
}
