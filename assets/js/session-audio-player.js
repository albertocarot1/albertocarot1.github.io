(function () {
  const players = Array.from(document.querySelectorAll('[data-audio-player]'));
  let activeAudio = null;

  if (!players.length) return;

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return '0:00';
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    return `${minutes}:${String(remainingSeconds).padStart(2, '0')}`;
  };

  players.forEach((player) => {
    const audio = player.querySelector('audio');
    const playButton = player.querySelector('[data-play]');
    const playIcon = player.querySelector('[data-play-icon]');
    const seek = player.querySelector('[data-seek]');
    const currentTime = player.querySelector('[data-current-time]');
    const duration = player.querySelector('[data-duration]');
    const status = player.querySelector('[data-player-status]');
    const volume = player.querySelector('[data-volume]');
    const volumeToggle = player.querySelector('[data-volume-toggle]');
    const volumeRange = player.querySelector('[data-volume-range]');
    const sampleTitle = player.querySelector('.session-player__title').textContent.trim();
    const variants = Array.from(player.querySelectorAll('[data-variant]')).map((variant) => ({
      file: variant.dataset.file,
      mix: variant.dataset.mix,
      grid: variant.dataset.grid === 'true'
    }));
    const variantControls = Array.from(player.querySelectorAll('[data-variant-control]'));
    let selectedVariant = variants[0];
    let switchToken = 0;
    let switching = false;
    let pendingMetadataHandler = null;

    const setPlaying = (playing) => {
      playIcon.textContent = playing ? 'Ⅱ' : '▶';
      playButton.setAttribute('aria-label', `${playing ? 'Pause' : 'Play'} sample ${sampleTitle}`);
    };

    const updateVariantControls = () => {
      variantControls.forEach((control) => {
        const field = control.dataset.variantControl;
        const otherField = field === 'mix' ? 'grid' : 'mix';
        const value = selectedVariant[field];
        const label = field === 'grid' ? (value ? 'grid' : 'no grid') : value;
        const hasAlternative = variants.some((variant) => (
          variant[field] !== value && variant[otherField] === selectedVariant[otherField]
        ));

        control.textContent = label;
        control.disabled = !hasAlternative;
        const description = hasAlternative
          ? `Click to switch to ${field === 'grid' ? (value ? 'no grid' : 'grid') : (value === 'raw' ? 'mixed' : 'raw')}`
          : 'No alternate version available';
        control.setAttribute('aria-label', `${field === 'grid' ? 'Grid' : 'Mix'}: ${label}. ${description}.`);
        control.title = description;
      });
    };

    const setVolumeOpen = (open) => {
      volume.classList.toggle('is-open', open);
      volumeToggle.setAttribute('aria-expanded', String(open));
      volumeToggle.setAttribute('aria-label', `${open ? 'Hide' : 'Show'} volume control`);
    };

    playButton.addEventListener('click', () => {
      status.textContent = '';
      if (switching) {
        switching = false;
        switchToken += 1;
        activeAudio = null;
        setPlaying(false);
        return;
      }
      if (!audio.paused) {
        audio.pause();
        return;
      }

      if (activeAudio && activeAudio !== audio) activeAudio.pause();
      activeAudio = audio;
      const requestedSource = audio.src;
      const playRequest = audio.play();
      if (playRequest && typeof playRequest.catch === 'function') {
        playRequest.catch((error) => {
          if (audio.src !== requestedSource || error.name === 'AbortError') return;
          if (activeAudio === audio) activeAudio = null;
          status.textContent = 'Could not play this sample. Check that its MP3 file is available.';
        });
      }
    });

    variantControls.forEach((control) => {
      control.addEventListener('click', () => {
        const field = control.dataset.variantControl;
        const otherField = field === 'mix' ? 'grid' : 'mix';
        const nextVariant = variants.find((variant) => (
          variant[field] !== selectedVariant[field] && variant[otherField] === selectedVariant[otherField]
        ));
        if (!nextVariant) return;

        const wasPlaying = !audio.paused && !audio.ended;
        const position = audio.currentTime;
        const token = ++switchToken;
        if (pendingMetadataHandler) audio.removeEventListener('loadedmetadata', pendingMetadataHandler);
        selectedVariant = nextVariant;
        switching = true;
        if (wasPlaying) activeAudio = audio;
        status.textContent = '';
        updateVariantControls();
        seek.disabled = true;

        const restorePlayback = () => {
          if (token !== switchToken) return;
          audio.removeEventListener('loadedmetadata', restorePlayback);
          pendingMetadataHandler = null;
          switching = false;
          audio.currentTime = Math.min(position, audio.duration);
          currentTime.textContent = formatTime(audio.currentTime);
          seek.max = String(audio.duration);
          seek.value = String(audio.currentTime);
          seek.disabled = !Number.isFinite(audio.duration);

          if (wasPlaying && activeAudio === audio) {
            activeAudio = audio;
            const requestedSource = audio.src;
            const playRequest = audio.play();
            if (playRequest && typeof playRequest.catch === 'function') {
              playRequest.catch((error) => {
                if (audio.src !== requestedSource || error.name === 'AbortError') return;
                if (activeAudio === audio) activeAudio = null;
                setPlaying(false);
                status.textContent = 'Could not play this sample. Check that its MP3 file is available.';
              });
            }
          }
        };

        pendingMetadataHandler = restorePlayback;
        audio.addEventListener('loadedmetadata', restorePlayback);
        audio.src = nextVariant.file;
        audio.load();
      });
    });

    audio.addEventListener('play', () => {
      players.forEach((otherPlayer) => {
        const otherAudio = otherPlayer.querySelector('audio');
        if (otherAudio !== audio) otherAudio.pause();
      });
      activeAudio = audio;
      setPlaying(true);
    });

    audio.addEventListener('pause', () => {
      if (switching) return;
      setPlaying(false);
      if (activeAudio === audio) activeAudio = null;
    });

    audio.addEventListener('ended', () => {
      audio.currentTime = 0;
      currentTime.textContent = '0:00';
      if (activeAudio === audio) activeAudio = null;
    });

    audio.addEventListener('loadedmetadata', () => {
      duration.textContent = formatTime(audio.duration);
      seek.max = String(audio.duration);
      seek.disabled = !Number.isFinite(audio.duration);
    });

    audio.addEventListener('durationchange', () => {
      duration.textContent = formatTime(audio.duration);
      seek.max = Number.isFinite(audio.duration) ? String(audio.duration) : '0';
      seek.disabled = !Number.isFinite(audio.duration);
    });

    audio.addEventListener('timeupdate', () => {
      currentTime.textContent = formatTime(audio.currentTime);
      seek.value = String(audio.currentTime);
    });

    audio.addEventListener('error', () => {
      switching = false;
      if (pendingMetadataHandler) {
        audio.removeEventListener('loadedmetadata', pendingMetadataHandler);
        pendingMetadataHandler = null;
      }
      if (activeAudio === audio) activeAudio = null;
      setPlaying(false);
      status.textContent = 'Could not load this sample. Check that its MP3 file is available.';
    });

    seek.addEventListener('input', () => {
      audio.currentTime = Number(seek.value);
    });

    volumeRange.addEventListener('input', () => {
      audio.volume = Number(volumeRange.value);
    });

    volumeToggle.addEventListener('click', () => {
      if (window.matchMedia('(hover: hover)').matches) {
        setVolumeOpen(true);
      } else {
        setVolumeOpen(volumeToggle.getAttribute('aria-expanded') !== 'true');
      }
    });

    volume.addEventListener('pointerenter', () => {
      if (window.matchMedia('(hover: hover)').matches) setVolumeOpen(true);
    });

    volume.addEventListener('pointerleave', () => {
      if (!volume.contains(document.activeElement)) setVolumeOpen(false);
    });

    volume.addEventListener('focusin', () => setVolumeOpen(true));
    volume.addEventListener('focusout', () => {
      if (!volume.contains(document.activeElement)) setVolumeOpen(false);
    });

    updateVariantControls();
  });
}());
