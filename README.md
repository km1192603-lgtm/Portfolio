# Portfolio
Built a responsive portfolio website using React.js with modular components and dynamic routing. Implemented REST API integration, optimized performance with lazy loading, and ensured SEO-friendly structure. Deployed via cloud hosting with version control using Git and CI/CD practices.
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Jeevanandham| Portfolio</title>
  <meta
    name="description"
    content="Responsive portfolio website showcasing projects, skills, services, and contact information."
  />
  <link rel="stylesheet" href="styles.css" />
</head>
<body>
  <header class="site-header">
    <div class="container nav">
      <a class="brand" href="#home">JEEVANANDHAM</a>
      <button class="nav-toggle" aria-label="Toggle navigation" aria-expanded="false">☰</button>
      <nav class="nav-menu">
        <a href="#about">About</a>
        <a href="#skills">Skills</a>
        <a href="#projects">Projects</a>
        <a href="#services">Services</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
  </header>

  <main>
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div class="hero-copy">
          <p class="eyebrow">Full Stack Developer & UI Designer</p>
          <h1>Building modern digital experiences that feel fast, clear, and human.</h1>
          <p class="hero-text">
            I create responsive websites and web interfaces with clean design, solid performance,
            and a strong focus on usability for startups, businesses, and personal brands.
          </p>
          <div class="hero-actions">
            <a class="btn btn-primary" href="#projects">View Projects</a>
            <a class="btn btn-secondary" href="#contact">Hire Me</a>
          </div>
          <ul class="hero-stats">
            <li><strong>2</strong><span>Years Experience</span></li>
            <li><strong>20+</strong><span>Projects Delivered</span></li>
            <li><strong>12</strong><span>Happy Clients</span></li>
          </ul>
        </div>
        <div class="hero-card">
          <div class="profile-card">
            <div class="profile-avatar">AC</div>
            <h2>Jeevanandham
            </h2>
            <p>Crafting accessible and responsive products with HTML, CSS, JavaScript, and modern UI thinking.</p>
            <div class="profile-tags">
              <span>Responsive Design</span>
              <span>Frontend Dev</span>
              <span>Brand UI</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="section" id="about">
      <div class="container section-grid">
        <div>
          <p class="section-label">About Me</p>
          <h2>Design-minded developer focused on polished user experiences.</h2>
        </div>
        <div>
          <p>
            I specialize in translating ideas into attractive, responsive websites that work smoothly
            across desktop, tablet, and mobile. My workflow balances visual detail, maintainable code,
            and practical business goals.
          </p>
          <p>
            From landing pages to portfolio sites and product showcases, I build interfaces that help
            brands communicate clearly and convert visitors into customers.
          </p>
        </div>
      </div>
    </section>

    <section class="section alt" id="skills">
      <div class="container">
        <p class="section-label">Core Skills</p>
        <h2>Tools and strengths</h2>
        <div class="skills-grid">
          <article class="card">
            <h3>Frontend Development</h3>
            <p>Semantic HTML, modern CSS, JavaScript, responsive layouts, animations, and performance optimization.</p>
          </article>
          <article class="card">
            <h3>UI / UX Design</h3>
            <p>Wireframes, clean visual systems, hierarchy, accessibility, and user-first interaction design.</p>
          </article>
          <article class="card">
            <h3>Website Strategy</h3>
            <p>Landing page structure, content clarity, CTA placement, and conversion-focused sections.</p>
          </article>
          <article class="card">
            <h3>Collaboration</h3>
            <p>Clear communication, iterative design improvements, and organized project delivery.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section" id="projects">
      <div class="container">
        <p class="section-label">Featured Projects</p>
        <h2>Selected work</h2>
        <div class="projects-grid">
          <article class="project-card">
            <div class="project-badge">Case Study 01</div>
            <h3>Studio Launch Website</h3>
            <p>A sleek promotional site for a creative studio featuring service highlights, testimonials, and lead capture.</p>
            <a href="#contact">Build something similar</a>
          </article>
          <article class="project-card">
            <div class="project-badge">Case Study 02</div>
            <h3>Personal Brand Portfolio</h3>
            <p>A mobile-first portfolio with bold typography, smooth sections, and a simple client inquiry flow.</p>
            <a href="#contact">Discuss your idea</a>
          </article>
          <article class="project-card">
            <div class="project-badge">Case Study 03</div>
            <h3>Product Showcase Page</h3>
            <p>A focused landing page designed to present features, benefits, and pricing with clear visual emphasis.</p>
            <a href="#contact">Start a project</a>
          </article>
        </div>
      </div>
    </section>

    <section class="section alt" id="services">
      <div class="container">
        <p class="section-label">Services</p>
        <h2>How I can help</h2>
        <div class="services-grid">
          <article class="card">
            <h3>Portfolio Websites</h3>
            <p>Professional personal sites for freelancers, creatives, and job seekers.</p>
          </article>
          <article class="card">
            <h3>Business Landing Pages</h3>
            <p>High-impact pages for products, campaigns, and local business promotion.</p>
          </article>
          <article class="card">
            <h3>Website Refresh</h3>
            <p>Modern redesigns for outdated pages with improved responsiveness and clarity.</p>
          </article>
        </div>
      </div>
    </section>

    <section class="section contact-section" id="contact">
      <div class="container contact-grid">
        <div>
          <p class="section-label">Contact</p>
          <h2>Let’s build a website that stands out.</h2>
          <p>
            Available for freelance work, website redesigns, and frontend-focused collaborations.
          </p>
        </div>
        <form class="contact-form">
          <label>
            Name
            <input type="text" placeholder="Your name" />
          </label>
          <label>
            Email
            <input type="email" placeholder="you@example.com" />
          </label>
          <label>
            Project Details
            <textarea rows="5" placeholder="Tell me about your project"></textarea>
          </label>
          <button class="btn btn-primary" type="submit">Send Inquiry</button>
        </form>
      </div>
    </section>
  </main>

  <footer class="site-footer">
    <div class="container footer-wrap">
      <p>© 2023 Jeevanandham. Built with care and responsive design.</p>
      <a href="#home">Back to top ↑</a>
    </div>
  </footer>

  <script src="script.js"></script>
</body>
</html>
