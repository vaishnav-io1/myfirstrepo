export default function HiringAlert() {
  return (
    <aside
      className="hiring-alert"
      aria-label="Hiring announcement"
      data-testid="hiring-alert"
    >
      <div className="hiring-alert-track" data-testid="hiring-alert-track">
        {[0, 1].map((copy) => (
          <div
            className="hiring-alert-message"
            key={copy}
            aria-hidden={copy === 1 ? true : undefined}
            data-testid={`hiring-alert-message-${copy}`}
          >
            <span data-testid={`hiring-alert-text-${copy}`}>
              We’re Hiring • Join Our Team •
            </span>

            <a
              href="#careers"
              tabIndex={copy === 1 ? -1 : undefined}
              data-testid={`hiring-alert-apply-${copy}`}
            >
              Apply Now →
            </a>
          </div>
        ))}
      </div>
    </aside>
  );
}