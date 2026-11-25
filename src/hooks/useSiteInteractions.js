import { useEffect } from 'react';

export function useSiteInteractions() {
  useEffect(() => {
    const RM = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // 1. Reveal observer for .rv elements
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -30px 0px' }
    );
    document.querySelectorAll('.rv:not(.in)').forEach((el) => io.observe(el));

    // 2. Count-up numbers
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target;
          const to = +el.dataset.count;
          if (isNaN(to)) return;
          const t0 = performance.now();
          const d = 1600;
          const step = (t) => {
            const k = Math.min(1, (t - t0) / d);
            el.textContent = Math.round(to * (1 - Math.pow(1 - k, 3)));
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll('[data-count]').forEach((el) => cio.observe(el));

    // 3. Scroll progress bar
    let bar = document.querySelector('.progress');
    if (!bar) {
      bar = document.createElement('div');
      bar.className = 'progress';
      document.body.appendChild(bar);
    }
    const prog = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      bar.style.transform = `scaleX(${h > 0 ? window.scrollY / h : 0})`;
    };
    window.addEventListener('scroll', prog, { passive: true });
    window.addEventListener('resize', prog);
    prog();

    // 4. 3D card tilt & license tilt
    const listeners = [];
    if (window.matchMedia('(hover:hover) and (pointer:fine)').matches) {
      document.querySelectorAll('.tilt').forEach((c) => {
        const onMove = (e) => {
          const r = c.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width;
          const y = (e.clientY - r.top) / r.height;
          c.style.transform = `perspective(900px) rotateX(${(.5 - y) * 6}deg) rotateY(${(x - .5) * 8}deg) translateY(-4px)`;
          c.style.setProperty('--mx', x * 100 + '%');
          c.style.setProperty('--my', y * 100 + '%');
        };
        const onLeave = () => {
          c.style.transform = '';
        };
        c.addEventListener('pointermove', onMove);
        c.addEventListener('pointerleave', onLeave);
        listeners.push(() => {
          c.removeEventListener('pointermove', onMove);
          c.removeEventListener('pointerleave', onLeave);
        });
      });

      const lic = document.getElementById('license');
      if (lic && lic.parentElement) {
        const st = lic.parentElement;
        const onLicMove = (e) => {
          const r = st.getBoundingClientRect();
          const x = (e.clientX - r.left) / r.width - .5;
          const y = (e.clientY - r.top) / r.height - .5;
          lic.style.transform = `rotateY(${x * 24}deg) rotateX(${-y * 16}deg)`;
        };
        const onLicLeave = () => {
          lic.style.transform = '';
        };
        st.addEventListener('pointermove', onLicMove);
        st.addEventListener('pointerleave', onLicLeave);
        listeners.push(() => {
          st.removeEventListener('pointermove', onLicMove);
          st.removeEventListener('pointerleave', onLicLeave);
        });
      }

      // Magnetic buttons
      if (!RM) {
        const onMagMove = (e) => {
          const b = e.target.closest && e.target.closest('.btn-primary,.read-more,.btn-ghost');
          document.querySelectorAll('.magnet').forEach((x) => {
            if (x !== b) {
              x.style.transform = '';
              x.classList.remove('magnet');
            }
          });
          if (!b) return;
          const r = b.getBoundingClientRect();
          b.classList.add('magnet');
          b.style.transform = `translate(${((e.clientX - r.left) / r.width - .5) * 12}px,${((e.clientY - r.top) / r.height - .5) * 10}px)`;
        };
        document.addEventListener('pointermove', onMagMove);
        listeners.push(() => document.removeEventListener('pointermove', onMagMove));
      }
    }

    return () => {
      io.disconnect();
      cio.disconnect();
      window.removeEventListener('scroll', prog);
      window.removeEventListener('resize', prog);
      listeners.forEach((fn) => fn());
      if (bar && bar.parentElement) bar.parentElement.removeChild(bar);
    };
  }, []);
}
