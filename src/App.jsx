import React, { useState } from "react";

import { Helmet, HelmetProvider } from "react-helmet-async";
import {

  Scale, Shield, Landmark, FileCheck, BriefcaseBusiness, Building2,

  Car, ReceiptText, Menu, X, Phone, MessageCircle, MapPin, GraduationCap,

  CalendarDays, ArrowUpRight, ChevronLeft, ChevronRight, Plus, Minus

} from "lucide-react";

import { siteConfig as c, practiceAreas, courtForums, faqs, seoPages } from "./config/siteConfig";

const iconMap = { Scale, Shield, Landmark, FileCheck, BriefcaseBusiness, Building2, Car, ReceiptText };

function Header() {

  const [open, setOpen] = useState(false);

  const links = [["Home", "/"], ["About", "/#about"], ["Practice Areas", "/#practice"], ["Courts", "/#courts"], ["Gallery", "/#gallery"], ["Contact", "/#contact"]];

  return <header className="header">

    <a className="brand" href="/" aria-label="Advocate K. Ravi Kiran home"><span className="brand-mark">KR</span><span><b>K. RAVI KIRAN</b><small>ADVOCATE</small></span></a>

    <button className="menu-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>

    <nav className={open ? "nav open" : "nav"}>{links.map(([label, href]) => <a key={label} href={href} onClick={() => setOpen(false)}>{label}</a>)}<a className="nav-cta" href="tel:+919491034572">Contact <ArrowUpRight size={16}/></a></nav>

  </header>;

}

function FloatingActions() {

  return <div className="floating"><a className="float-wa" href={`https://wa.me/${c.whatsapp}?text=${encodeURIComponent("Hello Advocate K. Ravi Kiran, I would like to make an enquiry.")}`} target="_blank" rel="noreferrer" aria-label="Contact on WhatsApp"><MessageCircle/></a><a className="float-call" href={`tel:${c.phone}`} aria-label="Call Advocate K. Ravi Kiran"><Phone/></a></div>;

}

function Hero() {

  return <section className="hero" id="home"><div className="hero-inner">

    <div className="hero-photo-wrap"><img className="hero-photo" src={c.profileImage} alt="Advocate K. Ravi Kiran in professional advocate attire" fetchpriority="high"/><span className="photo-caption">ADVOCATE · VIJAYAWADA</span></div>

    <div className="hero-copy"><div className="eyebrow"><span/> LEGAL PRACTICE · ANDHRA PRADESH</div><h1>Advocate <em>K. Ravi Kiran</em></h1><p className="alias">Also known as Ravi Kiran Kumar Kolusu</p><h2>Committed to Justice. Dedicated to Legal Representation.</h2><p className="hero-description">A practising advocate based in Vijayawada, Andhra Pradesh, with practice information covering civil, criminal, writ, bail, service and other statutory matters.</p>

      <div className="hero-facts"><span><GraduationCap/> B.A., LL.B.</span><span><CalendarDays/> Practising since 2003</span><span><MapPin/> Vijayawada, Andhra Pradesh</span></div>

      <div className="hero-actions"><a className="btn btn-gold" href="tel:+919491034572">Call Advocate <Phone size={17}/></a><a className="btn btn-outline" href="#practice">Explore Practice Areas</a></div><p className="demo-notice" role="note">Demo notice: This website is currently a preview. The Call and WhatsApp options are shown for demonstration; please verify the contact details before relying on them.</p>

    </div>

  </div></section>;

}

function About() {

  return <section className="section about" id="about"><div className="section-label">01 / PROFESSIONAL PROFILE</div><div className="about-grid"><div><h2 className="section-title">About <em>Advocate K. Ravi Kiran</em></h2><p>Advocate K. Ravi Kiran, also listed as Ravi Kiran Kumar Kolusu, is a practising advocate based in Vijayawada, Andhra Pradesh.</p><p>He holds a B.A., LL.B. degree from Smt. V.D. Siddhardha Law College, Vijayawada, and the supplied profile states that his legal practice began in 2003.</p><p>His practice involves civil and criminal litigation, writ petitions, bail matters, service matters and other statutory proceedings. The supplied information also identifies proceedings involving courts in Vijayawada and the High Court of Andhra Pradesh.</p><p>His professional approach focuses on understanding legal issues, explaining relevant processes and assisting clients through appropriate legal representation.</p></div><div className="credential-card"><div className="credential-icon"><GraduationCap/></div><span className="credential-kicker">EDUCATION</span><h3>B.A., LL.B.</h3><p>Smt. V.D. Siddhardha Law College, Vijayawada</p><div className="gold-rule"/><span className="credential-kicker">PRACTICE COMMENCEMENT</span><h3>2003</h3><p>As stated in the supplied profile information</p></div></div></section>;

}

function Practice() {

  return <section className="section practice" id="practice"><div className="section-label">02 / LEGAL SERVICES</div><div className="section-heading"><h2 className="section-title">Areas of <em>Practice</em></h2><p>Legal practice areas identified in the supplied professional profile.</p></div><div className="practice-grid">{practiceAreas.map((item, i) => { const Icon = iconMap[item.icon]; return <article className="practice-card" key={item.title}><div className="practice-icon"><Icon/></div><span className="card-number">0{i+1}</span><h3>{item.title}</h3><p>{item.description}</p></article>; })}</div></section>;

}

