import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Register() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    role: '',
    experience: '',
    teamStatus: '',
    teamName: '',
    teamMembers: '',
    projectIdea: '',
    hearAbout: '',
    lookingForTeam: false,
    agreeTerms: false
  });
  
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: type === 'checkbox' ? checked : value
    }));
  };
  
  const nextStep = () => {
    setStep(step + 1);
    window.scrollTo(0, 0);
  };
  
  const prevStep = () => {
    setStep(step - 1);
    window.scrollTo(0, 0);
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send the form data to a server here
    console.log('Registration submitted:', formData);
    setFormSubmitted(true);
    window.scrollTo(0, 0);
  };

  return (
    <section className="section" style={{ backgroundColor: 'white', paddingTop: '8rem' }}>
      <div className="container">
        <h1 className="section-heading">Register for HackSphere 2025</h1>
        
        {formSubmitted ? (
          <div style={{ 
            maxWidth: '48rem', 
            margin: '2rem auto', 
            padding: '3rem', 
            backgroundColor: 'var(--primary-50)', 
            borderRadius: '0.5rem',
            textAlign: 'center',
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
          }}>
            <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎉</div>
            <h2 style={{ fontSize: '1.75rem', fontWeight: '600', marginBottom: '1rem', color: 'var(--primary-700)' }}>
              Registration Complete!
            </h2>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Thank you for registering for HackSphere 2025! We've sent a confirmation email to <strong>{formData.email}</strong> with all the details.
            </p>
            <p style={{ fontSize: '1.125rem', marginBottom: '2rem' }}>
              Mark your calendar for June 20-22, 2025. We can't wait to see what you'll build!
            </p>
            <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
              <Link to="/" className="btn-primary" style={{ display: 'inline-block' }}>
                Return to Home
              </Link>
              <Link to="/schedule" style={{ 
                display: 'inline-block',
                padding: '0.75rem 1.5rem',
                borderRadius: '0.5rem',
                fontWeight: '600',
                backgroundColor: 'white',
                color: 'var(--primary-600)',
                textDecoration: 'none',
                border: '2px solid var(--primary-600)'
              }}>
                View Schedule
              </Link>
            </div>
          </div>
        ) : (
          <div style={{ maxWidth: '48rem', margin: '2rem auto' }}>
            {/* Progress Bar */}
            <div style={{ marginBottom: '2rem' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
                <span style={{ fontWeight: '500' }}>Step {step} of 3</span>
                <span style={{ fontWeight: '500' }}>{Math.round((step / 3) * 100)}% Complete</span>
              </div>
              <div style={{ height: '0.5rem', backgroundColor: 'var(--gray-200)', borderRadius: '0.25rem', overflow: 'hidden' }}>
                <div 
                  style={{ 
                    height: '100%', 
                    width: `${(step / 3) * 100}%`, 
                    backgroundColor: 'var(--primary-600)',
                    transition: 'width 0.3s ease'
                  }}
                ></div>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: 'var(--gray-50)', 
              padding: '2rem', 
              borderRadius: '0.5rem', 
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)'
            }}>
              <form onSubmit={handleSubmit}>
                {step === 1 && (
                  <>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                      Personal Information
                    </h2>
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="firstName" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>First Name*</label>
                        <input 
                          type="text" 
                          id="firstName" 
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your first name" 
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
                        <label htmlFor="lastName" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Last Name*</label>
                        <input 
                          type="text" 
                          id="lastName" 
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          placeholder="Enter your last name" 
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
                    
                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '1.5rem' }}>
                      <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <label htmlFor="email" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Email Address*</label>
                        <input 
                          type="email" 
                          id="email" 
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="Enter your email address" 
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
                        <label htmlFor="phone" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Phone Number</label>
                        <input 
                          type="tel" 
                          id="phone" 
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="Enter your phone number" 
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
                    
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'flex-end' }}>
                      <button 
                        type="button"
                        onClick={nextStep}
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
                        Next Step
                      </button>
                    </div>
                  </>
                )}
                
                {step === 2 && (
                  <>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                      Professional Information
                    </h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                      <label htmlFor="role" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Your Role*</label>
                      <select 
                        id="role" 
                        name="role"
                        value={formData.role}
                        onChange={handleChange}
                        required
                        style={{ 
                          padding: '0.75rem', 
                          borderRadius: '0.375rem', 
                          border: '1px solid var(--gray-300)', 
                          fontSize: '1rem',
                          outline: 'none',
                          backgroundColor: 'white'
                        }}
                      >
                        <option value="">Select your role</option>
                        <option value="developer">Developer</option>
                        <option value="designer">Designer</option>
                        <option value="product-manager">Product Manager</option>
                        <option value="data-scientist">Data Scientist</option>
                        <option value="student">Student</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                      <label htmlFor="experience" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Experience Level*</label>
                      <select 
                        id="experience" 
                        name="experience"
                        value={formData.experience}
                        onChange={handleChange}
                        required
                        style={{ 
                          padding: '0.75rem', 
                          borderRadius: '0.375rem', 
                          border: '1px solid var(--gray-300)', 
                          fontSize: '1rem',
                          outline: 'none',
                          backgroundColor: 'white'
                        }}
                      >
                        <option value="">Select your experience level</option>
                        <option value="beginner">Beginner (0-1 years)</option>
                        <option value="intermediate">Intermediate (1-3 years)</option>
                        <option value="advanced">Advanced (3-5 years)</option>
                        <option value="expert">Expert (5+ years)</option>
                      </select>
                    </div>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                      <label htmlFor="teamStatus" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Team Status*</label>
                      <select 
                        id="teamStatus" 
                        name="teamStatus"
                        value={formData.teamStatus}
                        onChange={handleChange}
                        required
                        style={{ 
                          padding: '0.75rem', 
                          borderRadius: '0.375rem', 
                          border: '1px solid var(--gray-300)', 
                          fontSize: '1rem',
                          outline: 'none',
                          backgroundColor: 'white'
                        }}
                      >
                        <option value="">Select your team status</option>
                        <option value="solo">Participating Solo</option>
                        <option value="have-team">I have a team</option>
                        <option value="looking-for-team">Looking for a team</option>
                      </select>
                    </div>
                    
                    {formData.teamStatus === 'have-team' && (
                      <>
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                          <label htmlFor="teamName" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Team Name*</label>
                          <input 
                            type="text" 
                            id="teamName" 
                            name="teamName"
                            value={formData.teamName}
                            onChange={handleChange}
                            required={formData.teamStatus === 'have-team'}
                            placeholder="Enter your team name" 
                            style={{ 
                              padding: '0.75rem', 
                              borderRadius: '0.375rem', 
                              border: '1px solid var(--gray-300)', 
                              fontSize: '1rem',
                              outline: 'none'
                            }} 
                          />
                        </div>
                        
                        <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                          <label htmlFor="teamMembers" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Team Members' Emails (comma separated)</label>
                          <textarea 
                            id="teamMembers" 
                            name="teamMembers"
                            value={formData.teamMembers}
                            onChange={handleChange}
                            placeholder="Enter team members' email addresses, separated by commas" 
                            rows="3"
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
                      </>
                    )}
                    
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                      <button 
                        type="button"
                        onClick={prevStep}
                        style={{
                          backgroundColor: 'white',
                          color: 'var(--gray-700)',
                          border: '1px solid var(--gray-300)',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '0.375rem',
                          fontWeight: '500',
                          cursor: 'pointer'
                        }}
                      >
                        Previous
                      </button>
                      <button 
                        type="button"
                        onClick={nextStep}
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
                        Next Step
                      </button>
                    </div>
                  </>
                )}
                
                {step === 3 && (
                  <>
                    <h2 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                      Additional Information
                    </h2>
                    
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                      <label htmlFor="projectIdea" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>Project Idea (optional)</label>
                      <textarea 
                        id="projectIdea" 
                        name="projectIdea"
                        value={formData.projectIdea}
                        onChange={handleChange}
                        placeholder="Briefly describe your project idea, if you have one" 
                        rows="4"
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
                    
                    <div style={{ display: 'flex', flexDirection: 'column', marginBottom: '1.5rem' }}>
                      <label htmlFor="hearAbout" style={{ fontWeight: '500', marginBottom: '0.5rem' }}>How did you hear about us?</label>
                      <select 
                        id="hearAbout" 
                        name="hearAbout"
                        value={formData.hearAbout}
                        onChange={handleChange}
                        style={{ 
                          padding: '0.75rem', 
                          borderRadius: '0.375rem', 
                          border: '1px solid var(--gray-300)', 
                          fontSize: '1rem',
                          outline: 'none',
                          backgroundColor: 'white'
                        }}
                      >
                        <option value="">Select an option</option>
                        <option value="social-media">Social Media</option>
                        <option value="friend">Friend or Colleague</option>
                        <option value="school">School or University</option>
                        <option value="previous-participant">Previous Participant</option>
                        <option value="search">Search Engine</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '1rem' }}>
                      <input 
                        type="checkbox" 
                        id="lookingForTeam" 
                        name="lookingForTeam"
                        checked={formData.lookingForTeam}
                        onChange={handleChange}
                        style={{ width: '1.25rem', height: '1.25rem' }}
                      />
                      <label htmlFor="lookingForTeam" style={{ fontSize: '1rem' }}>
                        I'm interested in being matched with a team
                      </label>
                    </div>
                    
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '2rem' }}>
                      <input 
                        type="checkbox" 
                        id="agreeTerms" 
                        name="agreeTerms"
                        checked={formData.agreeTerms}
                        onChange={handleChange}
                        required
                        style={{ width: '1.25rem', height: '1.25rem' }}
                      />
                      <label htmlFor="agreeTerms" style={{ fontSize: '1rem' }}>
                        I agree to the <a href="#" style={{ color: 'var(--primary-600)', textDecoration: 'none' }}>terms and conditions</a>*
                      </label>
                    </div>
                    
                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                      <button 
                        type="button"
                        onClick={prevStep}
                        style={{
                          backgroundColor: 'white',
                          color: 'var(--gray-700)',
                          border: '1px solid var(--gray-300)',
                          padding: '0.75rem 1.5rem',
                          borderRadius: '0.375rem',
                          fontWeight: '500',
                          cursor: 'pointer'
                        }}
                      >
                        Previous
                      </button>
                      <button 
                        type="submit"
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
                        Complete Registration
                      </button>
                    </div>
                  </>
                )}
              </form>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default Register;
