/* ============================================
   PORTFOLIO APP
   Reads config.js and renders the entire site.
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  const C = window.PORTFOLIO_CONFIG;
  if (!C) {
    console.error('PORTFOLIO_CONFIG not found. Make sure config.js is loaded before app.js.');
    return;
  }

  // ── SVG Icons ────────────────────────────────
  const ICONS = {
    github: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/></svg>',
    linkedin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>',
    twitter: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>',
    email: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67z"/><path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908z"/></svg>',
    external: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    code: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>',
    server: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/></svg>',
    cloud: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z"/></svg>',
    database: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
    tool: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
    mapPin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
    arrowUp: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="19" x2="12" y2="5"/><polyline points="5 12 12 5 19 12"/></svg>',
    folder: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>',
    send: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
    award: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
    download: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    calendar: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
    briefcase: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
    graduationCap: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"/></svg>',
  };

  function icon(name) {
    return ICONS[name] || '';
  }

  // ── Utility ──────────────────────────────────
  function el(tag, className, innerHTML) {
    const e = document.createElement(tag);
    if (className) e.className = className;
    if (innerHTML) e.innerHTML = innerHTML;
    return e;
  }

  function sanitizeUrl(url) {
    if (!url) return '#';
    try {
      const u = new URL(url, window.location.origin);
      if (['http:', 'https:', 'mailto:'].includes(u.protocol)) return url;
    } catch {}
    if (url.startsWith('#') || url.startsWith('/') || url.startsWith('assets/')) return url;
    return '#';
  }

  // ── Render: Meta ─────────────────────────────
  function renderMeta() {
    const m = C.meta;
    document.title = m.title;
    const setMeta = (sel, val) => {
      const tag = document.querySelector(sel);
      if (tag && val) tag.setAttribute('content', val);
    };
    setMeta('meta[name="description"]', m.description);
    setMeta('meta[property="og:title"]', m.title);
    setMeta('meta[property="og:description"]', m.description);
    setMeta('meta[property="og:image"]', m.ogImage);
  }

  // ── Render: Navigation ───────────────────────
  function renderNav() {
    const nav = document.getElementById('nav');
    const n = C.nav;

    let logoHtml;
    if (n.logoIsImage) {
      logoHtml = `<img src="${sanitizeUrl(n.logo)}" alt="Logo" style="height:32px">`;
    } else {
      logoHtml = n.logo;
    }

    const linksHtml = n.links.map(l =>
      `<a href="${l.href}" class="nav-link" data-section="${l.href.replace('#','')}">${l.label}</a>`
    ).join('');

    const resumeHtml = n.resumeLink
      ? `<a href="${sanitizeUrl(n.resumeLink)}" class="nav-resume-btn" target="_blank" rel="noopener">${n.resumeLabel}</a>`
      : '';

    nav.innerHTML = `
      <div class="nav-inner">
        <a href="#hero" class="nav-logo" aria-label="Go to top">${logoHtml}</a>
        <div class="nav-links">${linksHtml}${resumeHtml}</div>
        <button class="nav-hamburger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span><span></span>
        </button>
      </div>
      <div class="nav-mobile-overlay"></div>
      <div class="nav-mobile">
        ${n.links.map(l =>
          `<a href="${l.href}" class="nav-link" data-section="${l.href.replace('#','')}">${l.label}</a>`
        ).join('')}
        ${resumeHtml ? `<a href="${sanitizeUrl(n.resumeLink)}" class="btn btn-primary" target="_blank" rel="noopener">${n.resumeLabel}</a>` : ''}
      </div>
    `;
  }

  // ── Render: Hero ─────────────────────────────
  function renderHero() {
    const section = document.getElementById('hero');
    const h = C.hero;

    const socialHtml = h.socialLinks.map(s =>
      `<a href="${sanitizeUrl(s.url)}" class="social-link" target="_blank" rel="noopener" aria-label="${s.platform}">${icon(s.icon)}</a>`
    ).join('');

    const secondaryAttrs = h.cta.secondary.download
      ? `href="${sanitizeUrl(h.cta.secondary.href)}" download`
      : `href="${sanitizeUrl(h.cta.secondary.href)}"`;

    const avatarHtml = h.avatar
      ? `<div class="hero-avatar"><img src="${sanitizeUrl(h.avatar)}" alt="${h.name}"></div>`
      : '';

    section.innerHTML = `
      <div class="hero-content">
        ${avatarHtml}
        <h1 class="hero-name">${h.greeting} <span class="name-highlight">${h.name}</span></h1>
        <div class="hero-roles">
          <span class="typed-text"></span><span class="typed-cursor"></span>
        </div>
        <p class="hero-tagline">${h.tagline}</p>
        <div class="hero-ctas">
          <a href="${sanitizeUrl(h.cta.primary.href)}" class="btn btn-primary">${h.cta.primary.label}</a>
          <a ${secondaryAttrs} class="btn btn-outline">${h.cta.secondary.label}</a>
        </div>
        <div class="hero-social">${socialHtml}</div>
      </div>
    `;
  }

  // ── Render: About ────────────────────────────
  function renderAbout() {
    const section = document.getElementById('about');
    const a = C.about;

    const imageHtml = a.image
      ? `<img src="${sanitizeUrl(a.image)}" alt="Profile photo">`
      : `<div class="about-placeholder">${C.hero.name.split(' ').map(w => w[0]).join('')}</div>`;

    const bioHtml = a.bio.map(p => `<p>${p}</p>`).join('');

    const statsHtml = a.stats.map(s =>
      `<div class="stat-card reveal">
        <div class="stat-value" data-target="${s.value}">${s.value}</div>
        <div class="stat-label">${s.label}</div>
      </div>`
    ).join('');

    section.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${a.heading}</h2>
        </div>
        <div class="about-grid">
          <div class="about-image-wrap reveal">
            <div class="about-image">${imageHtml}</div>
          </div>
          <div class="about-text reveal">
            ${bioHtml}
            <div class="about-stats reveal-stagger">${statsHtml}</div>
          </div>
        </div>
      </div>
    `;
  }

  // ── Render: Qualification (Tabbed) ───────────
  function renderQualification() {
    const section = document.getElementById('qualification');
    const q = C.qualification;

    // Build zigzag entries for a list of items
    function buildZigzag(items) {
      return items.map((item, i) => {
        const dateHtml = `<div class="qual-date">${icon('calendar') || ''} ${item.period}</div>`;
        const onelinerHtml = item.oneliner ? `<span class="qual-oneliner">${item.oneliner}</span>` : '';
        const dataHtml = `
          <div class="qual-data">
            <h3 class="qual-title">${item.title}</h3>
            <span class="qual-place">${item.place}</span>
            ${onelinerHtml}
            ${dateHtml}
          </div>
        `;
        const dotHtml = `
          <div class="qual-dot-col">
            <span class="qual-dot"></span>
            ${i < items.length - 1 ? '<span class="qual-line"></span>' : ''}
          </div>
        `;

        // Zigzag: even index = data | dot | empty, odd = empty | dot | data
        if (i % 2 === 0) {
          return `<div class="qual-entry">${dataHtml}${dotHtml}<div class="qual-empty"></div></div>`;
        } else {
          return `<div class="qual-entry"><div class="qual-empty"></div>${dotHtml}${dataHtml}</div>`;
        }
      }).join('');
    }

    const educationHtml = buildZigzag(q.education);
    const workHtml = buildZigzag(q.work);

    const eduActive = q.defaultTab === 'education' ? ' active' : '';
    const workActive = q.defaultTab === 'work' ? ' active' : '';

    section.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${q.heading}</h2>
        </div>
        <span class="qual-subtitle reveal">${q.subtitle}</span>

        <div class="qual-tabs reveal">
          <button class="qual-tab${eduActive}" data-tab="education">
            ${icon('graduationCap')} Education
          </button>
          <button class="qual-tab${workActive}" data-tab="work">
            ${icon('briefcase')} Work
          </button>
        </div>

        <div class="qual-panel${eduActive}" data-panel="education">
          ${educationHtml}
        </div>
        <div class="qual-panel${workActive}" data-panel="work">
          ${workHtml}
        </div>
      </div>
    `;
  }

  // ── Render: Achievements ─────────────────────
  function renderAchievements() {
    const section = document.getElementById('achievements');
    const a = C.achievements;

    const cardsHtml = a.items.map(item => {
      const tagsHtml = item.tags.map(t => `<span class="tag">${t}</span>`).join('');
      const linkHtml = item.url
        ? `<a href="${sanitizeUrl(item.url)}" class="achievement-link" target="_blank" rel="noopener">${icon('external')}</a>`
        : '';

      const bulletsHtml = (item.bullets || []).map(b =>
        `<li>${b}</li>`
      ).join('');

      return `
        <div class="achievement-card reveal">
          <h3>${item.company} ${linkHtml}</h3>
          <ul class="achievement-bullets">${bulletsHtml}</ul>
          <div class="achievement-tags">${tagsHtml}</div>
        </div>
      `;
    }).join('');

    section.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${a.heading}</h2>
        </div>
        <div class="achievements-grid reveal-stagger">${cardsHtml}</div>
      </div>
    `;
  }

  // ── Render: Projects ─────────────────────────
  function renderProjects() {
    const section = document.getElementById('projects');
    const p = C.projects;

    const cardsHtml = p.items.map(proj => {
      const imgHtml = proj.image
        ? `<img src="${sanitizeUrl(proj.image)}" alt="${proj.title}">`
        : `<div class="project-placeholder-icon">${icon('folder')}</div>`;

      const tagsHtml = proj.technologies.map(t => `<span class="tag">${t}</span>`).join('');

      let linksHtml = '';
      if (proj.githubUrl) {
        linksHtml += `<a href="${sanitizeUrl(proj.githubUrl)}" class="project-link" target="_blank" rel="noopener" aria-label="View source code">${icon('github')} Code</a>`;
      }
      if (proj.liveUrl) {
        linksHtml += `<a href="${sanitizeUrl(proj.liveUrl)}" class="project-link" target="_blank" rel="noopener" aria-label="View live demo">${icon('external')} Live Demo</a>`;
      }

      const featuredClass = proj.featured ? ' featured' : '';

      return `
        <article class="project-card${featuredClass} reveal">
          <div class="project-image">${imgHtml}</div>
          <div class="project-body">
            <h3 class="project-title">${proj.title}</h3>
            <p class="project-desc">${proj.description}</p>
            <div class="project-tags">${tagsHtml}</div>
            <div class="project-links">${linksHtml}</div>
          </div>
        </article>
      `;
    }).join('');

    section.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${p.heading}</h2>
        </div>
        <div class="projects-grid reveal-stagger">${cardsHtml}</div>
      </div>
    `;
  }

  // ── Render: Skills ───────────────────────────
  function renderSkills() {
    const section = document.getElementById('skills');
    const s = C.skills;

    const categoriesHtml = s.categories.map(cat => {
      const tagsHtml = cat.items.map(t => `<span class="skill-tag">${t}</span>`).join('');
      const catIcon = icon(cat.icon) || icon('code');

      return `
        <div class="skill-category reveal">
          <div class="skill-category-header">
            <div class="skill-category-icon">${catIcon}</div>
            <h3 class="skill-category-name">${cat.name}</h3>
          </div>
          <div class="skill-tags">${tagsHtml}</div>
        </div>
      `;
    }).join('');

    section.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${s.heading}</h2>
        </div>
        <div class="skills-grid reveal-stagger">${categoriesHtml}</div>
      </div>
    `;
  }

  // ── Render: Contact ──────────────────────────
  function renderContact() {
    const section = document.getElementById('contact');
    const c = C.contact;

    const socialHtml = (c.socialLinks || []).map(s =>
      `<a href="${sanitizeUrl(s.url)}" class="social-link" target="_blank" rel="noopener" aria-label="${s.platform}">${icon(s.icon)}</a>`
    ).join('');

    const formHtml = c.email ? `
      <div class="contact-form-wrap reveal">
        <form class="form" id="contact-form">
          <div class="form-group">
            <label class="form-label" for="contact-name">Name</label>
            <input type="text" id="contact-name" name="name" class="form-input" placeholder="Your name" required aria-required="true">
            <span class="form-error" id="name-error">Please enter your name</span>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-subject">Subject</label>
            <input type="text" id="contact-subject" name="subject" class="form-input" placeholder="What's this about?" required aria-required="true">
            <span class="form-error" id="subject-error">Please enter a subject</span>
          </div>
          <div class="form-group">
            <label class="form-label" for="contact-message">Message</label>
            <textarea id="contact-message" name="message" class="form-textarea" placeholder="Your message..." required aria-required="true"></textarea>
            <span class="form-error" id="message-error">Please enter a message</span>
          </div>
          <button type="submit" class="btn btn-primary" style="width:100%;justify-content:center">
            ${icon('send')} Send Message
          </button>
        </form>
      </div>
    ` : '';

    section.innerHTML = `
      <div class="container">
        <div class="section-header reveal">
          <h2 class="section-title">${c.heading}</h2>
          <p class="section-subtitle">${c.description}</p>
        </div>
        <div class="contact-grid">
          <div class="contact-info reveal">
            ${c.email ? `<div class="contact-detail">${icon('email')} <a href="mailto:${c.email}">${c.email}</a></div>` : ''}
            ${c.location ? `<div class="contact-detail">${icon('mapPin')} ${c.location}</div>` : ''}
            <div class="contact-social">${socialHtml}</div>
          </div>
          ${formHtml}
        </div>
      </div>
    `;
  }

  // ── Render: Footer ───────────────────────────
  function renderFooter() {
    const footer = document.getElementById('footer');
    const f = C.footer;
    const links = f.socialLinks || C.hero.socialLinks || [];

    const socialHtml = links.map(s =>
      `<a href="${sanitizeUrl(s.url)}" class="social-link" target="_blank" rel="noopener" aria-label="${s.platform}">${icon(s.icon)}</a>`
    ).join('');

    const year = f.showYear ? ` &copy; ${new Date().getFullYear()}` : '';
    const backToTop = f.showBackToTop
      ? `<a href="#hero" class="back-to-top">${icon('arrowUp')} Back to top</a>`
      : '';

    footer.className = 'footer';
    footer.innerHTML = `
      <div class="container">
        <div class="footer-social">${socialHtml}</div>
        <p class="footer-text">${f.text}${year}</p>
        ${backToTop}
      </div>
    `;
  }

  // ── Behavior: Scroll Reveal ──────────────────
  function initScrollReveal() {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      document.querySelectorAll('.reveal').forEach(el => el.classList.add('revealed'));
      return;
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  }

  // ── Behavior: Smooth Scroll ──────────────────
  function initSmoothScroll() {
    document.addEventListener('click', (e) => {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const targetId = link.getAttribute('href');
      if (targetId === '#') return;

      const target = document.querySelector(targetId);
      if (!target) return;

      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });

      // Close mobile nav if open
      const mobile = document.querySelector('.nav-mobile');
      const overlay = document.querySelector('.nav-mobile-overlay');
      const hamburger = document.querySelector('.nav-hamburger');
      if (mobile && mobile.classList.contains('open')) {
        mobile.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }

  // ── Behavior: Nav Highlight ──────────────────
  function initNavHighlight() {
    const sections = document.querySelectorAll('.section[id]');
    const navLinks = document.querySelectorAll('.nav-link[data-section]');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.section === id);
          });
        }
      });
    }, { threshold: 0.2, rootMargin: '-20% 0px -60% 0px' });

    sections.forEach(s => observer.observe(s));
  }

  // ── Behavior: Mobile Nav ─────────────────────
  function initMobileNav() {
    const hamburger = document.querySelector('.nav-hamburger');
    const mobile = document.querySelector('.nav-mobile');
    const overlay = document.querySelector('.nav-mobile-overlay');
    if (!hamburger || !mobile) return;

    function toggle() {
      const isOpen = mobile.classList.toggle('open');
      overlay.classList.toggle('open');
      hamburger.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', String(isOpen));
      document.body.style.overflow = isOpen ? 'hidden' : '';
    }

    hamburger.addEventListener('click', toggle);
    overlay.addEventListener('click', toggle);

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && mobile.classList.contains('open')) {
        toggle();
      }
    });
  }

  // ── Behavior: Typing Animation ───────────────
  function initTypingAnimation() {
    const roles = C.hero.roles;
    if (!roles || roles.length === 0) return;

    const typedEl = document.querySelector('.typed-text');
    if (!typedEl) return;

    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isPaused = false;

    function type() {
      const currentRole = roles[roleIndex];

      if (isPaused) {
        isPaused = false;
        isDeleting = true;
        setTimeout(type, 50);
        return;
      }

      if (!isDeleting) {
        typedEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentRole.length) {
          if (roles.length === 1) return; // Static, no animation needed
          isPaused = true;
          setTimeout(type, 2000);
          return;
        }
        setTimeout(type, 60);
      } else {
        typedEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          setTimeout(type, 400);
          return;
        }
        setTimeout(type, 35);
      }
    }

    setTimeout(type, 1400); // Initial delay
  }

  // ── Behavior: Nav Shrink on Scroll ───────────
  function initNavShrink() {
    const nav = document.getElementById('nav');
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          nav.classList.toggle('scrolled', window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  // ── Behavior: Contact Form (mailto) ──────────
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    const targetEmail = C.contact.email;

    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = form.querySelector('#contact-name');
      const subject = form.querySelector('#contact-subject');
      const message = form.querySelector('#contact-message');

      // Clear previous errors
      form.querySelectorAll('.form-input, .form-textarea').forEach(el => el.classList.remove('error'));
      form.querySelectorAll('.form-error').forEach(el => el.classList.remove('visible'));

      // Validate
      let isValid = true;

      if (!name.value.trim()) {
        name.classList.add('error');
        document.getElementById('name-error').classList.add('visible');
        isValid = false;
      }
      if (!subject.value.trim()) {
        subject.classList.add('error');
        document.getElementById('subject-error').classList.add('visible');
        isValid = false;
      }
      if (!message.value.trim()) {
        message.classList.add('error');
        document.getElementById('message-error').classList.add('visible');
        isValid = false;
      }

      if (!isValid) return;

      // Build mailto link and open email client
      const subjectText = encodeURIComponent(subject.value.trim());
      const bodyText = encodeURIComponent(`Hi Bilal,\n\n${message.value.trim()}\n\nBest regards,\n${name.value.trim()}`);
      window.location.href = `mailto:${targetEmail}?subject=${subjectText}&body=${bodyText}`;
    });
  }

  // ── Behavior: Counter Animation ──────────────
  function initCounterAnimation() {
    const statValues = document.querySelectorAll('.stat-value[data-target]');
    if (!statValues.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    statValues.forEach(el => observer.observe(el));

    function animateCounter(el) {
      const target = el.dataset.target;
      const numericMatch = target.match(/(\d+)/);
      if (!numericMatch) return;

      const targetNum = parseInt(numericMatch[1], 10);
      const suffix = target.replace(/\d+/, '');
      const duration = 1500;
      const start = performance.now();

      function update(now) {
        const elapsed = now - start;
        const progress = Math.min(elapsed / duration, 1);
        // Ease out cubic
        const eased = 1 - Math.pow(1 - progress, 3);
        const current = Math.round(targetNum * eased);
        el.textContent = current + suffix;

        if (progress < 1) {
          requestAnimationFrame(update);
        }
      }

      requestAnimationFrame(update);
    }
  }

  // ── Behavior: Qualification Tabs ──────────────
  function initQualificationTabs() {
    const tabs = document.querySelectorAll('.qual-tab');
    const panels = document.querySelectorAll('.qual-panel');
    if (!tabs.length) return;

    tabs.forEach(tab => {
      tab.addEventListener('click', () => {
        const target = tab.dataset.tab;
        tabs.forEach(t => t.classList.remove('active'));
        panels.forEach(p => p.classList.remove('active'));
        tab.classList.add('active');
        document.querySelector(`.qual-panel[data-panel="${target}"]`).classList.add('active');
      });
    });
  }

  // ── Execute ──────────────────────────────────
  renderMeta();
  renderNav();
  renderHero();
  // renderAbout();  // Removed — about info is now in the hero tagline
  renderQualification();
  renderAchievements();
  // renderProjects();  // Uncomment when ready to add projects
  renderSkills();
  renderContact();
  renderFooter();

  initScrollReveal();
  initSmoothScroll();
  initNavHighlight();
  initMobileNav();
  initTypingAnimation();
  initNavShrink();
  initQualificationTabs();
  initContactForm();
  initCounterAnimation();
});
