import "./page.scss";

const paint = ["#22e1ff", "#3b4bff", "#9b3dff", "#ff2f86", "#ff3a1a", "#ff9a1a", "#ffe14a", "#3dff9a"];

function Logo() {
  let color = 0;
  return (
    <h1 className="logo" aria-label="Sophia Fusco">
      {"Sophia Fusco".split("").map((char, index) =>
        char === " " ? (
          " "
        ) : (
          <span key={index} style={{ "--paint": paint[color++ % paint.length] }}>
            {char}
          </span>
        ),
      )}
    </h1>
  );
}

export default function Home() {
  return (
    <main className="page">
      <header className="page-header">
        <p className="eyebrow">The Hobby Collector</p>
        <Logo />
        <p className="lede">Ontario</p>
      </header>

      <blockquote className="quote">
        <p>
          My art is a mosaic — an amalgamation of the art and artists that
          inspired me on my journey to become the artist I am today.
        </p>
        <footer>Scott Christian Sava</footer>
      </blockquote>

      <section id="biography">
        <h2>Artist biography</h2>
        <p>
          Sophia Fusco is a multi-media artist based in Vaughan, Ontario. From
          the age of 6, Sophia has reimagined anything that came to her mind,
          especially if it is an absurd concept. Sophia is a serial
          overachiever, currently focusing on acrylic painting, drawing,
          editing, and photography.
        </p>
        <p>
          Upon completion of the Art and Design Foundations certification at
          Seneca Polytechnic, she will be completing her BFA at York
          University. In the last two years, Sophia has been recognized with
          excellence in Communications Technology: TV, Video &amp; Movie
          Production, excellence in Visual Arts &amp; Photography, and the
          Focus Imaging Yearbook Award from St. Elizabeth Catholic Highschool.
          In the future, Sophia plans to restart her beloved YouTube channel
          to teach and entertain artists around the world, while continuing to
          create.
        </p>
      </section>

      <section id="sketchbook">
        <h2>Hands holding items</h2>
        <p>
          This latest showcase is a set of hands holding items, drawn from
          observation. Gesture comes first, in non-photo blue. Then the planes:
          boxes, lines, cylinders, cubes, and the diagonals that hold a hand
          together.
        </p>
        <p>
          Materials are a non-photo blue pencil and a Staedtler Mars Lumograph
          graphite pencil. The drawings are exercises on a Canson XL 9×12
          sketchbook, 70 lb, 114 g. March 2026.
        </p>
      </section>

      <section id="contact">
        <h2>Contact</h2>
        <p>
          <a href="https://www.instagram.com/sopb__/" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          {" · "}
          <a href="https://www.youtube.com/@SophTheHobbyCollector" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </p>
      </section>
    </main>
  );
}