function Courts() {

  return <section className="courts" id="courts"><div className="courts-inner"><div><div className="section-label light">03 / COURT PRESENCE</div><h2 className="section-title light-title">Courts & Legal <em>Forums</em></h2><p className="courts-intro">The supplied profile and case information refer to the following court forums. Representation is subject to jurisdiction, engagement and professional authorization.</p></div><div className="court-list">{courtForums.map((court, i) => <div className="court-item" key={court}><span>0{i+1}</span>{court}<ArrowUpRight size={17}/></div>)}</div></div></section>;

}

function Gallery() {
const [active, setActive] = useState(-1);

  // Images are stored in public/images/gallery/.
const gallery = [
{ src: "/images/gallery/img1.jpeg", alt: "Professional gallery photograph 1" },
{ src: "/images/gallery/img2.jpeg", alt: "Professional gallery photograph 2" },
{ src: "/images/gallery/img3.jpeg", alt: "Professional gallery photograph 3" },
{ src: "/images/gallery/img4.jpeg", alt: "Professional gallery photograph 4" },
{ src: "/images/gallery/img5.jpeg", alt: "Professional gallery photograph 5" },
{ src: "/images/gallery/img6.jpeg", alt: "Professional gallery photograph 6" },
{ src: "/images/gallery/img7.jpeg", alt: "Professional gallery photograph 7" }
];

  const change = (n) => {
setActive((n + gallery.length) % gallery.length);
};

  return <section className="section gallery-section" id="gallery">
<div className="section-label">04 / PHOTOGRAPHS</div>
<div className="section-heading">
<h2 className="section-title">Professional <em>Gallery</em></h2>
<p>Professional photographs and moments.</p>
</div>
<div className="gallery-grid">
  {gallery.map((img, i) => (
    <button
      className="gallery-item"
      key={img.src}
      onClick={() => setActive(i)}
      aria-label={`Open gallery image ${i + 1}`}
      type="button"
    >
      <img
        src={img.src}
        alt={img.alt}
        loading="lazy"
        onError={(e) => {
          console.error("Gallery image could not be loaded:", img.src);
          e.currentTarget.classList.add("image-load-error");
        }}
      />
      <span>{String(i + 1).padStart(2, "0")}</span>
    </button>
  ))}
</div>

{active >= 0 && (
  <div className="lightbox" role="dialog" aria-modal="true" aria-label="Gallery image viewer">
    <button className="lightbox-close" onClick={() => setActive(-1)} aria-label="Close gallery" type="button"><X /></button>
    <button className="lightbox-prev" onClick={() => change(active - 1)} aria-label="Previous image" type="button"><ChevronLeft /></button>
    <img src={gallery[active].src} alt={gallery[active].alt} />
    <button className="lightbox-next" onClick={() => change(active + 1)} aria-label="Next image" type="button"><ChevronRight /></button>
  </div>
)}

  </section>;
}function Contact() {

  const [form, setForm] = useState({ name: "", phone: "", matter: "Civil Litigation", message: "" });

  const [error, setError] = useState("");

  function submit(e) {

    e.preventDefault();

    if (!form.name.trim() || !form.phone.trim() || !form.message.trim()) { setError("Please complete your name, phone number and brief message."); return; }

    if (!/^[+0-9()\-\s]{8,18}$/.test(form.phone)) { setError("Please enter a valid phone number."); return; }

    setError("");

    const msg = `Hello Advocate K. Ravi Kiran, I would like to make an enquiry.\\n\\nName: ${form.name}\\nPhone: ${form.phone}\\nMatter: ${form.matter}\\nBrief details: ${form.message}\\n\\nPlease let me know how I can proceed.`;

    window.open(`https://wa.me/${c.whatsapp}?text=${encodeURIComponent(msg)}`, "_blank", "noopener,noreferrer");

  }

  return <section className="section contact-section" id="contact"><div className="section-label">05 / GET IN TOUCH</div><div className="contact-grid"><div><h2 className="section-title">Contact <em>Advocate</em></h2><p className="contact-lead">For general enquiries about legal representation, use the contact details below.</p><div className="contact-detail"><Phone/><div><small>PHONE</small><a href={`tel:${c.phone}`}>{c.phoneDisplay}</a></div></div><div className="contact-detail"><MapPin/><div><small>LOCATION</small><span>Vijayawada, Andhra Pradesh, India</span></div></div><a className="btn btn-green" href={`https://wa.me/${c.whatsapp}`} target="_blank" rel="noreferrer">WhatsApp Enquiry <ArrowUpRight size={17}/></a><p className="demo-notice" role="note">Demo notice: This website is currently a preview. The Call and WhatsApp options are shown for demonstration; please verify the contact details before relying on them.</p></div>

    <form className="contact-form" onSubmit={submit}><h3>Send an Enquiry</h3><p>Submitting opens WhatsApp with your details prefilled. You must press Send in WhatsApp to deliver it.</p><label>Full name<input value={form.name} onChange={e=>setForm({...form,name:e.target.value})} required placeholder="Your name"/></label><label>Phone number<input value={form.phone} onChange={e=>setForm({...form,phone:e.target.value})} required placeholder="Your contact number"/></label><label>Legal matter<select value={form.matter} onChange={e=>setForm({...form,matter:e.target.value})}>{["Civil Litigation","Criminal Litigation","Writ Petition","Bail Matter","Service Matter","Property / Land Matter","Motor Vehicle Matter","NI Act Matter","Other"].map(x=><option key={x}>{x}</option>)}</select></label><label>Brief message<textarea value={form.message} onChange={e=>setForm({...form,message:e.target.value})} required rows="4" placeholder="Briefly describe your enquiry. Avoid confidential details."/></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="btn btn-gold form-submit" type="submit">Continue to WhatsApp <ArrowUpRight size={17}/></button><small className="privacy-note">Please do not include passwords, financial credentials or unnecessary sensitive case details.</small></form></div></section>;

}

