document.querySelectorAll('.video-embed__placeholder[data-youtube-id]').forEach((link) => {
  link.addEventListener('click', (event) => {
    event.preventDefault();
    const iframe = document.createElement('iframe');
    iframe.src = `https://www.youtube-nocookie.com/embed/${encodeURIComponent(link.dataset.youtubeId)}?autoplay=1`;
    iframe.title = link.dataset.youtubeTitle;
    iframe.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share';
    iframe.referrerPolicy = 'strict-origin-when-cross-origin';
    iframe.allowFullscreen = true;
    iframe.loading = 'lazy';
    link.replaceWith(iframe);
    iframe.focus({ preventScroll: true });
  });
});
