import ArrowIcon from '../components/ArrowIcon';
import EventCard from '../components/EventCard';
import events from '../data/events';

function EventsPage() {
  return (
    <section className="events-section section-wrap" id="events">
      <div className="events-heading">
        <span className="eyebrow">PUT IT IN YOUR CALENDAR</span>
        <h2>Good things are<br /><em>happening.</em></h2>
        <p>Drop in, join in, or bring a friend. There's always something going on around here.</p>
        <a className="text-link" href="#contact">All are welcome <ArrowIcon /></a>
        <span className="events-decoration" aria-hidden="true">✳</span>
      </div>

      <div className="event-list">
        {events.map((event) => (
          <EventCard key={event.title} event={event} />
        ))}
      </div>
    </section>
  );
}

export default EventsPage;
