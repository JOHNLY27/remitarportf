export default function ProjectCard({ title, description, tags = [], image = '/placeholder.svg', liveLink = '#', sourceLink = '#' }) {
  return (
    <article className="project-card reveal-on-scroll" aria-labelledby={`project-${title}`} role="group">
      {/* media area: animated svg or image */}
      <div className="project-media" aria-hidden="true">
        {image && image.endsWith('.svg') ? (
          <object data={image} type="image/svg+xml" className="anim-media-object" aria-label={`Illustration for ${title}`} />
        ) : (
          <img src={image} alt={`Illustration for ${title}`} className="anim-media" />
        )}
      </div>

      {/* main content */}
      <div className="project-body">
        <h3 id={`project-${title}`}>{title}</h3>
        <p className="project-desc">{description}</p>

        {/* tech tags */}
        {tags.length > 0 && (
          <div className="project-tags" aria-hidden>
            {tags.map((t) => (
              <span key={t} className="tag">{t}</span>
            ))}
          </div>
        )}

        {/* actions: Live Demo + GitHub */}
        <div className="project-actions">
          <a className="btn primary" href={liveLink} target="_blank" rel="noopener noreferrer" aria-label={`Open live demo for ${title}`}>
            Live Demo
          </a>
          <a className="btn outline" href={sourceLink} target="_blank" rel="noopener noreferrer" aria-label={`Open GitHub repository for ${title}`}>
            GitHub
          </a>
        </div>
      </div>
    </article>
  );
}
