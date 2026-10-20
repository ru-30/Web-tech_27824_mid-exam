import ArrowIcon from './ArrowIcon';

function EventCard({ event }) {
  return (
    <article className="event-card">
      <div className="event-date">
        <span>{event.month}</span>
        <strong>{event.day}</strong>
      </div>
      <div className="event-details">
        <span className="event-tag">{event.tag}</span>
        <h3>{event.title}</h3>
        <p>{event.description}</p>
        <span className="event-time">{event.time}</span>
      </div>
      <a
        className="event-arrow"
        href="#contact"
        aria-label={`Find out more about ${event.title}`}
      >
        <ArrowIcon diagonal />
      </a>
    </article>
  );
}

export default EventCard;
