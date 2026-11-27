import React, { useState } from "react";
import { Helmet } from "react-helmet-async";
import {
  Scale,
  Shield,
  Landmark,
  FileCheck,
  BriefcaseBusiness,
  Building2,
  Car,
  ReceiptText,
  Menu,
  X,
  Phone,
  MessageCircle,
  MapPin,
  GraduationCap,
  CalendarDays,
  ArrowUpRight,
  ChevronLeft,
  ChevronRight,
  Plus,
  Minus,
  Handshake,
} from "lucide-react";

import {
  siteConfig as c,
  practiceAreas,
  courtForums,
  faqs,
  seoPages,
} from "./config/siteConfig";

const iconMap = {
  Scale,
  Shield,
  Landmark,
  FileCheck,
  BriefcaseBusiness,
  Building2,
  Car,
  ReceiptText,
};

const phoneNumbers = [
  { display: c.phoneDisplay, dial: c.phone },
  { display: c.phoneDisplay2, dial: c.phone2 },
];

function WhatsAppLink({ children, className = "btn btn-green", message }) {
  const text =
    message ||
    "Hello Advocate K. Ravi Kiran, I would like to make a general enquiry.";
  return (
    <a
      className={className}
      href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(text)}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
}

function Header() {
  const [open, setOpen] = useState(false);

  const links = [
    ["Home", "/"],
    ["About", "/#about"],
    ["Practice Areas", "/#practice"],
    ["Courts", "/#courts"],
    ["Highlights", "/#professional-highlights"],
    ["Gallery", "/#gallery"],
    ["Contact", "/#contact"],
  ];

  return (
    <header className="header">
      <a className="brand" href="/" aria-label="Advocate K. Ravi Kiran home">
        <span className="brand-mark">KR</span>
        <span>
          <b>K. RAVI KIRAN</b>
          <small>ADVOCATE</small>
        </span>
      </a>

      <button
        className="menu-toggle"
        onClick={() => setOpen((value) => !value)}
        aria-label="Toggle navigation"
        aria-expanded={open}
        type="button"
      >
        {open ? <X /> : <Menu />}
      </button>

      <nav className={open ? "nav open" : "nav"}>
        {links.map(([label, href]) => (
          <a key={label} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
        <a className="nav-cta" href="/#contact" onClick={() => setOpen(false)}>
          Contact <ArrowUpRight size={16} />
        </a>
      </nav>
    </header>
  );
}

function FloatingActions() {
  return (
    <div className="floating">
      <a
        className="float-wa"
        href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(
          "Hello Advocate K. Ravi Kiran, I would like to make an enquiry."
        )}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact on WhatsApp"
      >
        <MessageCircle />
      </a>
      <a
        className="float-call"
        href={`tel:${c.phone}`}
        aria-label={`Call ${c.phoneDisplay}`}
      >
        <Phone />
      </a>
    </div>
  );
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-inner">
        <div className="hero-photo-wrap">
          <img
            className="hero-photo"
            src={c.profileImage}
            alt="Advocate K. Ravi Kiran in professional advocate attire"
            fetchPriority="high"
          />
          <span className="photo-caption">ADVOCATE · VIJAYAWADA</span>
        </div>

        <div className="hero-copy">
          <div className="eyebrow">
            <span /> LEGAL PRACTICE · ANDHRA PRADESH
          </div>
          <h1>
            Advocate <em>K. Ravi Kiran</em>
          </h1>
          <p className="alias">Also known as Ravi Kiran Kumar Kolusu</p>
          <h2>Committed to Justice. Dedicated to Legal Representation.</h2>
          <p className="hero-description">
            Advocate K. Ravi Kiran is a practising advocate based in
            Vijayawada, Andhra Pradesh. His main practice is at the High Court
            of Andhra Pradesh, with professional practice also covering the
            High Court of Telangana. His stated areas of work include civil and
            criminal litigation, writ petitions, bail matters, service matters
            and other statutory proceedings.
          </p>

          <div className="hero-facts">
            <span>
              <GraduationCap /> B.A., LL.B.
            </span>
            <span>
              <CalendarDays /> Practising since 2003
            </span>
            <span>
              <MapPin /> Vijayawada, Andhra Pradesh
            </span>
          </div>

          <div className="hero-actions">
            <a className="btn btn-gold" href={`tel:${c.phone}`}>
              Call Advocate <Phone size={17} />
            </a>
            <a className="btn btn-outline" href={`tel:${c.phone2}`}>
              Alternate Number <Phone size={17} />
            </a>
            <a className="btn btn-outline" href="#practice">
              Explore Practice Areas
            </a>
          </div>

          <div className="hero-contact-numbers">
            <span>Contact:</span>
            {phoneNumbers.map((item) => (
              <a key={item.dial} href={`tel:${item.dial}`}>
                {item.display}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section className="section about" id="about">
      <div className="section-label">01 / PROFESSIONAL PROFILE</div>
      <div className="about-grid">
        <div>
          <h2 className="section-title">
            About <em>Advocate K. Ravi Kiran</em>
          </h2>
          <p>
            Advocate K. Ravi Kiran, also known as Ravi Kiran Kumar Kolusu, is a
            practising advocate based in Vijayawada, Andhra Pradesh. He holds a
            B.A., LL.B. degree from Smt. V.D. Siddhardha Law College,
            Vijayawada, and the supplied professional profile states that his
            legal practice began in 2003.
          </p>
          <p>
            <strong>
              His main practice is at the High Court of Andhra Pradesh.
            </strong>{" "}
            His professional practice information also refers to matters
            before the High Court of Telangana, along with proceedings before
            appropriate courts and legal forums, subject to jurisdiction and
            professional authorization.
          </p>
          <p>
            His stated professional responsibilities include serving as
            <strong>
              {" "}
              Standing Counsel for SAAP and the Unorganised Sector of Andhra
              Pradesh
            </strong>
            . His practice includes civil and criminal litigation, bail
            matters, service matters, property-related disputes and statutory
            proceedings.
          </p>
          <p>
            <strong>
              He handles all types of writ petition matters and is a trained
              mediator.
            </strong>{" "}
            His professional approach focuses on understanding legal issues,
            explaining relevant processes and assisting clients through
            appropriate legal representation and dispute-resolution processes.
          </p>
        </div>

        <div className="credential-card">
          <div className="credential-icon">
            <GraduationCap />
          </div>
          <span className="credential-kicker">EDUCATION</span>
          <h3>B.A., LL.B.</h3>
          <p>Smt. V.D. Siddhardha Law College, Vijayawada</p>
          <div className="gold-rule" />
          <span className="credential-kicker">PRACTICE COMMENCEMENT</span>
          <h3>2003</h3>
          <p>As stated in the supplied professional profile</p>
          <div className="gold-rule" />
          <span className="credential-kicker">MAIN COURT PRACTICE</span>
          <h3>High Court of AP</h3>
          <p>High Court of Andhra Pradesh</p>
        </div>
      </div>
    </section>
  );
}

function Practice() {
  return (
    <section className="section practice" id="practice">
      <div className="section-label">02 / LEGAL SERVICES</div>
      <div className="section-heading">
        <h2 className="section-title">
          Areas of <em>Practice</em>
        </h2>
        <p>
          Legal practice areas identified in the supplied professional profile.
        </p>
      </div>
      <div className="practice-grid">
        {practiceAreas.map((item, i) => {
          const Icon = iconMap[item.icon] || Scale;
          return (
            <article className="practice-card" key={item.title}>
              <div className="practice-icon">
                <Icon />
              </div>
              <span className="card-number">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}

function ProfessionalHighlights() {
  const highlights = [
    {
      title: "Main Practice at High Court of AP",
      description:
        "Advocate K. Ravi Kiran's main legal practice is at the High Court of Andhra Pradesh, handling matters before the Hon'ble High Court, subject to the nature of the case and applicable professional requirements.",
      Icon: Landmark,
    },
    {
      title: "High Court of Telangana",
      description:
        "The supplied professional information also identifies practice involving the High Court of Telangana. Representation in any matter remains subject to jurisdiction and professional authorization.",
      Icon: Landmark,
    },
    {
      title: "Standing Counsel for SAAP",
      description:
        "He serves as Standing Counsel for SAAP and the Unorganised Sector of Andhra Pradesh, as stated in the professional details supplied for this website.",
      Icon: BriefcaseBusiness,
    },
    {
      title: "Expertise in Writ Petitions",
      description:
        "His stated practice includes all types of writ petition matters, including appropriate constitutional, administrative and service-related proceedings.",
      Icon: FileCheck,
    },
    {
      title: "Trained Mediator",
      description:
        "He is a trained mediator, with professional training in mediation and alternative dispute resolution to support the resolution of disputes through appropriate processes.",
      Icon: Handshake,
    },
  ];

  return (
    <section className="section professional-section" id="professional-highlights">
      <div className="section-label">03 / PROFESSIONAL EXPERIENCE</div>
      <div className="section-heading">
        <h2 className="section-title">
          Professional <em>Highlights</em>
        </h2>
        <p>
          Professional practice, responsibilities and experience as provided
          in the advocate's profile.
        </p>
      </div>

      <div className="practice-grid">
        {highlights.map(({ title, description, Icon }, index) => (
          <article className="practice-card highlight-card" key={title}>
            <div className="practice-icon">
              <Icon />
            </div>
            <span className="card-number">
              {String(index + 1).padStart(2, "0")}
            </span>
            <h3>{title}</h3>
            <p>{description}</p>
          </article>
        ))}
      </div>

      <p className="professional-summary">
        <strong>Professional summary:</strong> Advocate K. Ravi Kiran is based
        in Vijayawada, Andhra Pradesh, and identifies the High Court of Andhra
        Pradesh as his main practice forum. His supplied profile also records
        practice involving the High Court of Telangana, Standing Counsel
        responsibilities for SAAP and the Unorganised Sector of Andhra Pradesh,
        expertise in writ petition matters and training as a mediator.
      </p>
    </section>
  );
}

function Courts() {
  return (
    <section className="courts" id="courts">
      <div className="courts-inner">
        <div>
          <div className="section-label light">04 / COURT PRESENCE</div>
          <h2 className="section-title light-title">
            Courts & Legal <em>Forums</em>
          </h2>
          <p className="courts-intro">
            The supplied professional information identifies the High Court
            of Andhra Pradesh as the main practice forum and also refers to
            the High Court of Telangana. Other court forums are subject to
            jurisdiction, engagement and professional authorization.
          </p>
        </div>
        <div className="court-list">
          {courtForums.map((court, i) => (
            <div className="court-item" key={court}>
              <span>{String(i + 1).padStart(2, "0")}</span>
              {court}
              <ArrowUpRight size={17} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Gallery() {
  const [active, setActive] = useState(-1);
  const gallery = Array.isArray(c.gallery) ? c.gallery : [];

  const change = (nextIndex) => {
    if (gallery.length === 0) return;
    setActive((nextIndex + gallery.length) % gallery.length);
  };

  return (
    <section className="section gallery-section" id="gallery">
      <div className="section-label">05 / PHOTOGRAPHS</div>
      <div className="section-heading">
        <h2 className="section-title">
          Professional <em>Gallery</em>
        </h2>
        <p>Professional photographs and moments.</p>
      </div>

      <div className="gallery-grid">
        {gallery.map((img, index) => (
          <button
            className="gallery-item"
            key={img.src || index}
            onClick={() => setActive(index)}
            aria-label={`Open gallery image ${index + 1}`}
            type="button"
          >
            <img
              src={img.src}
              alt={img.alt || `Gallery photograph ${index + 1}`}
              loading="lazy"
              decoding="async"
              onError={(event) => {
                event.currentTarget.classList.add("image-load-error");
              }}
            />
            <span>{String(index + 1).padStart(2, "0")}</span>
          </button>
        ))}
      </div>

      {active >= 0 && gallery[active] && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label="Gallery image viewer"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(-1);
          }}
        >
          <button
            className="lightbox-close"
            onClick={() => setActive(-1)}
            aria-label="Close gallery"
            type="button"
          >
            <X />
          </button>
          <button
            className="lightbox-prev"
            onClick={() => change(active - 1)}
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft />
          </button>
          <img
            src={gallery[active].src}
            alt={gallery[active].alt || "Gallery photograph"}
          />
          <button
            className="lightbox-next"
            onClick={() => change(active + 1)}
            aria-label="Next image"
            type="button"
          >
            <ChevronRight />
          </button>
        </div>
      )}
    </section>
  );
}

function Contact() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    matter: "Civil Litigation",
    message: "",
  });
  const [error, setError] = useState("");

  function submit(event) {
    event.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) {
      setError("Please complete your name, phone number and brief message.");
      return;
    }

    if (!/^[+0-9()\-\s]{8,18}$/.test(form.phone.trim())) {
      setError("Please enter a valid phone number.");
      return;
    }

    setError("");
    const msg = [
      "Hello Advocate K. Ravi Kiran, I would like to make an enquiry.",
      "",
      `Name: ${form.name.trim()}`,
      `Phone: ${form.phone.trim()}`,
      `Matter: ${form.matter}`,
      `Brief details: ${form.message.trim()}`,
      "",
      "Please let me know how I can proceed.",
    ].join("\n");

    const url = `https://wa.me/${c.whatsapp}?text=${encodeURIComponent(msg)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  }

  return (
    <section className="section contact-section" id="contact">
      <div className="section-label">06 / GET IN TOUCH</div>
      <div className="contact-grid">
        <div>
          <h2 className="section-title">
            Contact <em>Advocate</em>
          </h2>
          <p className="contact-lead">
            For general enquiries about legal representation, use either of
            the contact numbers below. You can call or send an enquiry through
            WhatsApp.
          </p>

          <div className="contact-detail">
            <Phone />
            <div>
              <small>PRIMARY CONTACT NUMBER</small>
              <a href={`tel:${c.phone}`}>{c.phoneDisplay}</a>
            </div>
          </div>

          <div className="contact-detail">
            <Phone />
            <div>
              <small>ALTERNATE CONTACT NUMBER</small>
              <a href={`tel:${c.phone2}`}>{c.phoneDisplay2}</a>
            </div>
          </div>

          <div className="contact-detail">
            <MapPin />
            <div>
              <small>LOCATION</small>
              <span>Vijayawada, Andhra Pradesh, India</span>
            </div>
          </div>

          <WhatsAppLink>
            WhatsApp Enquiry <ArrowUpRight size={17} />
          </WhatsAppLink>
        </div>

        <form className="contact-form" onSubmit={submit}>
          <h3>Send an Enquiry</h3>
          <p>
            Submitting opens WhatsApp with your details prefilled. You must
            press Send in WhatsApp to deliver the message.
          </p>

          <label>
            Full name
            <input
              value={form.name}
              onChange={(event) =>
                setForm({ ...form, name: event.target.value })
              }
              required
              placeholder="Your name"
              autoComplete="name"
            />
          </label>

          <label>
            Phone number
            <input
              value={form.phone}
              onChange={(event) =>
                setForm({ ...form, phone: event.target.value })
              }
              required
              placeholder="Your contact number"
              autoComplete="tel"
            />
          </label>

          <label>
            Legal matter
            <select
              value={form.matter}
              onChange={(event) =>
                setForm({ ...form, matter: event.target.value })
              }
            >
              {[
                "Civil Litigation",
                "Criminal Litigation",
                "Writ Petition",
                "Bail Matter",
                "Service Matter",
                "Property / Land Matter",
                "Motor Vehicle Matter",
                "NI Act Matter",
                "Other",
              ].map((item) => (
                <option key={item} value={item}>
                  {item}
                </option>
              ))}
            </select>
          </label>

          <label>
            Brief message
            <textarea
              value={form.message}
              onChange={(event) =>
                setForm({ ...form, message: event.target.value })
              }
              required
              rows={4}
              placeholder="Briefly describe your enquiry. Avoid confidential details."
            />
          </label>

          {error && (
            <p className="form-error" role="alert">
              {error}
            </p>
          )}

          <button className="btn btn-gold form-submit" type="submit">
            Continue to WhatsApp <ArrowUpRight size={17} />
          </button>
          <small className="privacy-note">
            Please do not include passwords, financial credentials or
            unnecessary sensitive case details.
          </small>
        </form>
      </div>
    </section>
  );
}

function FAQ() {
  const [open, setOpen] = useState(0);

  return (
    <section className="section faq-section">
      <div className="section-label">07 / INFORMATION</div>
      <div className="faq-grid">
        <h2 className="section-title">
          Frequently Asked <em>Questions</em>
        </h2>
        <div>
          {faqs.map(([question, answer], index) => (
            <div className="faq-item" key={question}>
              <button
                onClick={() => setOpen(open === index ? -1 : index)}
                aria-expanded={open === index}
                type="button"
              >
                {question}
                {open === index ? <Minus /> : <Plus />}
              </button>
              {open === index && <p>{answer}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <a className="brand footer-brand" href="/">
            <span className="brand-mark">KR</span>
            <span>
              <b>K. RAVI KIRAN</b>
              <small>ADVOCATE</small>
            </span>
          </a>
          <p>
            Professional profile and legal practice information for Advocate
            K. Ravi Kiran, Vijayawada, Andhra Pradesh. Main practice at the
            High Court of Andhra Pradesh.
          </p>
        </div>

        <div>
          <h4>Explore</h4>
          <a href="/#about">About</a>
          <a href="/#practice">Practice Areas</a>
          <a href="/#professional-highlights">Professional Highlights</a>
          <a href="/#courts">Courts</a>
          <a href="/#gallery">Gallery</a>
          <a
            href={c.facebook}
            target="_blank"
            rel="noopener noreferrer"
          >
            Facebook Profile
          </a>
        </div>

        <div>
          <h4>Contact</h4>
          <a href={`tel:${c.phone}`}>{c.phoneDisplay}</a>
          <a href={`tel:${c.phone2}`}>{c.phoneDisplay2}</a>
          <a
            href={`https://wa.me/${c.whatsapp}`}
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp Enquiry
          </a>
          <span>Vijayawada, Andhra Pradesh, India</span>
          <a href="/#contact">Enquiry form</a>
        </div>
      </div>

      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} Advocate K. Ravi Kiran. All rights
          reserved.
        </span>
        <span>
          General information only · No legal advice or engagement is created
          by website use.
        </span>
        <span>
          Website by MA Innovex Technologies
        </span>
      </div>
    </footer>
  );
}

function PageContent({ page }) {
  if (!page || page.path === "/") {
    return (
      <main>
        <Hero />
        <About />
        <ProfessionalHighlights />
        <Practice />
        <Courts />
        <Gallery />
        <FAQ />
        <Contact />
      </main>
    );
  }

  return (
    <main className="seo-page">
      <div className="section-label">PROFESSIONAL INFORMATION · VIJAYAWADA</div>
      <h1>{page.heading}</h1>
      <p className="seo-intro">{page.intro}</p>
      <p>
        Advocate K. Ravi Kiran (Ravi Kiran Kumar Kolusu) is identified in the
        supplied profile as a B.A., LL.B. advocate based in Vijayawada, Andhra
        Pradesh, with practice commencing in 2003. His main practice is at the
        High Court of Andhra Pradesh. The supplied profile also identifies
        Standing Counsel responsibilities for SAAP and the Unorganised Sector
        of Andhra Pradesh, expertise in writ petitions and training as a
        mediator.
      </p>
      <p>
        For general enquiries, contact {c.phoneDisplay} or {c.phoneDisplay2}.
      </p>
      <a className="btn btn-green" href="/#contact">
        Contact details <ArrowUpRight />
      </a>
      <div className="seo-related">
        <h2>Related information</h2>
        <a href="/advocate-k-ravi-kiran-vijayawada/">Professional profile</a>
        <a href="/civil-lawyer-vijayawada/">Civil litigation</a>
        <a href="/criminal-lawyer-vijayawada/">Criminal litigation</a>
        <a href="/bail-advocate-vijayawada/">Bail matters</a>
        <a href="/writ-petition-advocate/">Writ petitions</a>
        <a href="/service-matter-advocate/">Service matters</a>
        <a href="/property-dispute-lawyer-vijayawada/">
          Property and land matters
        </a>
      </div>
    </main>
  );
}

export default function App({ pagePath = "/" }) {
  const page = seoPages.find((item) => item.path === pagePath) || seoPages[0];
  const canonical = `${c.siteUrl.replace(/\/$/, "")}${page.path}`;

  const personSchema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: c.name,
    alternateName: c.alternateName,
    jobTitle: "Advocate",
    telephone: [c.phoneDisplay, c.phoneDisplay2],
    image: `${c.siteUrl.replace(/\/$/, "")}${c.profileImage}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Vijayawada",
      addressRegion: "Andhra Pradesh",
      addressCountry: "IN",
    },
    sameAs: [c.facebook],
  };

  return (
    <>
      <Helmet>
        <title>{page.title}</title>
        <meta name="description" content={page.description} />
        <meta name="robots" content="index,follow,max-image-preview:large" />
        <link rel="canonical" href={canonical} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={page.title} />
        <meta property="og:description" content={page.description} />
        <meta property="og:url" content={canonical} />
        <meta
          property="og:image"
          content={`${c.siteUrl.replace(/\/$/, "")}${c.profileImage}`}
        />
        <meta name="twitter:card" content="summary_large_image" />
        <script type="application/ld+json">
          {JSON.stringify(personSchema)}
        </script>
      </Helmet>
      <Header />
      <PageContent page={page} />
      <Footer />
      <FloatingActions />
    </>
  );
}
