(function () {
  const email = ['music', 'albertocaroli.com'].join('@');
  document.querySelectorAll('[data-email-link]').forEach((container) => {
    const link = document.createElement('a');
    link.href = `mailto:${email}`;
    link.textContent = email;
    container.appendChild(link);
  });

  const form = document.querySelector('.form[action^="https://formspree.io/"]');
  if (!form) return;

  const projectTypes = {
    touring: 'Live shows & tours',
    studio: 'In-person studio sessions',
    remote: 'Remote drum tracks'
  };
  const requestedType = new URLSearchParams(window.location.search).get('type');
  if (Object.prototype.hasOwnProperty.call(projectTypes, requestedType)) {
    const option = form.querySelector(`input[name="project_type"][value="${projectTypes[requestedType]}"]`);
    if (option) option.checked = true;
  }

  const status = form.querySelector('[data-form-status]');
  const submitButton = form.querySelector('button[type="submit"]');
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    status.removeAttribute('data-state');
    status.textContent = 'Sending…';
    submitButton.disabled = true;

    fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    })
      .then((response) => response.json().then((result) => ({ response, result })))
      .then(({ response, result }) => {
        if (!response.ok) {
          const reason = Array.isArray(result.errors)
            ? result.errors.map((item) => item.message).join(' ')
            : 'Please try again.';
          throw new Error(reason);
        }
        form.reset();
        status.dataset.state = 'success';
        status.textContent = 'Thanks — your message was sent. I’ll get back to you soon.';
      })
      .catch((error) => {
        console.error('Contact form submission failed:', error);
        status.dataset.state = 'error';
        status.textContent = 'Your message could not be sent. Please try again or email me using the link above.';
      })
      .finally(() => {
        submitButton.disabled = false;
      });
  });
}());
