import { useEffect,useRef } from 'react';
import gsap from 'gsap';import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
export function Reveal({children,className=''}:{children:React.ReactNode,className?:string}){
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{const el=ref.current;if(!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;const ctx=gsap.context(()=>{gsap.fromTo(el,{opacity:0,y:38},{opacity:1,y:0,duration:0.85,ease:'power2.out',scrollTrigger:{trigger:el,start:'top 88%',once:true}})},el);return()=>ctx.revert()},[]);
 return <div ref={ref} className={className}>{children}</div>
}
