import { useLayoutEffect,useRef } from 'react';
import gsap from 'gsap';import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
// Layout cleanup odstrani pin-spacer, preden React odstrani pripeto sekcijo.
// Povezan scroll: premik napisa, galerije in horizontalne niti znotraj iste sekcije.
export default function ScrollStory(){const scope=useRef<HTMLElement>(null);useLayoutEffect(()=>{const el=scope.current;if(!el||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;
 const ctx=gsap.context(()=>{const timeline=gsap.timeline({scrollTrigger:{trigger:el,start:'top top',end:'+=125%',scrub:1,pin:true,anticipatePin:1,invalidateOnRefresh:true}});timeline.fromTo('.story-word',{xPercent:0},{xPercent:-15,ease:'none'},0).fromTo('.story-line',{scaleX:0},{scaleX:1,ease:'none'},0).fromTo('.story-frame-a',{yPercent:12},{yPercent:-14,ease:'none'},0).fromTo('.story-frame-b',{yPercent:-12},{yPercent:12,ease:'none'},0)},el);
 return()=>ctx.revert()},[]);return <section className="story" ref={scope} aria-label="Povezana scroll animacija"><div className="story-top">ZDRUŽENI V ENO ZGODBO <span>01 — 03</span></div><div className="story-visual"><div className="story-frame story-frame-a"><div className="story-placeholder">DOGODKI</div></div><div className="story-frame story-frame-b"><div className="story-placeholder alt">SKUPNOST</div></div><div className="story-word">MI SMO KMŠ.</div></div><div className="story-line"/><div className="story-bottom">PREMIKAJ SE NAPREJ ↓ <span>SKUPAJ GRADIMO ŠTUDENTSKI MARIBOR</span></div></section>}
