import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const observeAll = () => {
      // Hỗ trợ 5 loại reveal: section, image (zoom), stagger (stt từng phần tử con), reveal trái / phải
      const selector = '.scroll-reveal:not(.is-revealed), .scroll-reveal-img:not(.is-revealed), .scroll-reveal-stagger:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed)';
      const targets = document.querySelectorAll(selector);
      if (!targets.length) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-revealed');
              observer.unobserve(entry.target);
            }
          });
        },
        {
          root: null,
          rootMargin: '0px 0px -60px 0px',
          threshold: 0.08,
        }
      );

      targets.forEach((el) => {
        // Hiện ngay nếu element đã nằm trong viewport lúc load (ví dụ Hero)
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('is-revealed');
        } else {
          observer.observe(el);
        }
      });

      return observer;
    };

    const currentObserver = observeAll();

    // Re-check khi có element mới (dynamic content) hoặc cuộn
    const handleScroll = () => {
      const selector = '.scroll-reveal:not(.is-revealed), .scroll-reveal-img:not(.is-revealed), .scroll-reveal-stagger:not(.is-revealed), .reveal-left:not(.is-revealed), .reveal-right:not(.is-revealed)';
      const pending = document.querySelectorAll(selector);
      pending.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top <= window.innerHeight * 0.95) {
          el.classList.add('is-revealed');
        }
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      currentObserver?.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);
}
