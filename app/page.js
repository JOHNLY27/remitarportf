import ProjectCard from '../components/ProjectCard';
import ContactForm from '../components/ContactForm';
import CodePreview from '../components/CodePreview';

export default function Home() {
  return (
    <>
      <header className="hero section" id="home">
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1>John Lydrick Remitar</h1>
            <p className="subtitle">
              BSIT student and aspiring Web Developer focused on building modern,
              functional, and user-friendly web applications.
            </p>
            <div className="hero-cta">
              <a href="#projects" className="btn primary">
                View Projects
              </a>
              <a href="#contact" className="btn outline">
                Contact Me
              </a>
            </div>
          </div>

          <div className="hero-media" aria-hidden>
            <div className="profile-hero" role="img" aria-label="Decorative animated illustration">
              {/* Live code preview component */}
              <CodePreview />
            </div>
          </div>
        </div>
      </header>

      <section className="container projects section" id="projects">
        <h2>The Big Three</h2>
        <div className="project-grid">
          <ProjectCard
            title="E-Commerce System"
            description="A full-featured e-commerce platform with product listing, cart, checkout, and authentication."
            tags={["React", "Node.js", "Auth"]}
            image="/anim-ecommerce.svg"
          />
          <ProjectCard
            title="Portfolio Website"
            description="Personal portfolio of John Lydrick Remitar built using Next.js and deployed with GitHub and Vercel."
            tags={["Next.js", "Vercel", "Accessibility"]}
            image="/anim-portfolio.svg"
          />
          <ProjectCard
            title="Online Booking / Management System"
            description="A future-focused booking and admin management system."
            tags={["UI/UX", "Admin", "Scheduling"]}
            image="/anim-booking.svg"
          />
        </div>
      </section>

      <section className="container learning section" id="learning">
        <h2>Currently Learning</h2>
        <div className="learning-grid">
          <div className="learn-card">
            <h3>Next.js & React Hooks</h3>
            <p>Building modern, fast, and accessible interfaces with App Router and hooks.</p>
          </div>
          <div className="learn-card">
            <h3>API Integration</h3>
            <p>Consuming REST and GraphQL APIs, handling errors and caching.</p>
          </div>
          <div className="learn-card">
            <h3>Authentication (JWT)</h3>
            <p>Secure auth flows, token management, and protected routes.</p>
          </div>
          <div className="learn-card">
            <h3>Database Design</h3>
            <p>Designing relational and NoSQL schemas for scalable apps.</p>
          </div>
          <div className="learn-card">
            <h3>Deployment with Vercel</h3>
            <p>Continuous deployment, environment variables, and previews.</p>
          </div>
        </div>
      </section>

      <section className="container about section" id="about">
        <h2>About</h2>
        <div className="about-grid">
          <div className="about-card">
            <img src="/images/profile.jpg.jpg" alt="John Lydrick Remitar" className="profile-img" />
          </div>
          <div className="about-content">
            <p className="lead">
              I am John Lydrick Remitar, a Bachelor of Science in Information Technology (BSIT) student with a strong interest in web development and modern application design.
            </p>
            <p>
              I focus on building user-friendly, accessible, and performant web applications. I enjoy learning about modern front-end frameworks, backend APIs, and deployment strategies.
            </p>
            <ul className="about-list">
              <li><strong>Skills:</strong> HTML, CSS, JavaScript, React, Next.js</li>
              <li><strong>Interests:</strong> UI/UX, API design, DevOps</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="container contact section" id="contact">
        <h2>Contact</h2>
        <div className="contact-grid">
          <div className="contact-info">
            <p>If you'd like to get in touch, send a message below or reach out via email.</p>
            <p><strong>Email:</strong> <a href="mailto:remitarjohnlydrick@gmail.com">remitarjohnlydrick@gmail.com</a></p>
            <p><strong>Location:</strong> Philippines</p>
          </div>
          <div className="contact-form-wrap">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
