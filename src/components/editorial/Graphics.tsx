export function DoodleLayer({ className = '' }: { className?: string }) {
  return <svg className={`doodle-layer ${className}`} viewBox="0 0 360 300" fill="none" aria-hidden="true"><path d="M42 74C90 13 249 15 286 63S189 149 96 124 22 43 102 32M245 170c47 4 40 56-5 53s-40-53 0-42M60 218c66 53 137-34 195 28m-29-27 29 27-35 3" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/><path d="m306 103 8 19 21-4-13 17 11 17-21-5-12 17 1-22-20-8 21-6z" fill="currentColor" stroke="none"/></svg>;
}

export function EditorialBackground() {
  return <div className="editorial-background" aria-hidden="true"><svg viewBox="0 0 1440 6000" preserveAspectRatio="none" fill="none"><path d="M1180 0C1470 550 80 440 260 1050S1310 1100 1160 1830 170 1880 250 2630 1340 2730 1180 3470 130 3650 240 4310 1400 4630 1170 5260 240 5540 260 6000" stroke="currentColor" strokeWidth="2" vectorEffect="non-scaling-stroke"/><path d="M0 2500q400-200 750 0t690-20M0 4700q400 200 740 0t700-30" stroke="currentColor" strokeWidth="1" strokeDasharray="7 12" vectorEffect="non-scaling-stroke"/></svg><span className="background-word word-one">KMŠ</span><span className="background-word word-two">SKUPAJ</span><span className="background-word word-three">NAPREJ</span></div>;
}
