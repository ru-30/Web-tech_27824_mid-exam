import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <section className="contact-section section-wrap" id="contact">
      <div className="contact-info">
        <span className="eyebrow">GET IN TOUCH</span>
        <h2>We'd love to<br /><em>hear from you.</em></h2>
        <p className="contact-intro">
          Have a question or want to know more? Reach out or stop by — we're always happy to help.
        </p>
        <ul className="contact-details">
          <li>
            <span className="contact-icon" aria-hidden="true">⌖</span>
            <div>
              <strong>Address</strong>
              <span>Kigali, Rwanda</span>
            </div>
          </li>
          <li>
            <span className="contact-icon" aria-hidden="true">✆</span>
            <div>
              <strong>Telephone</strong>
              <a href="tel:+250782324912">+250 782 324 912</a>
            </div>
          </li>
          <li>
            <span className="contact-icon" aria-hidden="true">✉</span>
            <div>
              <strong>Email</strong>
              <a href="mailto:espoir@gmail.com">espoir@gmail.com</a>
            </div>
          </li>
        </ul>
      </div>

      <ContactForm />
    </section>
  );
}

export default ContactPage;
