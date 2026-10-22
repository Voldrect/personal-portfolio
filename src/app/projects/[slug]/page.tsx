import type { Metadata } from "next";
import { notFound } from "next/navigation";
import "../case-study.css";
import CaseStudy, { type CaseStudyContent } from "../case-study";

const projects: Record<string, CaseStudyContent> = {
  otosurya: {
    slug: "otosurya",
    number: "01",
    title: "OTOSURYA",
    category: "Automotive / Digital Showroom",
    summary:
      "A digital automotive showroom for browsing vehicle listings, with structured car information and inventory-management functionality.",
    objective:
      "The public flow is organized around a practical question: which available vehicle fits what someone is looking for? The catalog makes that search filterable, then carries the visitor into a structured unit detail page.",
    objectiveNote:
      "This describes the implemented interface and its intended use. The local captures document source behavior; they do not establish a deployed result or measured user outcome.",
    journeyTitle: "From a broad search to one unit.",
    journeyIntro:
      "The catalog and detail routes form a clear public path, while inventory records remain the source for the information shown along the way.",
    journeySteps: [
      {
        title: "Narrow the catalog",
        detail:
          "Search and filter controls cover make, body type, transmission, year, and budget. Sorting and pagination are reflected in the URL, so the server route can fetch the matching page of available cars.",
      },
      {
        title: "Review a vehicle",
        detail:
          "Each listing links to a detail route keyed by its record ID. That page presents vehicle attributes, price, ordered photos when available, and related available units.",
      },
      {
        title: "Choose a next step",
        detail:
          "The detail page offers a sales enquiry and a trade-in path. The enquiry form writes a lead record before opening WhatsApp; this describes the code path, not a claim about conversion or delivery outcomes.",
      },
    ],
    capabilities: [
      {
        title: "Browse listings",
        detail:
          "The catalog query filters records to available units and supports search across make, model, and variant.",
      },
      {
        title: "Structured details",
        detail:
          "The detail route presents fields including year, transmission, mileage, color, tax status, condition, service record, ownership, and plate region when values exist.",
      },
      {
        title: "Inventory management",
        detail:
          "A separate inventory interface can create and update car records, upload and remove ordered images, and manage status and featured state.",
      },
    ],
    implementation: [
      {
        label: "FRAMEWORK",
        value: "Next.js",
        detail: "Web application framework",
      },
      {
        label: "LANGUAGE",
        value: "JavaScript",
        detail: "Language used in the inspected application files",
      },
      {
        label: "INTERFACE",
        value: "Tailwind CSS",
        detail: "Utility classes in the inspected UI",
      },
      {
        label: "PLATFORM",
        value: "Supabase",
        detail:
          "Server and browser clients query the cars and lead data used by the routes",
      },
    ],
    implementationNote:
      "The local source uses Supabase clients for catalog, detail, inventory, image, and lead operations. The repository contains targeted SQL query files, but not the base schema for cars and car_images; no column constraints or relationship definitions are inferred here. The inspected application files are JavaScript, not TypeScript.",
    considerations: [
      "Catalog filters are submitted as URL parameters and applied in the server route; available inventory is also queried separately to build filter options.",
      "Vehicle image records are sorted by sort_order for listing and detail galleries. The UI contains an empty-photo fallback when an image is unavailable.",
      "The admin route checks for auth claims and an is_admin RPC result before listing inventory. The form repeats an admin check before saving changes.",
    ],
    closing:
      "The strongest through-line is the connection between public discovery and the records managed behind it: catalog filters, detail content, images, and enquiries all use the vehicle record as their shared point of reference.",
    preview: "automotive",
    screenshot: "/projects/otosurya-home.jpg",
    screenshotAlt:
      "Local development capture of the OTOSURYA home page, showing the showroom, vehicle search, and inventory interface.",
    gallery: [
      {
        src: "/projects/otosurya-catalog.jpg",
        width: 1440,
        height: 1100,
        alt: "Local development capture of the public OTOSURYA catalog with search filters and vehicle listings.",
        caption: "Vehicle catalog / public browsing route",
        layout: "wide",
      },
      {
        src: "/projects/otosurya-vehicle-detail.jpg",
        width: 1440,
        height: 1100,
        alt: "Local development capture of a Toyota Avanza public detail page with vehicle information and contact options.",
        caption: "Vehicle detail / public listing",
        layout: "narrow",
      },
    ],
    technologies: ["Next.js", "JavaScript", "Tailwind CSS", "Supabase"],
    related: { title: "CBS Guard", href: "/projects/cbs-guard" },
  },
  "cbs-guard": {
    slug: "cbs-guard",
    number: "02",
    title: "CBS GUARD",
    category: "Security Services / Web Development",
    summary:
      "A professional web presence for security services, with service content and administrative management.",
    objective:
      "The public home page brings the security-services offer into a single, navigable presentation. Its service section is populated from active service records rather than fixed copy in the route.",
    objectiveNote:
      "The source confirms this content flow and its management screens. It does not establish business impact, deployment status, or visitor outcomes.",
    journeyTitle: "A home page organized for scanning.",
    journeyIntro:
      "The public site is a single-page presentation with clear anchors. Its service information sits within the larger home-page narrative rather than on a separate public detail route.",
    journeySteps: [
      {
        title: "Start with the introduction",
        detail:
          "The home page opens with a hero and navigation links to sections including About, Services, Projects, and Contact.",
      },
      {
        title: "Explore active services",
        detail:
          "The root route loads active Service records ordered by sort_order and title. The Blade view presents each service title and description in the Services section.",
      },
      {
        title: "Maintain the service content",
        detail:
          "An authenticated /admin/services resource provides index, create, edit, update, and delete actions for service records.",
      },
    ],
    capabilities: [
      {
        title: "Security services",
        detail:
          "The home page groups the introduction, About, Services, Why Us, Clients, Projects, and Contact into anchored sections.",
      },
      {
        title: "Service content",
        detail:
          "The public Services section renders active records with title and optional description, ordered by configured position and then title.",
      },
      {
        title: "Administrative management",
        detail:
          "The Laravel resource supports service CRUD, active state, ordering, descriptions, and optional image handling.",
      },
    ],
    implementation: [
      { label: "FRAMEWORK", value: "Laravel", detail: "Application framework" },
      {
        label: "LANGUAGE",
        value: "PHP",
        detail: "Server-side application language",
      },
      {
        label: "TEMPLATES",
        value: "Blade",
        detail: "Home page and service-management views",
      },
    ],
    implementationNote:
      "The public root route loads active services through the Service model and renders pages.home. The /admin/services resource is inside the auth middleware group. Service records have title, unique slug, description, image path, is_active, sort_order, and timestamps in the inspected migrations. The code reviewed does not establish deployment status or business outcomes.",
    considerations: [
      "The public page filters inactive services before rendering; ordering is explicit in the route query.",
      "The controller validates service titles and descriptions, and handles optional image replacement or removal through the public storage disk.",
      "The service-management route is grouped behind Laravel's auth middleware. This describes route configuration only, not a broader security assessment.",
    ],
    closing:
      "The implementation connects a section-based public presentation to a focused content workflow: service records are ordered and filtered before display, then maintained through Laravel's resource controller and Blade forms.",
    preview: "security",
    screenshot: "/projects/cbs-guard-home.jpg",
    screenshotAlt:
      "Local development capture of the CBS Guard home page, showing its security services introduction and navigation.",
    gallery: [
      {
        src: "/projects/cbs-guard-services.jpg",
        width: 1440,
        height: 957,
        alt: "Local development capture of the CBS Guard services section with service names and descriptions.",
        caption: "Service information / public home page section",
        layout: "center",
      },
    ],
    technologies: ["Laravel", "PHP", "Blade"],
    related: { title: "OTOSURYA", href: "/projects/otosurya" },
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export const dynamicParams = false;

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) return {};

  return {
    title: `${project.title} — Project Case Study | Andhika Narada Putra`,
    description: project.summary,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];

  if (!project) notFound();

  return <CaseStudy project={project} />;
}
