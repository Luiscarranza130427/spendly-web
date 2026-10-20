import { gsap } from 'gsap';

export function initGsapAnimations() {
  if (typeof window === 'undefined') return;

  // Respetar preferencias de accesibilidad
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  // 1. Animación 3D Tilt en Cards e Ilustraciones
  const tiltElements = document.querySelectorAll<HTMLElement>('.spendly-card, .tilt-3d');

  tiltElements.forEach((el) => {
    let bounds: DOMRect;

    function handleMouseEnter() {
      bounds = el.getBoundingClientRect();
    }

    function handleMouseMove(e: MouseEvent) {
      if (!bounds) bounds = el.getBoundingClientRect();

      const mouseX = e.clientX - bounds.left;
      const mouseY = e.clientY - bounds.top;

      const xPct = (mouseX / bounds.width) - 0.5;
      const yPct = (mouseY / bounds.height) - 0.5;

      gsap.to(el, {
        rotationY: xPct * 8, // Ángulo 3D horizontal sutil
        rotationX: -yPct * 8, // Ángulo 3D vertical sutil
        transformPerspective: 900,
        transformOrigin: 'center center',
        duration: 0.35,
        ease: 'power1.out',
      });
    }

    function handleMouseLeave() {
      gsap.to(el, {
        rotationY: 0,
        rotationX: 0,
        duration: 0.6,
        ease: 'power2.out',
      });
    }

    el.addEventListener('mouseenter', handleMouseEnter);
    el.addEventListener('mousemove', handleMouseMove);
    el.addEventListener('mouseleave', handleMouseLeave);
  });

  // 2. Animación de Entrada Suave (Scroll Reveals)
  const revealElements = document.querySelectorAll<HTMLElement>('[data-reveal]');

  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target as HTMLElement;
          const delay = parseFloat(target.getAttribute('data-delay') || '0');

          gsap.fromTo(
            target,
            { opacity: 0, y: 30 },
            {
              opacity: 1,
              y: 0,
              duration: 0.75,
              delay: delay,
              ease: 'power2.out',
            }
          );

          observer.unobserve(target);
        }
      });
    }, {
      rootMargin: '0px 0px -50px 0px',
      threshold: 0.1,
    });

    revealElements.forEach((el) => observer.observe(el));
  }

  // 3. Flotación 3D Sinusoidal para Insignias y Cards Flotantes del Hero
  const floatingCards = document.querySelectorAll<HTMLElement>('.animate-float-slow');
  floatingCards.forEach((card, idx) => {
    gsap.to(card, {
      y: -8,
      rotationZ: idx % 2 === 0 ? 0.75 : -0.75,
      duration: 3 + idx * 0.5,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });
}
