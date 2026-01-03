import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact section-padding">
      <div className="contact-inner max-width">
        <div>
          <h2>Ready to <span style={{color:'var(--orange)'}}>Skyrocket Your Growth?</span></h2>
          <p style={{color:'#aaa'}}>Let's craft a strategy that transforms your digital presence.</p>
        </div>
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <input placeholder="Your name" aria-label="Your name" />
          <input placeholder="Your email" aria-label="Your email" />
          <input placeholder="Company" aria-label="Company" />
          <textarea rows="4" placeholder="Tell us about your project" aria-label="Project details"></textarea>
          <button className="btn" type="submit">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;