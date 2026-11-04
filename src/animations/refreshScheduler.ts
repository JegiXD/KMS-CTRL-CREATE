import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Parent/child contexts see the same image/font events. Refresh once per burst.
const pending = new Set<object>();
let timer: ReturnType<typeof setTimeout> | undefined;
export function requestScrollRefresh(owner: object) {
  pending.add(owner);
  if (timer !== undefined) return;
  timer = setTimeout(() => {
    timer = undefined;
    if (!pending.size) return;
    pending.clear();
    ScrollTrigger.refresh();
  }, 80);
}
export function cancelScrollRefresh(owner: object) {
  pending.delete(owner);
  if (!pending.size && timer !== undefined) {
    clearTimeout(timer);
    timer = undefined;
  }
}
