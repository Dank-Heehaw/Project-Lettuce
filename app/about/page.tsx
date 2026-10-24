import Link from "next/link";

export const metadata = {
  title: "About & Contact",
  description:
    "Get to know Soph Fusco, an independent designer, and get in touch about a project.",
};

export default function AboutPage() {
  return (
    <main className="about-page">
      <section className="about-hero section-wrap" aria-labelledby="about-title">
        <p className="eyebrow section-kicker">03 / THE PERSON BEHIND THE PIXELS</p>
        <h1 id="about-title">
          Hello, I’m Soph.
          <br />
          <em>Really glad you’re here.</em>
        </h1>
        <div className="about-intro">
          <p className="about-lede">
            I’m an independent designer who believes the best work feels as
            good as it looks.
          </p>
          <div className="about-copy">
            <p>
              I partner with thoughtful people and small teams to turn big,
              sometimes messy ideas into clear and memorable brands and digital
              experiences. My process is collaborative, curious, and grounded
              in the details.
            </p>
            <p>
              This space is yours to make your own: add a few lines about your
              background, the people you love working with, and what makes your
              approach uniquely yours.
            </p>
          </div>
        </div>
      </section>

      <section className="about-details section-wrap" aria-label="About Soph">
        <div className="about-detail">
          <p className="eyebrow">WHAT I DO</p>
          <ul>
            <li>Visual identity</li>
            <li>Digital design</li>
            <li>Art direction</li>
            <li>Creative collaboration</li>
          </ul>
        </div>
        <div className="about-detail">
          <p className="eyebrow">HOW I WORK</p>
          <p>
            With intention, open communication, and a healthy respect for
            making things a little more delightful.
          </p>
        </div>
        <div className="about-detail about-detail--note">
          <span aria-hidden="true">✳</span>
          <p>Thoughtful by nature. Curious by default.</p>
        </div>
      </section>

      <section
        className="contact-section"
        id="contact"
        aria-labelledby="contact-title"
      >
        <div className="contact-inner section-wrap">
          <p className="eyebrow">04 / YOUR TURN</p>
          <h2 id="contact-title">
            Have a good feeling
            <br />
            about this?
          </h2>
          <p>
            Tell me what you’re dreaming up. I’d love to hear about it.
          </p>
          <a className="button button--light" href="mailto:hello@yourname.com">
            Say hello <span aria-hidden="true">↗</span>
          </a>
          <span className="contact-footnote">
            Replace hello@yourname.com with your email address.
          </span>
        </div>
      </section>

      <div className="back-to-work section-wrap">
        <Link className="text-link" href="/#projects">
          <span aria-hidden="true">←</span> Back to selected work
        </Link>
      </div>
    </main>
  );
}
