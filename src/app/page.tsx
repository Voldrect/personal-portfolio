import Image from "next/image";
import SiteNavigation from "./site-navigation";

const mindsetCode = `type Mindset = {\n  curiosity: "always on";\n  details: "matter";\n  purpose: "people first";\n};\n\nexport const howIWork: Mindset = {\n  curiosity: "always on",\n  details: "matter",\n  purpose: "people first",\n};`;

const disciplines = ["Frontend", "Backend", "Database", "Deployment"];

const projects = [
  {
    number: "01",
    name: "Otosurya",
    slug: "otosurya",
    category: "Digital automotive showroom",
    description:
      "A web experience for browsing car listings, with structured vehicle information and inventory-management functionality.",
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase"],
    className: "project-otosurya",
    image: "/projects/otosurya-home.jpg",
    imageAlt:
      "Local development capture of the OTOSURYA home page, showing its vehicle search and showroom interface.",
  },
  {
    number: "02",
    name: "CBS Guard",
    slug: "cbs-guard",
    category: "Security services website",
    description:
      "A professional web presence for security services, supported by service content and administrative management.",
    technologies: ["Laravel", "PHP", "Blade"],
    className: "project-cbs",
    image: "/projects/cbs-guard-home.jpg",
    imageAlt:
      "Local development capture of the CBS Guard home page, showing its security services introduction.",
  },
];

