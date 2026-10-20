function ServiceCard({ service }) {
  return (
    <article className="value-card">
      <span className={`value-icon ${service.iconClass}`} aria-hidden="true">
        {service.icon}
      </span>
      <h3>{service.title}</h3>
      <p>{service.description}</p>
    </article>
  );
}

export default ServiceCard;
