'use client';

const showcaseImages = [
  { src: '/1.webp', alt: 'Wall bed with storage cabinets' },
  { src: '/2.webp', alt: 'Modern wall bed - closed' },
  { src: '/6.webp', alt: 'Wall bed with sofa set' },
  { src: '/7.webp', alt: 'Oak finish wall bed' },
  { src: '/12.webp', alt: 'Wall bed in elegant room' },
  { src: '/13.webp', alt: 'Sage green wall bed in living space' },
];

export default function ProductShowcaseSection({ dict }) {
  return (
    <section className="section" style={{ overflow: 'hidden' }}>
      <div className="section-header">
        <div className="section-tag">{dict?.showcase?.tag || 'Our Products'}</div>
        <div className="section-title">{dict?.showcase?.title || 'Designed for Every Space'}</div>
        <p className="section-desc">{dict?.showcase?.desc || 'Discover our wall bed collection — premium craftsmanship that transforms any room into a versatile living space.'}</p>
      </div>

      <div className="showcase-wrapper">
        {/* Row 1: Big left + 2 small right */}
        <div className="showcase-row">
          <div className="showcase-big">
            <img src={showcaseImages[0].src} alt={showcaseImages[0].alt} loading="lazy" />
          </div>
          <div className="showcase-small-stack">
            <div className="showcase-small">
              <img src={showcaseImages[1].src} alt={showcaseImages[1].alt} loading="lazy" />
            </div>
            <div className="showcase-small">
              <img src={showcaseImages[2].src} alt={showcaseImages[2].alt} loading="lazy" />
            </div>
          </div>
        </div>

        {/* Row 2: 2 small left + Big right (mirrored) */}
        <div className="showcase-row">
          <div className="showcase-small-stack">
            <div className="showcase-small">
              <img src={showcaseImages[3].src} alt={showcaseImages[3].alt} loading="lazy" />
            </div>
            <div className="showcase-small">
              <img src={showcaseImages[4].src} alt={showcaseImages[4].alt} loading="lazy" />
            </div>
          </div>
          <div className="showcase-big">
            <img src={showcaseImages[5].src} alt={showcaseImages[5].alt} loading="lazy" />
          </div>
        </div>
      </div>

      <style jsx>{`
        .showcase-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .showcase-row {
          display: flex;
          gap: 16px;
          width: 100%;
        }
        .showcase-big {
          flex: 2;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .showcase-big img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .showcase-big:hover img {
          transform: scale(1.04);
        }
        .showcase-small-stack {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }
        .showcase-small {
          flex: 1;
          border-radius: 16px;
          overflow: hidden;
          position: relative;
        }
        .showcase-small img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
        }
        .showcase-small:hover img {
          transform: scale(1.06);
        }
        @media (max-width: 640px) {
          .showcase-row {
            flex-direction: column;
          }
          .showcase-big,
          .showcase-small-stack {
            flex: unset;
          }
          .showcase-big img {
            aspect-ratio: 4 / 3;
          }
          .showcase-small img {
            aspect-ratio: 4 / 3;
          }
        }
      `}</style>
    </section>
  );
}
