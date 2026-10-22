"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const PROFILE_IMAGE_PATH = "/andhika-profile.jpg";

const navigationLinks = [
  { label: "Overview", href: "#home" },
  { label: "Selected Work", href: "#projects" },
  { label: "About Me", href: "#about" },
  { label: "Tech Stack", href: "#stack" },
  { label: "Background", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

function SidebarContent({
  activeSection,
  onNavigate,
  pathname,
}: {
  activeSection: string | null;
  onNavigate?: () => void;
  pathname: string;
}) {
  const [imageFailed, setImageFailed] = useState(false);
  const sectionHref = (href: string) => (pathname === "/" ? href : `/${href}`);

  return (
    <>
      <div className="sidebar-profile">
        <div className="portrait-frame">
          {!imageFailed ? (
            <Image
              src={PROFILE_IMAGE_PATH}
              alt="Portrait of Andhika Narada Putra"
              width={240}
              height={240}
              sizes="(max-width: 1023px) 72px, 76px"
              className="portrait-image"
              onError={() => setImageFailed(true)}
            />
          ) : (
            <span className="portrait-monogram" aria-hidden="true">
              AN<span>.</span>
            </span>
          )}
        </div>
        <p className="profile-name">Andhika Narada Putra</p>
        <p className="profile-role">Full-Stack Developer</p>
      </div>

      <nav className="sidebar-navigation" aria-label="Portfolio sections">
        <p className="sidebar-kicker">Navigate</p>
        {navigationLinks.map((link, index) => (
          <a
            href={sectionHref(link.href)}
            key={link.href}
            onClick={onNavigate}
            aria-current={activeSection === link.href ? "location" : undefined}
          >
            <span className="sidebar-link-index">0{index + 1}</span>
            <span>{link.label}</span>
            <span className="sidebar-link-arrow" aria-hidden="true">
              ↗
            </span>
          </a>
        ))}
      </nav>

      <div className="sidebar-focus">
        <p className="sidebar-kicker">Current focus</p>
        <p>Frontend interfaces, full-stack systems, digital products.</p>
        <p className="sidebar-availability">
          Open to developer roles and freelance work.
        </p>
      </div>

      <div className="sidebar-tech">
        <p className="sidebar-kicker">In the toolkit</p>
        <ul aria-label="Selected technologies">
          <li>Next.js</li>
          <li>React</li>
          <li>Laravel</li>
          <li>Supabase</li>
        </ul>
      </div>

      <nav className="sidebar-social" aria-label="Social profiles">
        <p className="sidebar-kicker">Elsewhere</p>
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

      <Link
        className="sidebar-cta"
        href={sectionHref("#contact")}
        onClick={onNavigate}
      >
        Let’s talk <span aria-hidden="true">↗</span>
      </Link>
    </>
  );
}

export default function SiteNavigation() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection(null);
      return;
    }

    const sections = navigationLinks
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => section !== null);

    function syncFromHash() {
      const hash = window.location.hash;
      if (navigationLinks.some((link) => link.href === hash)) {
        setActiveSection(hash);
      }
    }

    const visibleSections = new Set<HTMLElement>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const section = entry.target as HTMLElement;
          if (entry.isIntersecting) visibleSections.add(section);
          else visibleSections.delete(section);
        }

        if (visibleSections.size === 0) return;

        const activationLine = window.innerHeight * 0.18;
        const current = [...visibleSections].sort(
          (left, right) =>
            Math.abs(left.getBoundingClientRect().top - activationLine) -
            Math.abs(right.getBoundingClientRect().top - activationLine),
        )[0];

        if (current) {
          const nextSection = `#${current.id}`;
          setActiveSection((active) =>
            active === nextSection ? active : nextSection,
          );
        }
      },
      { rootMargin: "-18% 0px -72% 0px", threshold: 0 },
    );

    syncFromHash();
    for (const section of sections) observer.observe(section);
    window.addEventListener("hashchange", syncFromHash);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", syncFromHash);
    };
  }, [pathname]);

  useEffect(() => {
    if (!isOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
        menuButtonRef.current?.focus();
        return;
      }

      if (event.key !== "Tab" || !drawerRef.current) return;

      const focusable = drawerRef.current.querySelectorAll<HTMLElement>(
        "a[href], button:not([disabled])",
      );
      const first = focusable.item(0);
      const last = focusable.item(focusable.length - 1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    const desktopViewport = window.matchMedia("(min-width: 1024px)");
    function handleViewportChange(event: MediaQueryListEvent) {
      if (event.matches) setIsOpen(false);
    }

    document.addEventListener("keydown", handleKeyDown);
    desktopViewport.addEventListener("change", handleViewportChange);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      desktopViewport.removeEventListener("change", handleViewportChange);
      document.body.style.overflow = previousOverflow;
    };
  }, [isOpen]);

  function closeDrawer() {
    setIsOpen(false);
    menuButtonRef.current?.focus();
  }

  return (
    <>
      <aside className="desktop-sidebar" aria-label="Portfolio sidebar">
        <SidebarContent
          activeSection={pathname === "/" ? activeSection : "#projects"}
          pathname={pathname}
        />
      </aside>

      <header className="mobile-topbar">
        <a
          className="mobile-brand"
          href={pathname === "/" ? "#home" : "/#home"}
          aria-label="Overview, home"
        >
          AN<span aria-hidden="true">.</span>
        </a>
        <p>Andhika Narada Putra</p>
        <button
          className="menu-toggle"
          type="button"
          aria-expanded={isOpen}
          aria-controls={isOpen ? "mobile-navigation-drawer" : undefined}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          onClick={() => setIsOpen((open) => !open)}
          ref={menuButtonRef}
        >
          <span>{isOpen ? "Close" : "Menu"}</span>
          <span className="menu-icon" aria-hidden="true">
            {isOpen ? "×" : "☰"}
          </span>
        </button>
      </header>

      {isOpen && (
        <div className="mobile-drawer-layer">
          <button
            className="drawer-backdrop"
            type="button"
            aria-label="Close navigation menu"
            onClick={closeDrawer}
          />
          <aside
            className="mobile-drawer"
            id="mobile-navigation-drawer"
            role="dialog"
            aria-modal="true"
            aria-label="Portfolio navigation"
            ref={drawerRef}
          >
            <button
              className="drawer-close"
              type="button"
              onClick={closeDrawer}
              ref={closeButtonRef}
            >
              Close menu <span aria-hidden="true">×</span>
            </button>
            <SidebarContent
              activeSection={pathname === "/" ? activeSection : "#projects"}
              onNavigate={closeDrawer}
              pathname={pathname}
            />
          </aside>
        </div>
      )}
    </>
  );
}
