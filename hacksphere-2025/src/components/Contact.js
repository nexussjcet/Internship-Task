import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
    // Reset form after submission
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section className="section" style={{ backgroundColor: 'white', paddingTop: '8rem' }}>
      <div className="container">
        <h1 className="section-heading">Contact Us</h1>
        
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: '1fr',
          gap: '3rem',
          maxWidth: '1000px',
          margin: '2rem auto 0'
        }}>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', 
            gap: '2rem'
          }}>
            <div style={{ 
              backgroundColor: 'var(--primary-50)', 
              padding: '2rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-700)' }}>General Inquiries</h2>
              <p style={{ marginBottom: '1rem' }}>For general questions about HackSphere 2025.</p>
              <p style={{ fontWeight: '500' }}>
                <span style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</span>
                <a href="mailto:info@hacksphere2025.com" style={{ color: 'var(--primary-600)', textDecoration: 'none' }}>
                  info@hacksphere2025.com
                </a>
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'var(--primary-50)', 
              padding: '2rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-700)' }}>Partnership Opportunities</h2>
              <p style={{ marginBottom: '1rem' }}>For companies interested in sponsoring HackSphere.</p>
              <p style={{ fontWeight: '500' }}>
                <span style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</span>
                <a href="mailto:partners@hacksphere2025.com" style={{ color: 'var(--primary-600)', textDecoration: 'none' }}>
                  partners@hacksphere2025.com
                </a>
              </p>
            </div>
            
            <div style={{ 
              backgroundColor: 'var(--primary-50)', 
              padding: '2rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-700)' }}>Technical Support</h2>
              <p style={{ marginBottom: '1rem' }}>Need help with registration or the hackathon platform?</p>
              <p style={{ fontWeight: '500' }}>
                <span style={{ display: 'block', marginBottom: '0.5rem' }}>Email:</span>
                <a href="mailto:support@hacksphere2025.com" style={{ color: 'var(--primary-600)', textDecoration: 'none' }}>
                  support@hacksphere2025.com
                </a>
              </p>
            </div>
          </div>
          
          <div style={{ 
            backgroundColor: 'var(--gray-50)', 
            padding: '2rem', 
            borderRadius: '0.5rem', 
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            {formSubmitted ? (
              <div style={{ textAlign: 'center', padding: '2rem' }}>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-600)' }}>
                  Thank You!
                </h2>
                <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
                  Your message has been sent successfully. We'll get back to you as soon as possible.
                </p>
                <button 
                  onClick={() => setFormSubmitted(false)}
                  style={{
                    backgroundColor: 'var(--primary-600)',
                    color: 'white',
                    border: 'none',
                    padding: '0.75rem 1.5rem',
                    borderRadius: '0.375rem',
                    fontWeight: '500',
                    cursor: 'pointer'
                  }}
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <>
                <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center' }}>
                  Send Us a Message
                </h2>
                
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '1.5rem' }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="name" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Your Name</label>
                      <input 
                        type="text" 
                        id="name" 
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="Enter your name" 
                        style={{ 
                          padding: '0.75rem', 
                          borderRadius: '0.375rem', 
                          border: '1px solid var(--gray-300)', 
                          fontSize: '1rem',
                          outline: 'none'
                        }} 
                      />
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                      <label htmlFor="email" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Email Address</label>
                      <input 
                        type="email" 
                        id="email" 
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="Enter your email" 
                        style={{ 
                          padding: '0.75rem', 
                          borderRadius: '0.375rem', 
                          border: '1px solid var(--gray-300)', 
                          fontSize: '1rem',
                          outline: 'none'
                        }} 
                      />
                    </div>
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="subject" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Subject</label>
                    <input 
                      type="text" 
                      id="subject" 
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="What is your message about?" 
                      style={{ 
                        padding: '0.75rem', 
                        borderRadius: '0.375rem', 
                        border: '1px solid var(--gray-300)', 
                        fontSize: '1rem',
                        outline: 'none'
                      }} 
                    />
                  </div>
                  
                  <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <label htmlFor="message" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      placeholder="Type your message here..." 
                      rows="5"
                      style={{ 
                        padding: '0.75rem', 
                        borderRadius: '0.375rem', 
                        border: '1px solid var(--gray-300)', 
                        fontSize: '1rem',
                        outline: 'none',
                        resize: 'vertical'
                      }} 
                    />
                  </div>
                  
                  <button 
                    type="submit"
                    style={{
                      backgroundColor: 'var(--primary-600)',
                      color: 'white',
                      border: 'none',
                      padding: '0.75rem 1.5rem',
                      borderRadius: '0.375rem',
                      fontWeight: '500',
                      cursor: 'pointer',
                      alignSelf: 'flex-start'
                    }}
                  >
                    Send Message
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '4rem' }}>
          <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>Connect With Us</h2>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              backgroundColor: 'var(--primary-600)',
              color: 'white',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '1.25rem'
            }}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              backgroundColor: 'var(--primary-600)',
              color: 'white',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '1.25rem'
            }}>
              <i className="fab fa-instagram"></i>
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              backgroundColor: 'var(--primary-600)',
              color: 'white',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '1.25rem'
            }}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="#" style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              width: '3rem',
              height: '3rem',
              backgroundColor: 'var(--primary-600)',
              color: 'white',
              borderRadius: '50%',
              textDecoration: 'none',
              fontSize: '1.25rem'
            }}>
              <i className="fab fa-github"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
