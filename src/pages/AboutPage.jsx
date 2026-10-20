import ArrowIcon from '../components/ArrowIcon';
import ServiceCard from '../components/ServiceCard';
import services from '../data/services';

function AboutPage() {
  return (
    <section className="welcome section-wrap" id="about">
      <div className="section-intro">
        <span className="eyebrow">WELCOME TO YOUR COMMUNITY LIBRARY</span>
        <h2>A brighter place<br /><em>to grow together.</em></h2>
      </div>

      <div className="welcome-copy">
        <p>
          Welcome to Bright Future Library — a friendly place where everyone can read,
          learn, and connect. By making books, technology, quiet study space, and learning
          opportunities accessible to all, we help students succeed and bring our community
          closer together.
        </p>
        <a className="text-link" href="#services">Explore our services <ArrowIcon /></a>
      </div>

      <div className="value-grid" id="services" aria-label="Library services">
        {services.map((service) => (
          <ServiceCard key={service.id} service={service} />
        ))}
      </div>
    </section>
  );
}

export default AboutPage;
