import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom';
import { ArrowUpRight, Instagram, Facebook, Youtube } from 'lucide-react';
import SmoothScroll from './SmoothScroll';
import { clubContact } from '../data/contact';
import { membershipUrl, socials } from '../data/content';

const navigation = [['/', 'Domov'], ['/o-nas', 'O nas'], ['/dogodki', 'Dogodki'], ['/novice', 'Novice'], ['/clanstvo', 'Članstvo'], ['/priloznosti', 'Priložnosti'], ['/kontakt', 'Kontakt']];
export default function Layout() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(() => window.matchMedia('(max-width: 1100px)').matches);
  const [scrolled, setScrolled] = useState(false);
  const header = useRef<HTMLElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);
  const location = useLocation();
  const previousPath = useRef(location.pathname);
  useEffect(() => {
    setOpen(false);
    if (previousPath.current !== location.pathname) {
      document.getElementById('main-content')?.focus({ preventScroll: true });
      previousPath.current = location.pathname;
    }
    const title = navigation.find(([path]) => path === location.pathname)?.[1] ?? (location.pathname === '/newsletter' ? 'E-novice' : 'Stran ne obstaja');
    document.title = `${title} / KMŠ — Maribor. Mladi. Brez meja.`;
  }, [location.pathname]);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    const desktop = window.matchMedia('(min-width: 1101px)');
    const closeOnDesktop = () => { setCompact(!desktop.matches); if (desktop.matches) setOpen(false); };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    desktop.addEventListener('change', closeOnDesktop);
    return () => { window.removeEventListener('scroll', onScroll); desktop.removeEventListener('change', closeOnDesktop); };
  }, []);
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') { setOpen(false); toggle.current?.focus(); }
    };
    const outside = (event: PointerEvent) => { if (!header.current?.contains(event.target as Node)) setOpen(false); };
    document.addEventListener('keydown', onKey);
    document.addEventListener('pointerdown', outside);
    return () => { document.removeEventListener('keydown', onKey); document.removeEventListener('pointerdown', outside); };
  }, [open]);
  const closeMenu = () => {
    setOpen(false);
    if (compact) toggle.current?.focus();
  };
  return <>
    <SmoothScroll />
    <a className="skip-link" href="#main-content">PRESKOČI NA VSEBINO</a>
    <header ref={header} className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <Link to="/" className="brand" aria-label="KMŠ domov"><img src={`${import.meta.env.BASE_URL}assets/branding/kms-logo-header.png`} alt="Logotip Kluba mariborskih študentov" width={565} height={292} decoding="async" /></Link>
      <button ref={toggle} className="mobile-toggle" aria-expanded={open} aria-controls="main-navigation" onClick={() => setOpen(current => !current)} aria-label={open ? 'Zapri meni' : 'Odpri meni'}><span className="hamburger" aria-hidden="true"><span /><span /><span /></span></button>
      <nav inert={compact && !open} id="main-navigation" data-lenis-prevent={open ? true : undefined} className={`navigation${open ? ' is-open' : ''}`} aria-label="Glavna navigacija" onBlur={event => { if (!header.current?.contains(event.relatedTarget as Node)) setOpen(false); }}>
        {navigation.map(([to, label]) => <NavLink key={to} to={to} end={to === '/'} onClick={closeMenu}>{label}</NavLink>)}
        <a href={membershipUrl} target="_blank" rel="noopener noreferrer" className="nav-join" onClick={closeMenu}>POSTANI ČLAN <ArrowUpRight size={15} aria-hidden="true" /></a>
      </nav>
    </header>
    <main id="main-content" tabIndex={-1}><Outlet /></main>
    <footer className="footer">
      <div className="footer-large">SKUPAJ. <span>V MARIBORU.</span></div>
      <div className="footer-grid"><div><strong>KMŠ / KLUB MARIBORSKIH ŠTUDENTOV</strong><p>{clubContact.address}, {clubContact.city}</p><a href={`mailto:${clubContact.email}`}>{clubContact.email}</a><a href={clubContact.phoneHref}>{clubContact.phone}</a><Link to="/kontakt">URADNE URE & KONTAKT ↗</Link></div>
        <section className="footer-newsletter" aria-labelledby="footer-newsletter-title"><h2 id="footer-newsletter-title">Dobre zgodbe. Tudi po e-pošti.</h2><fieldset className="footer-newsletter-form" disabled aria-describedby="footer-newsletter-note"><legend className="sr-only">Demonstracija prijave na e-novice · ni aktivna</legend><input type="email" placeholder="E-naslov*" aria-label="E-naslov" autoComplete="off" /><input type="text" placeholder="Ime" aria-label="Ime" autoComplete="off" /><input type="text" placeholder="Priimek" aria-label="Priimek" autoComplete="off" /><button type="button">Prijava še ni na voljo</button></fieldset><p id="footer-newsletter-note">Demonstracija: prijava še ni aktivna, podatkov ne zbiramo. <Link to="/newsletter">E-novice ↗</Link></p></section>
        <div><strong>POVEŽI SE</strong><a href={socials.instagram} target="_blank" rel="noopener noreferrer"><Instagram size={15} aria-hidden="true" /> Instagram</a><a href={socials.facebook} target="_blank" rel="noopener noreferrer"><Facebook size={15} aria-hidden="true" /> Facebook</a><a href={socials.youtube} target="_blank" rel="noopener noreferrer"><Youtube size={15} aria-hidden="true" /> YouTube</a><a href={membershipUrl} target="_blank" rel="noopener noreferrer">Postani član ↗</a></div>
      </div>
      <div className="footer-base"><span>© {new Date().getFullYear()} KMŠ / KONCEPTNI PROTOTIP</span><span>USTVARJENO ZA CTRL+CREATE</span></div>
    </footer>
  </>;
}