function FAQ() {

  const [open, setOpen] = useState(0);

  return <section className="section faq-section"><div className="section-label">06 / INFORMATION</div><div className="faq-grid"><h2 className="section-title">Frequently Asked <em>Questions</em></h2><div>{faqs.map(([q,a],i)=><div className="faq-item" key={q}><button onClick={()=>setOpen(open===i?-1:i)}>{q}{open===i?<Minus/>:<Plus/>}</button>{open===i&&<p>{a}</p>}</div>)}</div></div></section>;

}

function Footer() {

  return <footer className="footer"><div className="footer-main"><div><a className="brand footer-brand" href="/"><span className="brand-mark">KR</span><span><b>K. RAVI KIRAN</b><small>ADVOCATE</small></span></a><p>Professional profile and legal practice information for Advocate K. Ravi Kiran, Vijayawada, Andhra Pradesh.</p></div><div><h4>Explore</h4><a href="#about">About</a><a href="#practice">Practice Areas</a><a href="#courts">Courts</a><a href="#gallery">Gallery</a></div><div><h4>Contact</h4><a href={`tel:${c.phone}`}>{c.phoneDisplay}</a><span>Vijayawada, Andhra Pradesh, India</span><a href="#contact">Enquiry form</a></div></div><div className="footer-bottom"><span>© {new Date().getFullYear()} Advocate K. Ravi Kiran. All rights reserved.</span><span>General information only · No legal advice or engagement is created by website use.</span></div></footer>;

}

function PageContent({ page }) {

  if (!page || page.path === "/") return <><Hero/><About/><Practice/><Courts/><Gallery/><FAQ/><Contact/></>;

  return <main className="seo-page"><div className="section-label">PROFESSIONAL INFORMATION · VIJAYAWADA</div><h1>{page.heading}</h1><p className="seo-intro">{page.intro}</p><p>Advocate K. Ravi Kiran (Ravi Kiran Kumar Kolusu) is identified in the supplied profile as a B.A., LL.B. advocate based in Vijayawada, Andhra Pradesh, with practice commencing in 2003.</p><a className="btn btn-green" href="/#contact">Contact details <ArrowUpRight/></a><div className="seo-related"><h2>Related information</h2><a href="/advocate-k-ravi-kiran-vijayawada/">Professional profile</a><a href="/civil-lawyer-vijayawada/">Civil litigation</a><a href="/criminal-lawyer-vijayawada/">Criminal litigation</a><a href="/bail-advocate-vijayawada/">Bail matters</a><a href="/writ-petition-advocate/">Writ petitions</a><a href="/service-matter-advocate/">Service matters</a><a href="/property-dispute-lawyer-vijayawada/">Property and land matters</a></div></main>;

}

export default function App({ pagePath = "/" }) {

  const page = seoPages.find(p => p.path === pagePath) || seoPages[0];

  const canonical = `${c.siteUrl.replace(/\/$/, "")}${page.path}`;

  const personSchema = {

    "@context": "https://schema.org", "@type": "Person",

    "name": c.name, "alternateName": c.alternateName, "jobTitle": "Advocate",

    "telephone": c.phoneDisplay, "image": `${c.siteUrl}${c.profileImage}`,

    "address": { "@type": "PostalAddress", "addressLocality": "Vijayawada", "addressRegion": "Andhra Pradesh", "addressCountry": "IN" }

  };

  return <><Helmet><title>{page.title}</title><meta name="description" content={page.description}/><meta name="robots" content="index,follow,max-image-preview:large"/><link rel="canonical" href={canonical}/><meta property="og:type" content="website"/><meta property="og:title" content={page.title}/><meta property="og:description" content={page.description}/><meta property="og:url" content={canonical}/><meta property="og:image" content={`${c.siteUrl}${c.profileImage}`}/><meta name="twitter:card" content="summary_large_image"/><script type="application/ld+json">{JSON.stringify(personSchema)}</script></Helmet><Header/><PageContent page={page}/><Footer/><FloatingActions/></>;

}