(() => {
  const header = document.querySelector('.site-header');
  const nav = document.querySelector('.main-nav');
  const toggle = document.querySelector('.nav-toggle');

  const onScroll = () => header?.classList.toggle('scrolled', window.scrollY > 24);
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });

  toggle?.addEventListener('click', () => {
    const open = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!open));
    toggle.classList.toggle('active', !open);
    nav?.classList.toggle('open', !open);
  });

  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    toggle?.setAttribute('aria-expanded', 'false');
    toggle?.classList.remove('active');
    nav.classList.remove('open');
  }));

  document.querySelectorAll('[data-package]').forEach(link => {
    link.addEventListener('click', () => {
      const select = document.querySelector('#paket');
      if (select) select.value = link.dataset.package || 'Noch unklar';
    });
  });

  document.querySelectorAll('[data-year]').forEach(el => el.textContent = new Date().getFullYear());

  const revealEls = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px' });
    revealEls.forEach(el => observer.observe(el));
  } else {
    revealEls.forEach(el => el.classList.add('visible'));
  }

  const params = new URLSearchParams(location.search);
  const form = document.querySelector('[data-contact-form]');
  const status = form?.querySelector('.form-status');
  if (status && params.get('sent') === '1') {
    status.textContent = 'Danke! Deine Anfrage wurde versendet.';
    status.classList.add('visible');
  }
  if (status && params.get('error') === '1') {
    status.textContent = 'Die Anfrage konnte nicht versendet werden. Bitte schreibe direkt an marcelreifenstein@yahoo.com.';
    status.classList.add('visible', 'error');
  }

  // Lokale Vorschau: Statt PHP wird eine vorausgefüllte E-Mail geöffnet.
  if (form && location.protocol === 'file:') {
    form.addEventListener('submit', event => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const data = new FormData(form);
      const subject = `DJ-Anfrage: ${data.get('anlass')} am ${data.get('datum')}`;
      const body = [
        `Name: ${data.get('name')}`,
        `E-Mail: ${data.get('email')}`,
        `Telefon: ${data.get('telefon') || '-'}`,
        `Datum: ${data.get('datum')}`,
        `Anlass: ${data.get('anlass')}`,
        `Gäste: ${data.get('gaeste') || 'Noch unklar'}`,
        `Ort: ${data.get('ort')}`,
        `Paket: ${data.get('paket')}`,
        '',
        'Nachricht:',
        String(data.get('nachricht'))
      ].join('\n');
      location.href = `mailto:marcelreifenstein@yahoo.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
