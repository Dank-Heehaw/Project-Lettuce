import Link from "next/link";

const works = [
  {
    number: "01",
    title: "Lorem ipsum I",
    type: "Oil on linen",
    blurb: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    tone: "olive",
  },
  {
    number: "02",
    title: "Subhead title",
    type: "Charcoal study",
    blurb: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    tone: "red",
  },
  {
    number: "03",
    title: "Body text title",
    type: "Gouache + ink",
    blurb: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    tone: "stone",
  },
];

export const metadata = {
  title: "Home",
  description: "Traditional artist portfolio with studies, commissions, and journal entries.",
};

export default function Home() {
  return (
    <main id="top" className="home-page">
      <section className="hero page-wrap" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-mark" aria-hidden="true">
              ✦
            </span>
            Traditional artist / studio practice
          </p>

          <h1 id="hero-title">
            Quiet forms,
            <br />
            <span>kept in motion.</span>
          </h1>

          <p className="hero-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris.
          </p>

          <div className="hero-actions">
            <Link className="button button--dark" href="#works">
              View selected works <span aria-hidden="true">↓</span>
            </Link>
            <Link className="text-link" href="/about">
              Studio notes <span aria-hidden="true">↗</span>
            </Link>
          </div>

          <p className="hero-note">
            <span className="availability-dot" aria-hidden="true" />
            Available for commissions and studies
          </p>
        </div>

        <div className="hero-visual" aria-label="Abstract portrait panel">
          <div className="hero-visual-top">
            <span>STUDIO</span>
            <span>2026</span>
          </div>

          <div className="art-panel art-panel--portrait">
            <div className="art-panel__shape art-panel__shape--one" />
            <div className="art-panel__shape art-panel__shape--two" />
            <div className="art-panel__shape art-panel__shape--three" />
          </div>

          <span className="hero-sticker" aria-hidden="true">
            Stillness
            <br />
            in color
          </span>

          <span className="hero-visual-caption">Subhead caption text</span>
        </div>
      </section>

      <section className="projects-section section-wrap" id="works" aria-labelledby="works-title">
        <div className="section-heading">
          <div>
            <p className="eyebrow section-kicker">Selected works</p>
            <h2 id="works-title">
              Latest <em>studies.</em>
            </h2>
          </div>
          <p className="section-intro">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        <div className="project-grid">
          {works.map((work) => (
            <article className="project-card" key={work.number}>
              <div className={`project-art project-art--${work.tone}`}>
                <span className="project-number">{work.number}</span>
                <span className="project-open" aria-hidden="true">
                  ↗
                </span>
              </div>

              <div className="project-details">
                <div>
                  <h3>{work.title}</h3>
                  <p>{work.type}</p>
                </div>
                <span className="project-year">2026</span>
              </div>

              <p className="project-blurb">{work.blurb}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="home-about" id="studies" aria-labelledby="study-title">
        <div className="home-about-inner section-wrap">
          <span className="about-doodle" aria-hidden="true">
            ✦
          </span>
          <p className="eyebrow">Practice</p>
          <h2 id="study-title">
            Working with
            <br />
            <em>slow observation.</em>
          </h2>
          <div className="home-about-bottom">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere, risus et luctus posuere, nibh lectus sagittis ligula,
              vitae blandit justo lorem vitae nulla.
            </p>
            <Link className="button button--light" href="/about">
              Read the studio notes <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
