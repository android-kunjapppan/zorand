import React, {useState} from 'react';
import './Contact.scss';

const SCRIPT_URL = process.env.REACT_APP_GOOGLE_SCRIPT_URL;
if (!SCRIPT_URL) {
  console.error("Google Script URL is missing");
}

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(form)
      });


      alert('Message sent successfully!');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch (error) {
      console.error(error);
      alert('Failed to send message. Please try again.');
    }
  };

  return (
    <section id="contact" className="contact section-padding">
      <div className="contact-inner max-width">
        <div>
          <h2>Ready to <span style={{color:'var(--orange)'}}>Skyrocket Your Growth?</span></h2>
          <p style={{color:'#aaa'}}>Let's craft a strategy that transforms your digital presence.</p>
        </div>
        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
            required
            aria-label="Your name"
          />
          <input
            name="email"
            type="email"
            placeholder="Your email"
            value={form.email}
            onChange={handleChange}
            required
            aria-label="Your email"
          />
          <input
            name="company"
            placeholder="Company"
            value={form.company}
            onChange={handleChange}
            aria-label="Company"
          />
          <textarea
            name="message"
            rows="4"
            placeholder="Tell us about your project"
            value={form.message}
            onChange={handleChange}
            aria-label="Project details"
          />
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;