export default function Home() {
  const copyrightYear = new Date().getFullYear();

  return (
    <>
      <SiteNavigation />
      <main className="portfolio-shell" id="top">
        <section
          className="first-screen page-gutter"
          id="home"
          aria-labelledby="hero-title"
        >
          <div className="hero-topline">
            <span className="eyebrow">
              Independent developer <i />
            </span>
            <span className="eyebrow hero-edition">Portfolio / 2025—26</span>
          </div>

          <h1 className="hero-title" id="hero-title">
            <span>I build</span>
            <span>digital</span>
            <span className="outline-word">
              products <b>+</b>
            </span>
          </h1>

          <div className="intro-grid">
            <section
              className="intro-copy"
              id="intro"
              aria-labelledby="intro-title"
            >
              <h2 className="eyebrow" id="intro-title">
                Hello, I’m Andhika.
              </h2>
              <p className="intro-statement">
                I build <strong>useful digital products</strong>, pairing
                thoughtful interfaces with the application systems behind them.
              </p>
              <nav className="hero-actions" aria-label="Explore the portfolio">
                <a className="hero-action hero-action-primary" href="#projects">
                  <span>Explore my work</span>
                  <span aria-hidden="true">↘</span>
                </a>
                <a
                  className="hero-action hero-action-secondary"
                  href="#contact"
                >
                  <span>Let’s work together</span>
                  <span aria-hidden="true">↗</span>
                </a>
              </nav>
              <div className="approach">
                <span className="eyebrow">My approach</span>
                <p>
                  Thoughtful in the details.
                  <br />
                  Useful by design.
                </p>
              </div>
            </section>

            <figure
              className="code-panel"
              id="mindset"
              aria-labelledby="code-title"
            >
              <figcaption className="code-topbar" id="code-title">
                <span className="window-dots" aria-hidden="true">
                  <i />
                  <i />
                  <i />
                </span>
                <span>mindset.ts</span>
                <span className="code-language">TS</span>
              </figcaption>
              <pre>
                <code>{mindsetCode}</code>
              </pre>
              <span className="code-index" aria-hidden="true">
                01 — 09
              </span>
            </figure>
          </div>

          <ul className="discipline-strip" aria-label="Areas of practice">
            {disciplines.map((discipline, index) => (
              <li className="discipline" key={discipline}>
                {discipline}
                {index < disciplines.length - 1 && <i aria-hidden="true">/</i>}
              </li>
            ))}
            <li className="strip-note">From first thought to live product</li>
          </ul>
        </section>

        <section
          className="featured-work page-gutter"
          id="projects"
          aria-labelledby="work-title"
        >
          <div className="work-intro">
            <p className="eyebrow">Selected work / 02 projects</p>
            <h2 id="work-title">
              Built with
              <br />
              <em>purpose.</em>
            </h2>
            <p className="work-description">
              Exploring both customer-facing experiences and the systems that
              support them. Two different challenges, connected by thoughtful
              execution.
            </p>
          </div>

          <div className="project-showcases">
            {projects.map((project) => (
              <article
                className={`project-showcase ${project.className}`}
                key={project.number}
                aria-labelledby={`project-title-${project.number}`}
              >
                <a
                  className={`project-preview ${project.className}-preview`}
                  href={`/projects/${project.slug}`}
                >
                  <div className="project-preview-visual">
                    <Image
                      src={project.image}
                      alt={project.imageAlt}
                      fill
                      sizes="(max-width: 1023px) 90vw, (max-width: 1300px) 65vw, 42vw"
                    />
                    <span className="project-capture-label" aria-hidden="true">
                      LOCAL DEVELOPMENT CAPTURE
                    </span>
                  </div>
                </a>

                <div className="project-copy">
                  <div className="project-overline">
                    <span>({project.number})</span>
                    <span>{project.category}</span>
                  </div>
                  <h3 id={`project-title-${project.number}`}>
                    {project.name}
                    <span className="project-period" aria-hidden="true">
                      .
                    </span>
                  </h3>
                  <p>{project.description}</p>
                  <ul
                    className="project-tech"
                    aria-label={`${project.name} technologies`}
                  >
                    {project.technologies.map((technology) => (
                      <li key={technology}>{technology}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section
          className="about-section page-gutter"
          id="about"
          aria-labelledby="about-title"
        >
          <div className="about-heading">
            <p className="eyebrow">About / 03</p>
            <h2 id="about-title">
              More than
              <br />
              <em>just code.</em>
            </h2>
            <div className="about-introduction">
              <p className="about-lead">
                I’m Andhika Narada Putra, a developer interested in building
                useful digital products—from the interfaces people use to the
                functional systems behind them.
              </p>
              <p>
                I like moving between frontend experiences and the application
                logic that makes them useful. I focus on clear structure,
                usability, maintainable code, and careful implementation so the
                whole product works as one.
              </p>
              <p>
                I’m open to full-time developer roles and freelance
                collaborations involving web development and practical digital
                products.
              </p>
            </div>
          </div>

          <div className="about-principles">
            <div>
              <span>01</span>
              <p>Make the structure clear.</p>
            </div>
            <div>
              <span>02</span>
              <p>Design around real use.</p>
            </div>
            <div>
              <span>03</span>
              <p>Follow through in the details.</p>
            </div>
          </div>

          <section
            className="tech-stack"
            id="stack"
            aria-labelledby="tech-title"
          >
            <div className="tech-heading">
              <p className="eyebrow">Tools in my workflow</p>
              <h3 id="tech-title">
                Tech
                <br />
                <em>stack.</em>
              </h3>
            </div>
            <div className="tech-groups">
              <div className="tech-group">
                <h4>Frontend</h4>
                <ul>
                  <li>Next.js</li>
                  <li>React</li>
                  <li>TypeScript</li>
                  <li>Tailwind CSS</li>
                </ul>
              </div>
              <div className="tech-group">
                <h4>Backend</h4>
                <ul>
                  <li>Laravel</li>
                  <li>PHP</li>
                  <li>Blade</li>
                </ul>
              </div>
              <div className="tech-group">
                <h4>Data</h4>
                <ul>
                  <li>Supabase</li>
                  <li>SQLite</li>
                </ul>
              </div>
              <div className="tech-group">
                <h4>Workflow</h4>
                <ul>
                  <li>Git</li>
                  <li>npm</li>
                </ul>
              </div>
            </div>
          </section>
        </section>

        <section
          className="experience-section page-gutter"
          id="experience"
          aria-labelledby="experience-title"
        >
          <div className="experience-heading">
            <p className="eyebrow">Background / Experience</p>
            <h2 id="experience-title">
              The journey
              <br />
              <em>so far.</em>
            </h2>
            <p className="experience-intro">
              A growing foundation in software, security, and collaborative
              projects.
            </p>
          </div>

          <ol className="experience-timeline">
            <li className="experience-entry">
              <div className="experience-meta">
                <span className="experience-index">01</span>
                <span>2022 — 2026</span>
              </div>
              <div className="experience-copy">
                <p className="eyebrow">Education</p>
                <h3>Universitas Bina Sarana Informatika</h3>
                <p>Final-year student — graduation in progress.</p>
              </div>
            </li>
            <li className="experience-entry">
              <div className="experience-meta">
                <span className="experience-index">02</span>
                <span>2024</span>
              </div>
              <div className="experience-copy">
                <p className="eyebrow">Workshop IT / Software Bootcamp</p>
                <h3>Software development project</h3>
                <p>
                  Co-led a project exploring face-recognition sensors for a
                  campus attendance system.
                </p>
              </div>
            </li>
            <li className="experience-entry">
              <div className="experience-meta">
                <span className="experience-index">03</span>
                <span>2025</span>
              </div>
              <div className="experience-copy">
                <p className="eyebrow">Learning / Training</p>
                <h3>Cisco Academy</h3>
                <p>Cybersecurity Essentials program.</p>
              </div>
            </li>
            <li className="experience-entry">
              <div className="experience-meta">
                <span className="experience-index">04</span>
                <span>Group project</span>
              </div>
              <div className="experience-copy">
                <p className="eyebrow">Mobile application</p>
                <h3>Live Tracking Cuaca</h3>
                <p>
                  A group project for a mobile weather-tracking application
                  involving an API and a database.
                </p>
              </div>
            </li>
          </ol>
        </section>

        <section
          className="contact-section page-gutter"
          id="contact"
          aria-labelledby="contact-title"
        >
          <div className="contact-topline">
            <p className="eyebrow">Contact / 05</p>
            <span className="contact-cross" aria-hidden="true">
              +
            </span>
          </div>
          <h2 id="contact-title">
            Have a good
            <br />
            idea? <em>Let’s</em>
            <br />
            build it.
          </h2>
          <div className="contact-bottomline">
            <div className="contact-message">
              <p>
                Open to conversations about useful digital products, web
                development, and collaborations.
              </p>
              <a
                className="contact-linkedin-cta"
                href="https://www.linkedin.com/in/andhika-narada-putra-978815231/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Let’s connect on LinkedIn, opens in a new tab"
              >
                <span>LET’S CONNECT ON LINKEDIN</span>
                <span aria-hidden="true">↗</span>
              </a>
            </div>
            <div className="contact-pathways">
              <div>
                <span>01 / FULL-TIME</span>
                <strong>Developer opportunities</strong>
              </div>
              <div>
                <span>02 / FREELANCE</span>
                <strong>Projects &amp; collaborations</strong>
              </div>
            </div>
          </div>
        </section>

        <footer className="site-footer page-gutter">
          <a
            className="footer-mark"
            href="#home"
            aria-label="Andhika Narada, back to top"
          >
            AN<span aria-hidden="true">.</span>
          </a>
          <p className="footer-name">Andhika Narada Putra</p>
          <p className="footer-role">Full-Stack Developer</p>
          <p className="footer-copyright">© {copyrightYear}</p>
          <nav className="footer-social" aria-label="Social profiles">
            <a
              href="https://github.com/Voldrect"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile, opens in a new tab"
            >
              GitHub <span aria-hidden="true">↗</span>
            </a>
            <a
              href="https://www.linkedin.com/in/andhika-narada-putra-978815231/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile, opens in a new tab"
            >
              LinkedIn <span aria-hidden="true">↗</span>
            </a>
          </nav>
          <a className="back-to-top" href="#home">
            Back to top <span aria-hidden="true">↑</span>
          </a>
        </footer>
      </main>
    </>
  );
}
