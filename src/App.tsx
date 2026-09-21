import { useEffect, useState, type KeyboardEvent } from 'react'
import logoImg from './assets/logo.jpg'

// ── Scroll-reveal hook ───────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll('.reveal, .reveal-left, .reveal-right')
    const io = new IntersectionObserver(
      (entries) => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible') }),
      { threshold: 0.12 }
    )
    els.forEach(el => io.observe(el))
    return () => io.disconnect()
  }, [])
}

// ── Constants ────────────────────────────────────────────────────────
const BLUE = '#1a6cf5'
const WHATSAPP = 'https://wa.me/573164598263?text=Hello%20Cristian%2C%20I%27m%20interested%20in%20your%20web%20design%20services.%20I%27d%20like%20to%20discuss%20a%20project.'
const EMAIL = 'fabitechFT@hotmail.com'
const EMAIL_COMPOSE_URL = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodeURIComponent(EMAIL)}&subject=${encodeURIComponent('Website Project Inquiry')}`
const PUBLIC_ASSET_BASE = import.meta.env.BASE_URL

// ── Data ─────────────────────────────────────────────────────────────
const presentationProjects = [
  {
    name: 'Streamlined Presentation Website',
    cat: 'Presentation Website',
    desc: 'A refined, conversion-focused website that presents a brand with clarity, credibility and a polished visual identity.',
    link: 'https://fabiancho-cyber.github.io/fabitech/',
    preview: `${PUBLIC_ASSET_BASE}fabitech-preview.png`,
    label: 'Live Project',
  },
]

const ecommerceProjects = [
  {
    name: 'Modern E-Commerce Experience',
    cat: 'Sales & E-Commerce',
    desc: 'A sophisticated online shopping experience designed to showcase products, streamline discovery and guide customers confidently toward purchase.',
    link: 'https://fabiancho-cyber.github.io/FABISHOP/',
    preview: `${PUBLIC_ASSET_BASE}fabishop-preview.png`,
    label: 'Live Project',
  },
]

const whyCards = [
  { icon: '✦', title: 'Professional First Impression', desc: 'Your website represents your brand. Every detail is crafted to communicate credibility and quality from the first second.' },
  { icon: '◫', title: 'Responsive Design', desc: 'Flawless experience across all devices — smartphones, tablets and desktops — without compromise.' },
  { icon: '◈', title: 'Custom Solutions', desc: 'No templates or generic layouts. Every website is designed specifically around your brand, audience and objectives.' },
  { icon: '◉', title: 'Modern User Experience', desc: 'Clean navigation, intuitive structure and thoughtful interactions that guide your visitors toward action.' },
  { icon: '⬡', title: 'Performance Focused', desc: 'Lightweight, optimized code that loads fast and delivers a smooth experience from the first interaction.' },
  { icon: '◌', title: 'Direct Communication', desc: 'You work directly with me — no intermediaries, no delays. Clear, responsive and straightforward collaboration.' },
]

const faqs = [
  { q: 'What type of websites can you build?', a: 'Presentation websites, business websites, portfolios, landing pages, product pages, online stores and fully custom web experiences tailored to your brand and objectives.' },
  { q: 'Will my website work on mobile?', a: 'Yes. Every website is built fully responsive — designed and tested to adapt beautifully to smartphones, tablets and desktops.' },
  { q: 'Can I request a custom design?', a: 'Absolutely. The design is always adapted to your brand identity, target audience and specific goals. Nothing is off-the-shelf.' },
  { q: 'Do you work with businesses in the United States?', a: 'Yes. I work remotely with businesses, entrepreneurs and creators in the United States and Colombia. Communication, project planning and delivery can all be handled online.' },
  { q: 'How much does a website cost?', a: 'Every project is scoped around its goals, pages and functionality. Contact me for a clear, tailored quote after a free initial conversation.' },
  { q: 'How do I start a project?', a: "Simply reach out via WhatsApp, share your idea and requirements, and we'll take it from there. The first conversation is always free." },
]

const processSteps = [
  { num: '01', title: 'Discovery', desc: 'Understand the idea, goals and requirements.' },
  { num: '02', title: 'Planning', desc: 'Define structure, content and visual direction.' },
  { num: '03', title: 'Design', desc: 'Create the visual experience.' },
  { num: '04', title: 'Development', desc: 'Build the responsive website.' },
  { num: '05', title: 'Review', desc: 'Refine and optimize the project.' },
  { num: '06', title: 'Launch', desc: 'Prepare the website for its audience.' },
]

// ── Subcomponents ─────────────────────────────────────────────────────

function LogoCircle({ size, className = '' }: { size: number; className?: string }) {
  // Crop the JPEG to a circle — the badge is centered in a landscape image,
  // so covering a square container reveals only the circular badge, hiding the gray corners.
  return (
    <div
      className={`rounded-full overflow-hidden flex-shrink-0 ${className}`}
      style={{ width: size, height: size }}
    >
      <img
        src={logoImg}
        alt="FABITECH logo"
        className="logo-circle"
        style={{ width: '100%', height: '100%' }}
      />
    </div>
  )
}

// ── Navbar ────────────────────────────────────────────────────────────
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', fn)
    return () => window.removeEventListener('scroll', fn)
  }, [])

  const links = ['Home', 'Services', 'Portfolio', 'Process', 'About', 'FAQ', 'Contact']

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? 'rgba(13,13,13,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <LogoCircle size={40} />
          <span className="hidden sm:block font-bold text-sm tracking-wide text-white/90">FABITECH</span>
        </a>

        <ul className="hidden lg:flex items-center gap-8">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200">
                {l}
              </a>
            </li>
          ))}
        </ul>

        <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary hidden lg:inline-flex" style={{ padding: '0.625rem 1.25rem', fontSize: '0.8rem' }}>
          Start a Project
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
        </a>

        <button className="lg:hidden flex flex-col gap-1.5 p-2" onClick={() => setMenuOpen(v => !v)} aria-label="Toggle menu">
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      <div className={`mobile-menu lg:hidden ${menuOpen ? 'open' : ''}`} style={{ background: 'rgba(13,13,13,0.98)', borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <ul className="flex flex-col px-6 py-4 gap-4">
          {links.map(l => (
            <li key={l}>
              <a href={`#${l.toLowerCase()}`} className="block text-sm font-medium text-white/70 hover:text-white transition-colors" onClick={() => setMenuOpen(false)}>
                {l}
              </a>
            </li>
          ))}
          <li className="pt-2">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary w-full justify-center">Start a Project</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}

