import { useState, useEffect, useRef } from 'react';
import { Link, Outlet, useLocation } from 'react-router';
import {
  Pencil,
  Mail,
  Mic,
  FileText,
  Sparkles,
  BookOpen,
  Calculator,
  Scale,
  CalendarCheck,
  Globe,
  ChevronDown,
  Menu,
  X,
  ArrowRight,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  Youtube,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import logoDark from '@/assets/logo_dark.png';
import logoLight from '@/assets/logo_light.png';

/* ────────────────────────────────────────────────────────────────────────── */
/*  Constants                                                                */
/* ────────────────────────────────────────────────────────────────────────── */

const APP_URL = 'https://app.ieltstop.com';

/* ────────────────────────────────────────────────────────────────────────── */
/*  Navigation link definitions                                              */
/* ────────────────────────────────────────────────────────────────────────── */

interface NavLink {
  label: string;
  to?: string;
  dropdown?: boolean;
}

interface ServiceLink {
  icon: LucideIcon;
  label: string;
  description: string;
  to: string;
  external?: boolean;
}

const NAV_LINKS: NavLink[] = [
  { label: 'Home', to: '/' },
  { label: 'Services', dropdown: true },
  { label: 'Resources', dropdown: true },
  { label: 'Pricing', to: '/pricing' },
  { label: 'Blog', to: '/blog' },
  { label: 'FAQ', to: '/faq' },
];

const SERVICES: ServiceLink[] = [
  { icon: Pencil, label: 'Essay Checker', description: 'Get instant AI feedback on Task 1 & 2 essays', to: '/services/essay-checker' },
  { icon: Mail, label: 'Letter Checker', description: 'Evaluate formal, informal & semi-formal letters', to: '/services/letter-checker' },
  { icon: FileText, label: 'Report Checker', description: 'Academic Task 1 report analysis & scoring', to: '/services/report-checker' },
  { icon: Mic, label: 'Speaking Assessment', description: 'Upload audio for pronunciation & fluency feedback', to: '/services/speaking-assessment' },
  { icon: Sparkles, label: 'Text Enhancer', description: 'Upgrade your writing to Band 7+ with AI', to: '/services/text-enhancer' },
  { icon: BookOpen, label: 'Sample Answers', description: 'Study high-scoring Band 7, 8 & 9 examples', to: '/services/sample-answers' },
];

const RESOURCES: ServiceLink[] = [
  { icon: Calculator, label: 'Band Calculator', description: 'Calculate your overall IELTS band score instantly', to: '/band-calculator' },
  { icon: Scale, label: 'Compare', description: 'See how IELTS Top stacks up against alternatives', to: '/compare' },
  { icon: CalendarCheck, label: 'Test Day Guide', description: 'Everything you need to know for test day', to: '/test-day-guide' },
  { icon: Globe, label: 'Study Abroad', description: 'Explore IELTS requirements by country', to: '/study-abroad' },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  Footer link definitions                                                  */
/* ────────────────────────────────────────────────────────────────────────── */

const featureLinks = [
  { label: 'Essay Checker', to: '/services/essay-checker' },
  { label: 'Letter Checker', to: '/services/letter-checker' },
  { label: 'Speaking Assessment', to: '/services/speaking-assessment' },
  { label: 'Report Checker', to: '/services/report-checker' },
  { label: 'Text Enhancer', to: '/services/text-enhancer' },
  { label: 'Sample Answers', to: '/services/sample-answers' },
];

const resourceLinks = [
  { label: 'Blog', to: '/blog' },
  { label: 'Band Calculator', to: '/band-calculator' },
  { label: 'Compare', to: '/compare' },
  { label: 'Test Day Guide', to: '/test-day-guide' },
  { label: 'Study Abroad', to: '/study-abroad' },
];

const companyLinks = [
  { label: 'Contact', to: '/contact' },
  { label: 'Pricing', to: '/pricing' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Privacy Policy', to: '/privacy-policy' },
  { label: 'Terms & Conditions', to: '/terms-conditions' },
  { label: 'Refund Policy', to: '/refund-policy' },
];

const socials: { icon: LucideIcon; href: string; label: string }[] = [
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

/* ────────────────────────────────────────────────────────────────────────── */
/*  SmartLink — renders <a> for external, <Link> for internal                */
/* ────────────────────────────────────────────────────────────────────────── */

function SmartLink({
  to,
  external,
  className,
  children,
  onClick,
  role,
  'aria-label': ariaLabel,
}: {
  to: string;
  external?: boolean;
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
  role?: string;
  'aria-label'?: string;
}) {
  if (external || to.startsWith('http')) {
    return (
      <a href={to} className={className} onClick={onClick} role={role} aria-label={ariaLabel}>
        {children}
      </a>
    );
  }
  return (
    <Link to={to} className={className} onClick={onClick} role={role} aria-label={ariaLabel}>
      {children}
    </Link>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  LinkColumn (Footer helper)                                               */
/* ────────────────────────────────────────────────────────────────────────── */

function LinkColumn({ title, links }: { title: string; links: { label: string; to: string; external?: boolean }[] }) {
  return (
    <div>
      <h6 className="text-[13px] font-bold text-white uppercase tracking-[1.5px] mb-5">{title}</h6>
      <ul className="space-y-3" role="list">
        {links.map((link) => (
          <li key={link.to}>
            <SmartLink
              to={link.to}
              external={link.external}
              className="text-[14px] text-[#8B8BA8] hover:text-white hover:pl-1 transition-all duration-200"
            >
              {link.label}
            </SmartLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Navbar                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

const DROPDOWN_ITEMS: Record<string, ServiceLink[]> = {
  Services: SERVICES,
  Resources: RESOURCES,
};

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const navDropdownRefs = useRef<Record<string, HTMLDivElement | null>>({});
  const location = useLocation();

  /* Track scroll position for shadow */
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Close mobile drawer on route change */
  useEffect(() => {
    setMobileOpen(false);
  }, [location.pathname]);

  /* Close dropdowns when clicking outside */
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      let clickedInsideAny = false;
      for (const ref of Object.values(navDropdownRefs.current)) {
        if (ref && ref.contains(e.target as Node)) {
          clickedInsideAny = true;
          break;
        }
      }
      if (!clickedInsideAny) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  /* Lock body scroll when mobile drawer is open */
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen]);

  return (
    <>
      {/* -- Sticky navbar -- */}
      <nav
        aria-label="Main navigation"
        className={`
          sticky top-0 z-50 bg-white w-full
          border-b border-[rgba(0,0,0,0.08)]
          transition-shadow duration-200
          ${scrolled ? 'shadow-[0_2px_8px_rgba(0,0,0,0.06)]' : ''}
        `}
      >
        <div className="container-main">
          <div className="flex items-center justify-between h-[72px]">

            {/* -- Left: Logo -- */}
            <Link to="/" className="flex items-center shrink-0" aria-label="IELTS Top — Back to home">
              <img src={logoDark} alt="IELTS Top logo" className="h-14" />
            </Link>

            {/* -- Center: Desktop nav links -- */}
            <div className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  const isOpen = openDropdown === link.label;
                  const items = DROPDOWN_ITEMS[link.label] ?? [];
                  return (
                    <div
                      key={link.label}
                      className="relative"
                      ref={(el) => { navDropdownRefs.current[link.label] = el; }}
                      onMouseEnter={() => setOpenDropdown(link.label)}
                      onMouseLeave={() => setOpenDropdown(null)}
                    >
                      <button
                        type="button"
                        aria-expanded={isOpen}
                        aria-haspopup="true"
                        aria-label={`${link.label} menu`}
                        onKeyDown={(e) => {
                          if (e.key === 'Enter' || e.key === ' ') {
                            e.preventDefault();
                            setOpenDropdown(isOpen ? null : link.label);
                          } else if (e.key === 'Escape') {
                            setOpenDropdown(null);
                          }
                        }}
                        className={`
                          flex items-center gap-1 text-[15px] font-medium pb-1 transition-colors duration-200 cursor-default
                          ${isOpen ? 'text-primary' : 'text-heading hover:text-primary'}
                        `}
                      >
                        {link.label}
                        <ChevronDown aria-hidden="true" className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                      </button>

                      {isOpen && (
                        <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4">
                          <div role="menu" aria-label={link.label} onKeyDown={(e) => { if (e.key === 'Escape') setOpenDropdown(null); }} className="max-w-[540px] w-[calc(100vw-40px)] bg-white border border-border rounded-xl shadow-[0_16px_48px_rgba(0,0,0,0.1)] overflow-hidden">
                            <div className="grid grid-cols-2 gap-px bg-border">
                              {items.map((s) => (
                                <SmartLink
                                  key={s.to}
                                  to={s.to}
                                  external={s.external}
                                  role="menuitem"
                                  onClick={() => setOpenDropdown(null)}
                                  className="group/svc flex items-start gap-3 bg-white p-5 hover:bg-bg-alt transition-colors duration-200"
                                >
                                  <div className="w-10 h-10 rounded-lg bg-bg-alt group-hover/svc:bg-primary flex items-center justify-center shrink-0 transition-colors duration-200" aria-hidden="true">
                                    <s.icon className="w-5 h-5 text-heading group-hover/svc:text-white transition-colors duration-200" />
                                  </div>
                                  <div>
                                    <p className="text-[14px] font-semibold text-heading">{s.label}</p>
                                    <p className="text-[12px] text-muted-foreground mt-0.5 leading-relaxed">{s.description}</p>
                                  </div>
                                </SmartLink>
                              ))}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to!}
                    className={`
                      text-[15px] font-medium pb-1 transition-colors duration-200
                      ${
                        isActive
                          ? 'text-primary border-b-2 border-primary'
                          : 'text-heading hover:text-primary border-b-2 border-transparent'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* -- Right: Actions (always logged-out state) -- */}
            <div className="hidden lg:flex items-center gap-5">
              <a
                href={`${APP_URL}/login`}
                className="text-[15px] font-medium text-heading hover:text-primary transition-colors duration-200"
              >
                Log in
              </a>
              <a
                href={`${APP_URL}/signup`}
                className="inline-flex items-center justify-center bg-primary text-white text-[14px] font-bold h-[42px] px-6 rounded-lg hover:bg-primary-hover transition-colors duration-200 shadow-sm"
              >
                Get Started Free
              </a>
            </div>

            {/* -- Mobile: Hamburger -- */}
            <button
              onClick={() => setMobileOpen((v) => !v)}
              className="lg:hidden p-2 text-body hover:text-primary transition-colors duration-200 cursor-pointer"
              aria-label="Toggle navigation menu"
            >
              {mobileOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* -- Mobile slide-in drawer -- */}
      {mobileOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-40 bg-black/30 lg:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />

          {/* Drawer panel */}
          <aside role="dialog" aria-label="Mobile navigation" className="fixed top-0 right-0 bottom-0 z-50 w-[min(300px,80vw)] bg-white lg:hidden flex flex-col shadow-[-4px_0_16px_rgba(0,0,0,0.08)]">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 h-[72px] border-b border-border">
              <Link
                to="/"
                className="flex items-center"
                onClick={() => setMobileOpen(false)}
              >
                <img src={logoDark} alt="IELTS Top" className="h-10" />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-muted-foreground hover:text-heading cursor-pointer"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Drawer nav links */}
            <div className="flex-1 overflow-y-auto py-4 px-4">
              {NAV_LINKS.map((link) => {
                if (link.dropdown) {
                  const isMobileOpen = mobileExpanded === link.label;
                  const items = DROPDOWN_ITEMS[link.label] ?? [];
                  return (
                    <div key={link.label}>
                      <button
                        type="button"
                        aria-expanded={isMobileOpen}
                        aria-label={`${link.label} menu`}
                        onClick={() => setMobileExpanded(isMobileOpen ? null : link.label)}
                        className={`
                          flex items-center justify-between w-full px-4 py-3.5 text-[15px] font-medium rounded-lg mb-1 cursor-pointer
                          transition-colors duration-200
                          ${isMobileOpen ? 'text-primary bg-primary/5' : 'text-body hover:text-primary hover:bg-bg-alt'}
                        `}
                      >
                        {link.label}
                        <ChevronDown aria-hidden="true" className={`w-4 h-4 transition-transform duration-200 ${isMobileOpen ? 'rotate-180' : ''}`} />
                      </button>
                      {isMobileOpen && (
                        <div role="menu" aria-label={link.label} className="ml-2 mb-2 space-y-0.5">
                          {items.map((s) => (
                            <SmartLink
                              key={s.to}
                              to={s.to}
                              external={s.external}
                              role="menuitem"
                              onClick={() => setMobileOpen(false)}
                              className="flex items-center gap-3 px-4 py-2.5 text-[14px] font-medium text-body hover:text-primary hover:bg-bg-alt rounded-lg transition-colors duration-200"
                            >
                              <s.icon className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                              {s.label}
                            </SmartLink>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = location.pathname === link.to;
                return (
                  <Link
                    key={link.to}
                    to={link.to!}
                    onClick={() => setMobileOpen(false)}
                    className={`
                      block px-4 py-3.5 text-[15px] font-medium rounded-lg mb-1
                      transition-colors duration-200
                      ${
                        isActive
                          ? 'text-primary bg-primary/5'
                          : 'text-body hover:text-primary hover:bg-bg-alt'
                      }
                    `}
                  >
                    {link.label}
                  </Link>
                );
              })}
            </div>

            {/* Drawer footer (always logged-out state) */}
            <div className="p-4 space-y-2 border-t border-[rgba(0,0,0,0.08)]">
              <a
                href={`${APP_URL}/login`}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center text-[15px] font-medium text-heading py-2.5 transition-colors duration-200"
              >
                Log in
              </a>
              <a
                href={`${APP_URL}/signup`}
                onClick={() => setMobileOpen(false)}
                className="block w-full text-center bg-primary text-white text-[14px] font-bold h-11 leading-[44px] rounded-lg hover:bg-primary-hover transition-colors duration-200"
              >
                Get Started Free
              </a>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Footer                                                                    */
/* ────────────────────────────────────────────────────────────────────────── */

function Footer() {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setEmail('');
    }
  };

  return (
    <footer className="bg-[#1A1A2E] overflow-hidden" role="contentinfo">
      {/* Newsletter bar */}
      <div className="border-b border-white/[0.06]">
        <div className="container-main py-12 md:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <h2 className="text-white text-[24px] md:text-[28px] font-bold">
                Stay ahead of your IELTS prep
              </h2>
              <p className="mt-2 text-[15px] text-[#8B8BA8] max-w-md">
                Get weekly tips, practice topics, and score improvement strategies delivered to your inbox.
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-0 max-w-md w-full" aria-label="Newsletter subscription">
              <label htmlFor="footer-email" className="sr-only">Email for newsletter</label>
              <div className="relative flex-1">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#6B6B88] pointer-events-none" aria-hidden="true" />
                <input
                  id="footer-email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  aria-label="Your email address"
                  className="w-full bg-[#252542] border border-white/[0.08] text-white text-[14px] pl-12 pr-4 py-3.5 rounded-l-lg placeholder-[#6B6B88] focus:outline-none focus:border-[#E8773A]/50 transition-colors"
                />
              </div>
              <button
                type="submit"
                className="bg-[#E8773A] text-white text-[14px] font-bold px-6 py-3.5 rounded-r-lg hover:bg-[#D4682E] transition-colors cursor-pointer shrink-0"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Main footer content */}
      <div className="container-main py-14 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 lg:gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-3 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" aria-label="IELTS Top — Back to home" className="inline-block">
              <img src={logoLight} alt="IELTS Top logo" className="h-11" />
            </Link>
            <p className="mt-5 text-[14px] text-[#8B8BA8] leading-[1.8] max-w-[280px]">
              AI-powered IELTS preparation that helps you achieve your target band score.
              Practice smarter, score higher.
            </p>
            <a
              href={`${APP_URL}/signup`}
              className="group mt-6 inline-flex items-center gap-2 bg-[#E8773A] text-white text-[13px] font-bold px-6 py-3 rounded-lg hover:bg-[#D4682E] transition-all shadow-[0_4px_12px_rgba(232,119,58,0.25)]"
            >
              Get Started Free
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
            </a>
          </div>

          {/* Link columns */}
          <LinkColumn title="Features" links={featureLinks} />
          <LinkColumn title="Resources" links={resourceLinks} />
          <LinkColumn title="Company" links={companyLinks} />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.06]">
        <div className="container-main py-6">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
            {/* Left — copyright + links */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 sm:gap-6">
              <p className="text-[13px] text-[#6B6B88]">
                &copy; {new Date().getFullYear()} IELTS Top. All rights reserved.
              </p>
              <div className="flex items-center gap-4 text-[13px] text-[#6B6B88]">
                <Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy</Link>
                <Link to="/terms-conditions" className="hover:text-white transition-colors">Terms</Link>
                <Link to="/refund-policy" className="hover:text-white transition-colors">Refunds</Link>
              </div>
            </div>

            {/* Right — socials */}
            <div className="flex items-center gap-2">
              {socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/[0.05] flex items-center justify-center text-[#8B8BA8] hover:text-white hover:bg-[#E8773A] transition-all duration-200"
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ────────────────────────────────────────────────────────────────────────── */
/*  Public Layout                                                             */
/* ────────────────────────────────────────────────────────────────────────── */

export default function PublicLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
