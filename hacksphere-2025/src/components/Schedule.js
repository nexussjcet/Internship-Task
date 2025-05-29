import React from 'react';

function Schedule() {
  return (
    <section className="section" style={{ backgroundColor: 'white', paddingTop: '8rem' }}>
      <div className="container">
        <h1 className="section-heading">Event Schedule</h1>
        
        <div style={{ maxWidth: '48rem', margin: '2rem auto 0' }}>
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '1.75rem', 
              color: 'var(--primary-600)', 
              marginBottom: '1.5rem',
              textAlign: 'center',
              position: 'relative',
              paddingBottom: '1rem'
            }}>
              Day 1 - Friday, June 20
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '50px', 
                height: '4px', 
                backgroundColor: 'var(--primary-500)',
                borderRadius: '2px'
              }}></span>
            </h2>
            
            <div style={{ border: '1px solid var(--gray-200)', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  10:00 AM - 11:00 AM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Opening Ceremony</h3>
                  <p>Welcome address, introduction to hackathon themes, and keynote speech from industry leaders.</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  11:00 AM - 12:30 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Sponsor Presentations</h3>
                  <p>Learn about our sponsors, their technologies, and special prize categories.</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  12:30 PM - 2:00 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Team Formation</h3>
                  <p>Interactive session to find teammates and form groups. Solo participants welcome!</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  2:00 PM - 4:00 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Workshops</h3>
                  <p>Parallel technical workshops on AI, cloud computing, UX design, and more.</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  8:00 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Hacking Begins!</h3>
                  <p>Official start of the 48-hour hackathon. Start building your projects!</p>
                </div>
              </div>
            </div>
          </div>
          
          <div style={{ marginBottom: '4rem' }}>
            <h2 style={{ 
              fontSize: '1.75rem', 
              color: 'var(--primary-600)', 
              marginBottom: '1.5rem',
              textAlign: 'center',
              position: 'relative',
              paddingBottom: '1rem'
            }}>
              Day 2 - Saturday, June 21
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '50px', 
                height: '4px', 
                backgroundColor: 'var(--primary-500)',
                borderRadius: '2px'
              }}></span>
            </h2>
            
            <div style={{ border: '1px solid var(--gray-200)', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  All Day
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Hacking Continues</h3>
                  <p>Continue working on your projects. Mentors available throughout the day.</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  10:00 AM - 12:00 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Mentor Sessions</h3>
                  <p>Scheduled mentorship sessions with industry experts. Sign up in advance!</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  2:00 PM - 4:00 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Tech Talks</h3>
                  <p>Inspiring talks from tech leaders on emerging technologies and career development.</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  8:00 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Progress Check-in</h3>
                  <p>Optional progress sharing session. Get feedback on your project so far.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h2 style={{ 
              fontSize: '1.75rem', 
              color: 'var(--primary-600)', 
              marginBottom: '1.5rem',
              textAlign: 'center',
              position: 'relative',
              paddingBottom: '1rem'
            }}>
              Day 3 - Sunday, June 22
              <span style={{ 
                position: 'absolute', 
                bottom: 0, 
                left: '50%', 
                transform: 'translateX(-50%)', 
                width: '50px', 
                height: '4px', 
                backgroundColor: 'var(--primary-500)',
                borderRadius: '2px'
              }}></span>
            </h2>
            
            <div style={{ border: '1px solid var(--gray-200)', borderRadius: '0.5rem', overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  10:00 AM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Submission Deadline</h3>
                  <p>All projects must be submitted through the hackathon platform by this time.</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  12:00 PM - 3:00 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Project Presentations</h3>
                  <p>Teams present their projects to judges and other participants in parallel tracks.</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr', borderBottom: '1px solid var(--gray-200)' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  3:00 PM - 5:00 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Judging</h3>
                  <p>Judges deliberate while participants network and explore other projects.</p>
                </div>
              </div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 3fr' }}>
                <div style={{ padding: '1rem', backgroundColor: 'var(--primary-50)', fontWeight: '600' }}>
                  5:00 PM - 6:30 PM
                </div>
                <div style={{ padding: '1rem' }}>
                  <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '0.5rem' }}>Awards Ceremony</h3>
                  <p>Announcement of winners, prize distribution, and closing remarks.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <p style={{ fontSize: '1.125rem', marginBottom: '1.5rem' }}>
            All times are in Eastern Time (ET). The schedule is subject to minor changes.
          </p>
          <a href="/register" className="btn-primary" style={{ display: 'inline-block' }}>
            Register Now
          </a>
        </div>
      </div>
    </section>
  );
}

export default Schedule;
