(function () {
  "use strict";

  document.addEventListener("click", function (event) {
    var target = event.target;
    if (!(target instanceof Element)) return;

    var button = target.closest(".yt-card[data-video-id]");
    if (!button) return;

    var videoId = button.getAttribute("data-video-id");
    if (!/^[A-Za-z0-9_-]{11}$/.test(videoId || "")) return;

    var frame = document.createElement("iframe");
    frame.src = "https://www.youtube-nocookie.com/embed/" + videoId + "?autoplay=1";
    frame.title = button.getAttribute("data-video-title") || "YouTube video";
    frame.allow = "autoplay; encrypted-media; picture-in-picture";
    frame.allowFullscreen = true;
    frame.loading = "lazy";
    frame.referrerPolicy = "strict-origin-when-cross-origin";

    button.replaceWith(frame);
  });
})();
