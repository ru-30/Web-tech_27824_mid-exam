import { useState } from 'react';
import ArrowIcon from './ArrowIcon';

function ContactForm() {
  const [fields, setFields] = useState({ name: '', email: '', subject: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function validate(data) {
    const e = {};
    if (!data.name.trim()) e.name = 'Full name is required.';
    if (!data.email.trim()) {
      e.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      e.email = 'Please enter a valid email address.';
    }
    if (!data.subject.trim()) e.subject = 'Subject is required.';
    if (!data.message.trim()) e.message = 'Message is required.';
    return e;
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFields((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: '' }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errs = validate(fields);
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
    setFields({ name: '', email: '', subject: '', message: '' });
    setErrors({});
  }

  if (submitted) {
    return (
      <div className="contact-success" role="alert">
        <span className="success-icon" aria-hidden="true">✓</span>
        <h3>Message sent!</h3>
        <p>Thank you for reaching out. We'll get back to you as soon as possible.</p>
        <button className="button button-dark" onClick={() => setSubmitted(false)}>
          Send another message <ArrowIcon />
        </button>
      </div>
    );
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit} noValidate>
      <div className="form-group">
        <label htmlFor="cf-name">Full name</label>
        <input
          id="cf-name" name="name" type="text" placeholder="Your full name"
          value={fields.name} onChange={handleChange}
          aria-invalid={!!errors.name} aria-describedby={errors.name ? 'err-name' : undefined}
        />
        {errors.name && <span className="field-error" id="err-name" role="alert">{errors.name}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="cf-email">Email address</label>
        <input
          id="cf-email" name="email" type="email" placeholder="you@example.com"
          value={fields.email} onChange={handleChange}
          aria-invalid={!!errors.email} aria-describedby={errors.email ? 'err-email' : undefined}
        />
        {errors.email && <span className="field-error" id="err-email" role="alert">{errors.email}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="cf-subject">Subject</label>
        <input
          id="cf-subject" name="subject" type="text" placeholder="What is this about?"
          value={fields.subject} onChange={handleChange}
          aria-invalid={!!errors.subject} aria-describedby={errors.subject ? 'err-subject' : undefined}
        />
        {errors.subject && <span className="field-error" id="err-subject" role="alert">{errors.subject}</span>}
      </div>
      <div className="form-group">
        <label htmlFor="cf-message">Message</label>
        <textarea
          id="cf-message" name="message" rows={5} placeholder="Write your message here..."
          value={fields.message} onChange={handleChange}
          aria-invalid={!!errors.message} aria-describedby={errors.message ? 'err-message' : undefined}
        />
        {errors.message && <span className="field-error" id="err-message" role="alert">{errors.message}</span>}
      </div>
      <button className="button button-dark submit-btn" type="submit">
        Send message <ArrowIcon />
      </button>
    </form>
  );
}

export default ContactForm;
