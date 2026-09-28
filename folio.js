(() => {
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const cur = document.querySelector('.tabs [aria-current="page"]');
  if (cur) cur.scrollIntoView({block:'nearest',inline:'center'});
  const pens = document.querySelectorAll('.pen');
  if (reduce || !('IntersectionObserver' in window)) { pens.forEach(p => p.classList.add('drawn')); return; }
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (e.isIntersecting) { setTimeout(() => e.target.classList.add('drawn'), 300); io.unobserve(e.target); }
  }), {threshold:.6});
  pens.forEach(p => io.observe(p));
})();