// ── Hero ──────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden hero-grid" style={{ paddingTop: '5rem' }}>
      <div className="orb w-96 h-96 opacity-15" style={{ background: BLUE, top: '10%', right: '5%' }} />
      <div className="orb w-64 h-64 opacity-8" style={{ background: BLUE, bottom: '15%', left: '-5%' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 grid lg:grid-cols-2 gap-16 items-center">
        <div>
          <p className="section-label mb-6">Web Design & Development · Serving the U.S. & Colombia</p>
          <h1 className="font-display text-5xl md:text-6xl xl:text-7xl font-bold leading-tight mb-6" style={{ fontFamily: 'Fraunces, serif', lineHeight: 1.05 }}>
            Modern Websites.{' '}
            <span className="gradient-text">Built to Make Your Business Stand Out.</span>
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-4 max-w-lg">
            I design and develop professional, responsive websites that help small businesses, entrepreneurs, creators and personal brands build credibility, attract customers and grow online.
          </p>
          <p className="text-white/40 text-sm leading-relaxed mb-10 max-w-lg">
            I'm Cristian Fabian Jimenez Sandoval — a web creator from Colombia helping ambitious brands in the United States and beyond turn ideas into modern, functional and professional digital experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary">
              Start Your Project
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7v10"/></svg>
            </a>
            <a href="#portfolio" className="btn-outline">Explore My Work</a>
          </div>
          <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-xs text-white/45">
            <span>✓ Clear project scope</span>
            <span>✓ Responsive by default</span>
            <span>✓ Direct communication</span>
          </div>
        </div>

        <div className="flex justify-center lg:justify-end reveal-right">
          <div className="relative">
            <div className="border-animated rounded-xl overflow-hidden" style={{ width: 'min(480px, 90vw)', boxShadow: `0 40px 100px rgba(0,0,0,0.6), 0 0 60px rgba(26,108,245,0.12)` }}>
              <div className="glass flex items-center gap-2 px-4 py-3 border-b border-white/5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/60" />
                <span className="w-2.5 h-2.5 rounded-full bg-green-500/60" />
                <div className="flex-1 mx-4 bg-white/5 rounded px-3 py-1 text-xs text-white/30">fabitech.design</div>
              </div>
              <div className="relative overflow-hidden" style={{ height: 320, background: '#0a0a0a' }}>
                <div className="absolute inset-0 hero-grid opacity-50" />
                <div className="absolute inset-0 flex flex-col justify-center px-8">
                  <div className="w-24 h-1 rounded mb-4" style={{ background: BLUE }} />
                  <div className="w-48 h-4 bg-white/20 rounded mb-3" />
                  <div className="w-36 h-4 bg-white/10 rounded mb-6" />
                  <div className="flex gap-3">
                    <div className="w-20 h-7 rounded" style={{ background: BLUE, opacity: 0.85 }} />
                    <div className="w-20 h-7 rounded border border-white/20" />
                  </div>
                  <div className="mt-8 grid grid-cols-3 gap-3">
                    {[1,2,3].map(i => (
                      <div key={i} className="h-16 rounded glass" style={{ background: 'rgba(255,255,255,0.04)' }} />
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-4 -left-6 glass-blue rounded-lg px-4 py-3 text-xs font-semibold" style={{ whiteSpace: 'nowrap' }}>
              <span style={{ color: BLUE }}>✦</span>
              <span className="ml-2 text-white/90">Professional · Responsive · Modern</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
        <span className="text-xs tracking-widest uppercase" style={{ fontSize: '0.65rem' }}>Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/30 to-transparent" />
      </div>
    </section>
  )
}

// ── Services ──────────────────────────────────────────────────────────
function Services() {
  const services = [
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>,
      title: 'Presentation & Business Websites',
      desc: 'Professional websites for businesses, services, portfolios, personal brands and landing pages. Designed to establish credibility and communicate value.',
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 01-8 0"/></svg>,
      title: 'Sales & E-Commerce Websites',
      desc: 'Modern online stores and product pages designed to showcase products professionally and guide visitors toward confident, clear purchasing decisions.',
    },
    {
      icon: <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
      title: 'Custom Web Experiences',
      desc: 'Tailored websites created around your brand, audience, goals and requirements. No templates — every element built with intention.',
    },
  ]

  return (
    <section id="services" className="py-28 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <p className="section-label mb-4">Services</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>
            What I Can Build <span className="gradient-text">For You</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <div key={i} className="reveal card-lift border-animated rounded-xl p-8" style={{ transitionDelay: `${i * 0.1}s` }}>
              <div className="mb-6" style={{ color: BLUE }}>{s.icon}</div>
              <h3 className="font-semibold text-lg mb-3 leading-snug">{s.title}</h3>
              <p className="text-white/50 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Portfolio ─────────────────────────────────────────────────────────
function Portfolio() {
  const [activeTab, setActiveTab] = useState<'presentation' | 'ecommerce'>('presentation')
  const projects = activeTab === 'presentation' ? presentationProjects : ecommerceProjects

  const handleTabKeyDown = (event: KeyboardEvent<HTMLButtonElement>, tab: 'presentation' | 'ecommerce') => {
    if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight' && event.key !== 'Home' && event.key !== 'End') return

    event.preventDefault()
    const nextTab =
      event.key === 'Home'
        ? 'presentation'
        : event.key === 'End'
          ? 'ecommerce'
          : tab === 'presentation'
            ? 'ecommerce'
            : 'presentation'

    setActiveTab(nextTab)
    document.getElementById(`${nextTab}-tab`)?.focus()
  }

  return (
    <section id="portfolio" className="py-28 px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-6 reveal">
          <p className="section-label mb-4">Portfolio</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4" style={{ fontFamily: 'Fraunces, serif' }}>
            Selected Projects
          </h2>
          <p className="text-white/50 max-w-xl leading-relaxed">
            A selection of modern digital experiences designed to help brands communicate clearly, earn trust and turn attention into action.
          </p>
        </div>

        <div className="flex gap-0 border-b mb-12 reveal" style={{ borderColor: 'rgba(255,255,255,0.08)' }} role="tablist" aria-label="Portfolio categories">
          <button
            id="presentation-tab"
            className={`tab-btn ${activeTab === 'presentation' ? 'active' : ''}`}
            role="tab"
            aria-selected={activeTab === 'presentation'}
            aria-controls="portfolio-panel"
            tabIndex={activeTab === 'presentation' ? 0 : -1}
            onClick={() => setActiveTab('presentation')}
            onKeyDown={event => handleTabKeyDown(event, 'presentation')}
          >
            Presentation Websites
          </button>
          <button
            id="ecommerce-tab"
            className={`tab-btn ${activeTab === 'ecommerce' ? 'active' : ''}`}
            role="tab"
            aria-selected={activeTab === 'ecommerce'}
            aria-controls="portfolio-panel"
            tabIndex={activeTab === 'ecommerce' ? 0 : -1}
            onClick={() => setActiveTab('ecommerce')}
            onKeyDown={event => handleTabKeyDown(event, 'ecommerce')}
          >
            Sales & E-Commerce
          </button>
        </div>

        <div id="portfolio-panel" className="max-w-xl mx-auto" role="tabpanel" aria-labelledby={`${activeTab}-tab`} tabIndex={0}>
          {projects.map((p, i) => (
            <div key={i} className="reveal card-lift group rounded-2xl overflow-hidden border" style={{ borderColor: 'rgba(255,255,255,0.07)' }}>
              {/* Static preview generated from the live project */}
              <div className="relative h-56 overflow-hidden" style={{ background: '#0d0f1a' }}>
                <img
                  src={p.preview}
                  title={`${p.name} preview`}
                  alt={`${p.name} website preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </div>

              <div className="p-7" style={{ background: '#111' }}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-semibold tracking-widest uppercase" style={{ color: BLUE, fontSize: '0.65rem' }}>{p.cat}</span>
                  <span className="text-xs px-2 py-0.5 rounded glass text-white/40">{p.label}</span>
                </div>
                <h3 className="font-semibold text-lg mb-2">{p.name}</h3>
                <p className="text-white/40 text-sm leading-relaxed mb-5">{p.desc}</p>
                <a
                  href={p.link}
                  className="btn-primary"
                  style={{ fontSize: '0.82rem', padding: '0.65rem 1.4rem' }}
                >
                  View Project
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs mt-10 reveal">
          More projects coming soon — each one crafted with the same level of care and detail.
        </p>
      </div>
    </section>
  )
}

// ── About ─────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="about" className="py-28 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="reveal-left order-2 lg:order-1 flex justify-center">
          <div className="relative">
            <div className="rounded-2xl overflow-hidden border-animated flex flex-col items-center justify-center p-10 text-center" style={{ width: 340, height: 420, background: '#0f0f0f' }}>
              <div className="absolute inset-0 hero-grid opacity-20 rounded-2xl" />
              {/* Logo fills the circle properly */}
              <div className="relative z-10 flex flex-col items-center">
                <div
                  className="rounded-full overflow-hidden mb-6"
                  style={{
                    width: 140,
                    height: 140,
                    border: `3px solid rgba(26,108,245,0.5)`,
                    boxShadow: `0 0 30px rgba(26,108,245,0.2)`,
                  }}
                >
                  <img
                    src={logoImg}
                    alt="FABITECH"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }}
                  />
                </div>
                <div className="text-white/90 font-semibold text-xl mb-0.5" style={{ fontFamily: 'Fraunces, serif' }}>Cristian Fabian</div>
                <div className="text-white/90 font-semibold text-xl mb-3" style={{ fontFamily: 'Fraunces, serif' }}>Jimenez Sandoval</div>
                <div className="text-xs tracking-widest uppercase mb-5" style={{ color: BLUE }}>Web Creator · FABITECH</div>
                <div className="text-sm text-white/50">Based in Colombia 🇨🇴</div>
              </div>
            </div>
            <div className="orb w-48 h-48 opacity-15" style={{ background: BLUE, top: '-20%', left: '-20%', position: 'absolute', filter: 'blur(60px)' }} />
          </div>
        </div>

        <div className="order-1 lg:order-2 reveal-right">
          <p className="section-label mb-4">About</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Meet the <span className="gradient-text">Creator</span>
          </h2>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              I'm Cristian Fabian Jimenez Sandoval, a web creator from Colombia building my own digital project — FABITECH — with a clear focus: transforming ideas into professional, responsive and visually compelling websites.
            </p>
            <p>
              My work is defined by clean design, intuitive usability and strong attention to detail. Every website I build is crafted to feel purposeful — not assembled from templates, but designed to serve a specific brand and audience.
            </p>
            <p>
              I believe that a great website is more than aesthetics. It should communicate clearly, load fast, work on every device and create a genuine first impression that earns trust.
            </p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            {['Clean Design', 'Usability', 'Responsiveness', 'Attention to Detail', 'Functionality'].map(tag => (
              <span key={tag} className="text-xs font-medium px-3 py-1.5 rounded-full glass" style={{ border: '1px solid rgba(255,255,255,0.08)' }}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Why Choose Me ──────────────────────────────────────────────────────
function WhyChooseMe() {
  return (
    <section className="py-28 px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 reveal">
          <p className="section-label mb-4">Why Choose Me</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>
            What Sets This <span className="gradient-text">Work Apart</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {whyCards.map((c, i) => (
            <div key={i} className="reveal card-lift glass rounded-xl p-7" style={{ transitionDelay: `${i * 0.07}s` }}>
              <div className="text-xl mb-4" style={{ color: BLUE }}>{c.icon}</div>
              <h3 className="font-semibold mb-3 text-sm">{c.title}</h3>
              <p className="text-white/40 text-sm leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Process ───────────────────────────────────────────────────────────
function Process() {
  return (
    <section id="process" className="py-28 px-6">
      <div className="max-w-4xl mx-auto">
        <div className="mb-16 reveal text-center">
          <p className="section-label mb-4">Process</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>
            How It <span className="gradient-text">Works</span>
          </h2>
        </div>
        <div className="relative">
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: `linear-gradient(180deg, ${BLUE} 0%, rgba(26,108,245,0.05) 100%)` }} />
          <div className="space-y-6">
            {processSteps.map((step, i) => (
              <div key={i} className="reveal flex gap-8 items-start" style={{ transitionDelay: `${i * 0.1}s` }}>
                <div
                  className="relative z-10 flex-shrink-0 w-16 h-16 rounded-full hidden md:flex items-center justify-center"
                  style={{ background: i === 0 ? BLUE : '#141414', border: '2px solid', borderColor: i === 0 ? BLUE : 'rgba(255,255,255,0.1)' }}
                >
                  <span className="font-mono text-xs font-bold" style={{ color: i === 0 ? '#fff' : BLUE }}>{step.num}</span>
                </div>
                <div className="glass rounded-xl p-6 flex-1 card-lift">
                  <div className="flex items-center gap-3 mb-2">
                    <span className="md:hidden font-mono text-xs font-bold" style={{ color: BLUE }}>{step.num}</span>
                    <h3 className="font-semibold">{step.title}</h3>
                  </div>
                  <p className="text-white/50 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ── Trust & Quality ────────────────────────────────────────────────────
function TrustQuality() {
  const standards = [
    'Responsive Design', 'Clean Code Structure', 'Intuitive Navigation',
    'Cross-Device Compatibility', 'Performance Optimization', 'Professional Design Principles',
    'Accessibility Considered', 'Semantic HTML',
  ]
  return (
    <section className="py-28 px-6" style={{ background: '#0a0a0a' }}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal text-center mb-16">
          <p className="section-label mb-4">Standards</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>
            Built With Professional <span className="gradient-text">Standards in Mind</span>
          </h2>
        </div>
        <div className="reveal flex flex-wrap justify-center gap-3">
          {standards.map((s, i) => (
            <div key={i} className="flex items-center gap-2 px-5 py-3 rounded-full text-sm font-medium border-animated">
              <span style={{ color: BLUE }}>✦</span>
              <span className="text-white/80">{s}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── FAQ ───────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  return (
    <section id="faq" className="py-28 px-6">
      <div className="max-w-3xl mx-auto">
        <div className="reveal mb-16 text-center">
          <p className="section-label mb-4">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold" style={{ fontFamily: 'Fraunces, serif' }}>
            Common <span className="gradient-text">Questions</span>
          </h2>
        </div>
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="reveal border-animated rounded-xl overflow-hidden" style={{ transitionDelay: `${i * 0.08}s` }}>
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors"
                style={{ background: 'rgba(255,255,255,0.02)' }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-medium text-sm leading-snug">{f.q}</span>
                <span
                  className="flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center transition-transform duration-300"
                  style={{ background: open === i ? BLUE : 'rgba(255,255,255,0.08)', transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><path d="M12 5v14M5 12h14"/></svg>
                </span>
              </button>
              <div className={`faq-answer ${open === i ? 'open' : ''}`}>
                <p className="px-6 pb-5 text-sm text-white/50 leading-relaxed">{f.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ── Contact ───────────────────────────────────────────────────────────
function Contact() {
  return (
    <section id="contact" className="py-28 px-6 relative overflow-hidden" style={{ background: '#0a0a0a' }}>
      <div className="orb w-80 h-80 opacity-20" style={{ background: BLUE, top: '50%', left: '50%', transform: 'translate(-50%,-50%)', position: 'absolute', filter: 'blur(100px)' }} />
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <div className="reveal">
          <p className="section-label mb-6">Contact</p>
          <h2 className="font-display text-4xl md:text-6xl font-bold mb-6" style={{ fontFamily: 'Fraunces, serif' }}>
            Have an Idea for Your <span className="gradient-text">Website?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10 leading-relaxed">
            Tell me what you want to achieve and receive a clear next step for your project.
          </p>
          <a href={WHATSAPP} target="_blank" rel="noopener noreferrer" className="btn-primary text-base" style={{ padding: '1rem 2.5rem', fontSize: '1rem' }}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Let's Talk on WhatsApp
          </a>
          <a
            href={EMAIL_COMPOSE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-white/60 underline decoration-white/20 underline-offset-4 transition-colors hover:text-white"
          >
            Or email me at {EMAIL}
          </a>
        </div>
      </div>
    </section>
  )
}

// ── Footer ────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer className="border-t py-12 px-6" style={{ borderColor: 'rgba(255,255,255,0.06)', background: '#0d0d0d' }}>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3 text-center md:text-left">
          <LogoCircle size={36} />
          <div>
            <p className="font-bold text-sm text-white/90 tracking-wide">FABITECH</p>
            <p className="text-white/40 text-xs">Web Design & Development · Colombia 🇨🇴</p>
            <p className="text-white/40 text-xs">WhatsApp: +57 316 459 8263</p>
            <a href={EMAIL_COMPOSE_URL} target="_blank" rel="noopener noreferrer" className="text-white/40 text-xs transition-colors hover:text-white">{EMAIL}</a>
          </div>
        </div>
        <div className="text-center text-xs text-white/30">
          © 2026 FABITECH. All rights reserved.
        </div>
        <div className="flex gap-6">
          {['Services', 'Portfolio', 'About', 'Contact'].map(l => (
            <a key={l} href={`#${l.toLowerCase()}`} className="text-xs text-white/40 hover:text-white/80 transition-colors">
              {l}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}

// ── App ───────────────────────────────────────────────────────────────
export default function App() {
  useReveal()
  return (
    <div className="min-h-screen" style={{ background: '#0d0d0d', color: '#f0f0f0' }}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Portfolio />
        <About />
        <WhyChooseMe />
        <Process />
        <TrustQuality />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
