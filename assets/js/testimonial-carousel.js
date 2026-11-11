(() => {
  document.querySelectorAll('[data-testimonial-carousel]').forEach((carousel) => {
    const track = carousel.querySelector('[data-testimonial-track]');
    const controls = carousel.querySelector('[data-testimonial-controls]');
    if (!track || !controls) return;

    const quotes = Array.from(track.children);
    if (quotes.length < 3) return;

    let index = 0;

    const getMetrics = () => {
      const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
      const step = quotes[0].getBoundingClientRect().width + gap;
      const visibleCount = Math.max(1, Math.floor((track.parentElement.clientWidth + gap) / step));
      return { step, maxIndex: Math.max(0, quotes.length - visibleCount) };
    };

    const updatePosition = () => {
      const { step, maxIndex } = getMetrics();
      index = Math.min(index, maxIndex);
      track.style.transform = `translateX(${-index * step}px)`;
    };

    controls.querySelectorAll('[data-testimonial-direction]').forEach((button) => {
      button.addEventListener('click', () => {
        const { step, maxIndex } = getMetrics();
        if (maxIndex === 0) return;

        track.classList.add('credits-track--manual');
        const direction = Number(button.dataset.testimonialDirection);
        index = (index + direction + maxIndex + 1) % (maxIndex + 1);
        track.style.transform = `translateX(${-index * step}px)`;
      });
    });

    window.addEventListener('resize', () => {
      if (track.classList.contains('credits-track--manual')) updatePosition();
    });

    controls.hidden = false;
  });
})();
