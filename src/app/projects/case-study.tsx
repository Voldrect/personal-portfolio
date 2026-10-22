import Image from "next/image";
import Link from "next/link";
import SiteNavigation from "../site-navigation";
import ReadingProgress from "./reading-progress";

export type CaseStudyContent = {
  slug: string;
  number: string;
  title: string;
  category: string;
  summary: string;
  objective: string;
  objectiveNote: string;
  journeyTitle: string;
  journeyIntro: string;
  journeySteps: { title: string; detail: string }[];
  capabilities: { title: string; detail: string }[];
  implementation: { label: string; value: string; detail: string }[];
  implementationNote: string;
  considerations: string[];
  closing: string;
  preview: "automotive" | "security";
  screenshot: string;
  screenshotAlt: string;
  gallery: {
    src: string;
    width: number;
    height: number;
    alt: string;
    caption: string;
    layout: "wide" | "narrow" | "center";
  }[];
  related: { title: string; href: string };
  technologies: string[];
};

export default function CaseStudy({ project }: { project: CaseStudyContent }) {
  const isAutomotive = project.preview === "automotive";

  return (
    <>
      <SiteNavigation />
      <ReadingProgress />
      <main
        className={`portfolio-shell case-study ${isAutomotive ? "case-study-auto" : "case-study-security"}`}
      >
        <article id="case-study-article">
          <header className="case-hero page-gutter">
            <div className="case-topline">
              <Link href="/#projects" className="case-back-link">
                ←&nbsp; Selected work
              </Link>
              <span>CASE STUDY&nbsp; / &nbsp;{project.number}</span>
            </div>
            <div className="case-hero-grid">
              <div className="case-title-block">
                <p className="eyebrow">{project.category}</p>
                <h1>
                  {project.title}
                  <span>.</span>
                </h1>
              </div>
              <div className="case-summary-block">
                <p>{project.summary}</p>
                <a href="#project-overview" className="case-scroll-link">
                  Explore the project <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
            <div className="case-technology-line">
              <span>TECHNOLOGY</span>
              <ul aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>
            </div>
          </header>

          <nav
            className="case-toc page-gutter"
            aria-label="Case study contents"
          >
            <span className="case-toc-label">ON THIS PAGE</span>
            <ol>
              <li>
                <a href="#project-overview">Overview</a>
              </li>
              <li>
                <a href="#project-journey">
                  {isAutomotive ? "Vehicle journey" : "Site structure"}
                </a>
              </li>
              <li>
                <a href="#project-gallery">Gallery</a>
              </li>
              <li>
                <a href="#project-capabilities">Capabilities</a>
              </li>
              <li>
                <a href="#project-implementation">Technical notes</a>
              </li>
              <li>
                <a href="#project-design-notes">Considerations</a>
              </li>
            </ol>
          </nav>

          <figure className="case-visual page-gutter">
            <div className="case-visual-frame">
              <a
                className="case-visual-link"
                href={project.screenshot}
                target="_blank"
                rel="noreferrer"
              >
                <Image
                  className="case-screenshot"
                  src={project.screenshot}
                  alt={project.screenshotAlt}
                  fill
                  sizes="(max-width: 1023px) 90vw, 65vw"
                  priority
                />
                <span className="case-gallery-open" aria-hidden="true">
                  ↗
                </span>
                <span className="visually-hidden">
                  Open full-size image in a new tab
                </span>
              </a>
            </div>
            <figcaption>
              <span>01 — LOCAL DEVELOPMENT CAPTURE</span>
              <span>Rendered from the original project source</span>
            </figcaption>
          </figure>

          {project.gallery.length > 0 && (
            <section
              className="case-gallery page-gutter"
              id="project-gallery"
              aria-labelledby="case-gallery-title"
            >
              <div className="case-gallery-heading">
                <p className="eyebrow">Additional views</p>
                <h2 id="case-gallery-title">More from the interface.</h2>
              </div>
              <div className="case-gallery-grid">
                {project.gallery.map((image, index) => (
                  <figure
                    className={`case-gallery-item case-gallery-item--${image.layout}`}
                    key={image.src}
                  >
                    <a
                      className="case-gallery-link"
                      href={image.src}
                      target="_blank"
                      rel="noreferrer"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        width={image.width}
                        height={image.height}
                        sizes={
                          image.layout === "wide"
                            ? "(max-width: 760px) 90vw, (max-width: 1100px) 50vw, 42vw"
                            : image.layout === "center"
                              ? "(max-width: 760px) 90vw, (max-width: 1100px) 60vw, 56vw"
                              : "(max-width: 760px) 90vw, (max-width: 1100px) 32vw, 25vw"
                        }
                        quality={88}
                      />
                      <span className="case-gallery-open" aria-hidden="true">
                        ↗
                      </span>
                      <span className="visually-hidden">
                        Open full-size image in a new tab
                      </span>
                    </a>
                    <figcaption>
                      <span>{String(index + 2).padStart(2, "0")}</span>
                      <span>Local development capture / {image.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </section>
          )}

          <section
            className="case-section page-gutter"
            id="project-overview"
            aria-labelledby="case-overview-title"
          >
            <div className="case-section-index">
              <span>01</span>
              <span>PROJECT OVERVIEW</span>
            </div>
            <div className="case-section-content case-overview-content">
              <h2 id="case-overview-title">
                {isAutomotive
                  ? "A showroom built around discovery."
                  : "A clear presence for security services."}
              </h2>
              <div>
                <p>{project.objective}</p>
                <p className="case-secondary-copy">{project.objectiveNote}</p>
              </div>
            </div>
          </section>

          <section
            className="case-section case-journey page-gutter"
            id="project-journey"
            aria-labelledby="case-journey-title"
          >
            <div className="case-section-index">
              <span>02</span>
              <span>
                {isAutomotive
                  ? "PUBLIC USER JOURNEY"
                  : "PUBLIC INFORMATION FLOW"}
              </span>
            </div>
            <div className="case-section-content">
              <div className="case-journey-heading">
                <h2 id="case-journey-title">{project.journeyTitle}</h2>
                <p>{project.journeyIntro}</p>
              </div>
              <ol className="case-journey-list">
                {project.journeySteps.map((step, index) => (
                  <li key={step.title}>
                    <span className="case-journey-number">0{index + 1}</span>
                    <h3>{step.title}</h3>
                    <p>{step.detail}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section
            className="case-section case-capabilities page-gutter"
            id="project-capabilities"
            aria-labelledby="case-capabilities-title"
          >
            <div className="case-section-index">
              <span>03</span>
              <span>{isAutomotive ? "CORE CAPABILITIES" : "SITE CONTENT"}</span>
            </div>
            <div className="case-section-content">
              <h2 id="case-capabilities-title">
                {isAutomotive
                  ? "The essential parts."
                  : "Information, made legible."}
              </h2>
              <div className="case-capability-list">
                {project.capabilities.map((capability, index) => (
                  <div className="case-capability" key={capability.title}>
                    <span>0{index + 1}</span>
                    <h3>{capability.title}</h3>
                    <p>{capability.detail}</p>
                    <span className="case-capability-mark" aria-hidden="true">
                      ↗
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section
            className="case-section case-implementation page-gutter"
            id="project-implementation"
            aria-labelledby="case-implementation-title"
          >
            <div className="case-section-index">
              <span>04</span>
              <span>IMPLEMENTATION / DATA</span>
            </div>
            <div className="case-section-content">
              <h2 id="case-implementation-title">
                {isAutomotive
                  ? "A catalog connected to Supabase records."
                  : "A service model with a clear content path."}
              </h2>
              <p className="case-implementation-intro">
                {isAutomotive
                  ? "The inspected source separates URL-driven catalog controls from server-side Supabase reads, then uses the selected car record to shape the detail view."
                  : "Laravel routes, an Eloquent model, a resource controller, migrations, and Blade views define the verified service-content workflow."}
              </p>
              <div className="case-implementation-grid">
                {project.implementation.map((item) => (
                  <div key={item.label}>
                    <span>{item.label}</span>
                    <h3>{item.value}</h3>
                    <p>{item.detail}</p>
                  </div>
                ))}
              </div>
              <p className="case-source-note">{project.implementationNote}</p>
            </div>
          </section>

          <section
            className="case-section case-considerations page-gutter"
            id="project-design-notes"
            aria-labelledby="case-considerations-title"
          >
            <div className="case-section-index">
              <span>05</span>
              <span>ENGINEERING NOTES</span>
            </div>
            <div className="case-section-content case-considerations-content">
              <h2 id="case-considerations-title">
                {isAutomotive
                  ? "The record shapes the experience."
                  : "Content structure carries through the stack."}
              </h2>
              <p>
                {isAutomotive
                  ? "These observations come from the inspected routes and components. They describe implementation choices, not measured performance or outcomes."
                  : "These observations come from the inspected public route, service controller, model, migrations, and views. They do not represent a security or business-outcome assessment."}
              </p>
              <ul>
                {project.considerations.map((consideration) => (
                  <li key={consideration}>{consideration}</li>
                ))}
              </ul>
              <div className="case-reflection">
                <span>IN REFLECTION</span>
                <p>{project.closing}</p>
              </div>
            </div>
          </section>
        </article>

        <nav
          className="case-project-nav page-gutter"
          aria-label="Project navigation"
        >
          <Link href="/#projects" className="case-all-work">
            <span>RETURN TO</span>
            <strong>Selected work&nbsp; ↗</strong>
          </Link>
          <Link href={project.related.href} className="case-next-link">
            <span>EXPLORE ANOTHER</span>
            <strong>{project.related.title}&nbsp; →</strong>
          </Link>
        </nav>
        <footer className="case-footer page-gutter">
          <a href="/#home">
            AN<span>.</span>
          </a>
          <span>ANDHIKA NARADA PUTRA&nbsp; / &nbsp;FULL-STACK DEVELOPER</span>
          <a href="/#home">BACK TO TOP&nbsp; ↑</a>
        </footer>
      </main>
    </>
  );
}
