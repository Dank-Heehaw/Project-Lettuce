import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    number: "01",
    title: "Good Things Grow",
    category: "Brand identity · Packaging",
    year: "2025",
    image: "/projects/good-things-grow.svg",
    alt: "Colorful flower illustration for the Good Things Grow identity",
    className: "project-art--flower",
  },
  {
    number: "02",
    title: "Common Ground",
    category: "Digital experience · Community",
    year: "2025",
    image: "/projects/common-ground.svg",
    alt: "A playful community garden website concept",
    className: "project-art--garden",
  },
  {
    number: "03",
    title: "Soft Hours",
    category: "Art direction · Editorial",
    year: "2024",
    image: "/projects/soft-hours.svg",
    alt: "An editorial art direction concept in warm colors",
    className: "project-art--editorial",
  },
];

export const metadata = {
  title: "Home",
  description:
    "A selection of thoughtful identities and digital experiences by Soph Fusco.",
};

export default function Home() {
  return (
    <main>
      <section className="hero page-wrap" id="home" aria-labelledby="hero-title">
        <div className="hero-copy">
          <p className="eyebrow">
            <span className="eyebrow-mark" aria-hidden="true">
              ✳
            </span>
            Independent designer & creative partner
          </p>
          <h1 id="hero-title">
            Good ideas,
            <br />
            <span>grown with care.</span>
          </h1>
          <p className="hero-description">
            I’m Soph — a designer shaping thoughtful identities and digital
            experiences for people doing good things.
          </p>
          <div className="hero-actions">
            <Link className="button button--dark" href="#projects">
              Explore selected work <span aria-hidden="true">↓</span>
            </Link>
            <Link className="text-link" href="/about">
              A little about me <span aria-hidden="true">↗</span>
            </Link>
          </div>
          <p className="hero-note">
            <span className="availability-dot" aria-hidden="true" />
            Available for select projects
          </p>
        </div>
        <div className="hero-visual">
          <div className="hero-visual-top">
            <span>PORTFOLIO NOTES</span>
            <span>2026</span>
          </div>
          <Image
            className="hero-image"
            src="/projects/hero-flower.svg"
            alt="A bright, hand-drawn flower against a warm pink background"
            fill
            priority
            sizes="(max-width: 699px) 100vw, (max-width: 1099px) 44vw, 42vw"
          />
          <span className="hero-sticker" aria-hidden="true">
            made with
            <br />
            intention
            <span>♥</span>
          </span>
          <span className="hero-visual-caption">
            A practice rooted in curiosity
          </span>
        </div>
        <a className="scroll-cue" href="#projects">
          <span aria-hidden="true">↓</span> Scroll to explore
        </a>
      </section>

      <section
        className="projects-section section-wrap"
        id="projects"
        aria-labelledby="projects-title"
      >
        <div className="section-heading">
          <div>
            <p className="eyebrow section-kicker">01 / SELECTED WORK</p>
            <h2 id="projects-title">
              A few things <em>in bloom.</em>
            </h2>
          </div>
          <p className="section-intro">
            A small collection of ideas made tangible, with a little room for
            play.
          </p>
        </div>

        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className={`project-art ${project.className}`}>
                <Image
                  src={project.image}
                  alt={project.alt}
                  fill
                  sizes="(max-width: 699px) 100vw, (max-width: 1099px) 50vw, 33vw"
                />
                <span className="project-number">{project.number}</span>
                <span className="project-open" aria-hidden="true">
                  ↗
                </span>
              </div>
              <div className="project-details">
                <div>
                  <h3>{project.title}</h3>
                  <p>{project.category}</p>
                </div>
                <span className="project-year">{project.year}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="projects-note">
          Starter projects — replace these examples with your own work.
        </p>
      </section>

      <section className="home-about" aria-labelledby="home-about-title">
        <div className="home-about-inner section-wrap">
          <span className="about-doodle" aria-hidden="true">
            ✳
          </span>
          <p className="eyebrow">02 / A LITTLE ABOUT ME</p>
          <h2 id="home-about-title">
            Good work starts with
            <br />
            <em>good questions.</em>
          </h2>
          <div className="home-about-bottom">
            <p>
              I bring big-picture thinking and an eye for the little details to
              every collaboration. Thoughtful by nature, curious by default.
            </p>
            <Link className="button button--light" href="/about">
              More about Soph <span aria-hidden="true">↗</span>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
