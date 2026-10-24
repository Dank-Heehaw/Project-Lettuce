import Link from "next/link";

export const metadata = {
  title: "Studio & Contact",
  description:
    "Artist biography, practice notes, and contact details for commissions and collaborations.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero section-wrap" aria-labelledby="about-title">
        <p className="eyebrow section-kicker">Studio / About</p>
        <h1 id="about-title">
          Rosa Vale
          <br />
          <em>Painter of quiet forms.</em>
        </h1>

        <div className="about-intro">
          <p className="about-lede">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          <div className="about-copy">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              posuere, risus et luctus posuere, nibh lectus sagittis ligula,
              vitae blandit justo lorem vitae nulla. Morbi euismod, risus a
              rhoncus dignissim, nibh sapien mollis nisl, non pulvinar pede urna
              a quam.
            </p>
            <p>
              Subhead text goes here. Duis consectetur neque a turpis placerat,
              vitae lacinia nulla interdum. Quisque non nunc a dolor commodo
              aliquet. Vivamus sed varius est, at vulputate odio.
            </p>
          </div>
        </div>
      </section>

      <section className="about-details section-wrap" aria-label="Artist practice">
        <div className="about-detail">
          <p className="eyebrow">Process</p>
          <ul>
            <li>Studies</li>
            <li>Portraiture</li>
            <li>Still life</li>
            <li>Commissions</li>
          </ul>
        </div>

        <div className="about-detail">
          <p className="eyebrow">Materials</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras
            hendrerit tortor nec risus imperdiet vulputate. Donec feugiat
            imperdiet libero, id congue nibh venenatis vel.
          </p>
        </div>

        <div className="about-detail about-detail--note">
          <span aria-hidden="true">✦</span>
          <p>Subhead text with a quiet, grounded sensibility.</p>
        </div>
      </section>

      <section className="contact-section" id="contact" aria-labelledby="contact-title">
        <div className="contact-inner section-wrap">
          <p className="eyebrow">Inquiries</p>
          <h2 id="contact-title">
            For commissions
            <br />
            and studies.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <a className="button button--light" href="mailto:hello@rosavale.studio">
            hello@rosavale.studio <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-footnote">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </span>
        </div>
      </section>

      <div className="back-to-work section-wrap">
        <Link className="text-link" href="/#works">
          <span aria-hidden="true">←</span> Back to works
        </Link>
      </div>
    </main>
  );
}
