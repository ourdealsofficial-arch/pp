import React, { useState, useEffect } from 'react';
import { 
  Shield, 
  FileText, 
  Phone, 
  Mail, 
  User, 
  Info, 
  Lock, 
  Share2, 
  ClipboardList, 
  Stethoscope, 
  AlertTriangle, 
  CreditCard, 
  RefreshCw, 
  Calendar, 
  Search, 
  Sun, 
  Moon,
  ChevronRight,
  HeartPulse
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('privacy'); // 'privacy' or 'terms'
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  const [searchQuery, setSearchQuery] = useState('');
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const root = window.document.documentElement;
    root.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const privacySections = [
    {
      id: 'info-collect',
      title: '1. Information We Collect',
      icon: ClipboardList,
      description: 'We collect information to provide better services to our users. This includes:',
      items: [
        'Full Name (for identification and record-keeping)',
        'Mobile Number (for communication and verification)',
        'Email Address (if provided, for billing and accounts)',
        'Address and Location Details (for delivery and nursing services)',
        'Service Booking Information (details of your requests)',
        'Payment Related Information (processed securely through authorized gateways)'
      ]
    },
    {
      id: 'info-use',
      title: '2. Use of Information',
      icon: Info,
      description: 'Your information is used solely to run and improve ONMINT services, specifically to:',
      items: [
        'Process and manage your healthcare service bookings',
        'Connect you with authorized healthcare service providers',
        'Provide responsive customer support and issue resolution',
        'Improve platform performance, security, and user experience',
        'Send service-related notifications, updates, and reminders'
      ]
    },
    {
      id: 'info-sharing',
      title: '3. Information Sharing',
      icon: Share2,
      description: 'ONMINT maintains strict boundaries on how your information is shared:',
      items: [
        'ONMINT does not sell, trade, or rent user information to third parties.',
        'Information is shared only with authorized healthcare service providers when necessary to fulfill requested services.',
        'We may disclose information if required by law or to protect safety and rights.'
      ]
    },
    {
      id: 'data-security',
      title: '4. Data Security',
      icon: Lock,
      description: 'We prioritize your data security and take it very seriously:',
      items: [
        'We implement reasonable technical and organizational security measures.',
        'Protects user information from unauthorized access, alteration, misuse, or disclosure.',
        'Secure communication channels and data storage protocols are utilized.'
      ]
    },
    {
      id: 'user-consent',
      title: '5. User Consent',
      icon: Shield,
      description: 'By using the ONMINT digital platform, you acknowledge and agree to:',
      items: [
        'Consent to the collection, processing, and use of information in accordance with this Privacy Policy.',
        'You can update your communication preferences at any time.'
      ]
    },
    {
      id: 'contact-us',
      title: 'Contact Us',
      icon: Phone,
      description: 'If you have questions about this Privacy Policy or ONMINT operations, get in touch:',
      contact: true
    }
  ];

  const termsSections = [
    {
      id: 'platform-services',
      title: '1. Platform Services',
      icon: HeartPulse,
      description: 'ONMINT is a digital healthcare platform that facilitates access to the following services:',
      items: [
        'Doctor Consultation (connecting you with independent doctors)',
        'Nursing Services (in-home nursing assistance)',
        'Lab Tests & Diagnostics (sample collection and reports)',
        'Medicine Delivery (pharmacy delivery to your doorstep)',
        'Ambulance Services (emergency and non-emergency booking)',
        'Blood Bank Services (facilitating blood requests & donation matching)'
      ]
    },
    {
      id: 'user-resp',
      title: '2. User Responsibilities',
      icon: User,
      description: 'To maintain a safe and functional environment, all users must agree:',
      items: [
        'Users must provide accurate, current, and complete information.',
        'Responsible and lawful use of the platform is strictly required.',
        'Misuse of healthcare or emergency services (such as false alarms) is strictly prohibited.'
      ]
    },
    {
      id: 'disclaimer',
      title: '3. Healthcare Disclaimer',
      icon: Stethoscope,
      description: 'ONMINT acts solely as a technology connector, not as a medical provider:',
      items: [
        'ONMINT acts solely as a technology platform connecting users with independent providers.',
        'Medical advice, treatments, lab reports, and ambulance care are the sole responsibility of the respective providers.',
        'ONMINT does not warrant the clinical accuracy or completeness of services provided.'
      ]
    },
    {
      id: 'payments',
      title: '4. Payments & Refunds',
      icon: CreditCard,
      description: 'Billing and refund guidelines for services ordered through ONMINT:',
      items: [
        'Service charges vary based on location, service type, and provider availability.',
        'All pricing is transparently presented before booking confirmation.',
        'Refunds and cancellations are subject to applicable service policies.'
      ]
    },
    {
      id: 'liability',
      title: '5. Limitation of Liability',
      icon: AlertTriangle,
      description: 'To the maximum extent permitted by law, ONMINT details its liability boundaries:',
      items: [
        'ONMINT shall not be liable for medical outcomes, service delays, or provider actions.',
        'No liability is accepted for technical interruptions, network failures, or offline delays.',
        'ONMINT is not responsible for circumstances beyond its reasonable control.'
      ]
    },
    {
      id: 'modifications',
      title: '6. Modifications',
      icon: RefreshCw,
      description: 'Terms are subject to updates to reflect changes in services or regulations:',
      items: [
        'ONMINT reserves the right to update these Terms & Conditions at any time.',
        'We will post notifications of updates on this page with the revision date.',
        'Continued use of the platform constitutes acceptance of updated terms.'
      ]
    },
    {
      id: 'contact-us-terms',
      title: 'Contact Us',
      icon: Phone,
      description: 'If you have questions about these Terms & Conditions, please contact us:',
      contact: true
    }
  ];

  const currentSections = activeTab === 'privacy' ? privacySections : termsSections;

  // Filter sections by search query
  const filteredSections = currentSections.filter(section => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    const matchTitle = section.title.toLowerCase().includes(query);
    const matchDesc = section.description.toLowerCase().includes(query);
    const matchItems = section.items?.some(item => item.toLowerCase().includes(query)) || false;
    return matchTitle || matchDesc || matchItems;
  });

  return (
    <div className="min-h-screen flex flex-col" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      minHeight: '100vh',
      backgroundColor: 'var(--bg-primary)',
      color: 'var(--text-primary)',
      transition: 'background-color 0.3s ease, color 0.3s ease'
    }}>
      
      {/* Header Navigation */}
      <header className="header-glass" style={{ display: 'flex', alignItems: 'center' }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              background: 'var(--accent-gradient)',
              color: '#ffffff'
            }}>
              <HeartPulse size={20} />
            </div>
            <span style={{ fontFamily: 'var(--font-display)', fontWeight: 800, fontSize: '1.4rem', tracking: '-0.02em', color: 'var(--text-primary)' }}>
              ONMINT
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <button 
              onClick={toggleTheme} 
              className="theme-toggle-btn"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section 
        style={{
          background: 'var(--hero-gradient)',
          color: 'var(--hero-text)',
          padding: '120px 0 60px 0',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Glow Effects */}
        <div style={{
          position: 'absolute',
          top: '-150px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: '500px',
          height: '500px',
          background: 'rgba(13, 148, 136, 0.15)',
          borderRadius: '50%',
          filter: 'blur(100px)',
          pointerEvents: 'none'
        }} />

        <div className="container animate-fade-in" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ 
            display: 'inline-flex', 
            alignItems: 'center', 
            gap: '8px', 
            background: 'var(--tag-bg)', 
            color: 'var(--tag-text)',
            padding: '6px 16px', 
            borderRadius: '9999px',
            marginBottom: '20px',
            fontSize: '0.85rem',
            fontWeight: 600,
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
            border: '1px solid var(--tag-border)'
          }}>
            <Calendar size={14} style={{ color: 'var(--accent-color)' }} />
            Last Updated: June 2026
          </div>
          
          <h1 style={{ 
            fontSize: 'calc(2.2rem + 1.2vw)', 
            fontWeight: 800, 
            letterSpacing: '-0.03em', 
            lineHeight: 1.15,
            marginBottom: '16px',
            fontFamily: 'var(--font-display)'
          }}>
            ONMINT Legal Center
          </h1>
          
          <p style={{ 
            maxWidth: '600px', 
            margin: '0 auto 32px auto', 
            fontSize: '1.15rem', 
            opacity: 0.85,
            fontWeight: 400,
            lineHeight: 1.5
          }}>
            Transparent, secure, and user-centric digital healthcare services. Review our official privacy policies and terms of service.
          </p>

          {/* Interactive Switcher */}
          <div className="tab-control">
            <div className="tab-slider" style={{
              width: 'calc(50% - 4px)',
              transform: activeTab === 'privacy' ? 'translateX(0)' : 'translateX(100%)'
            }} />
            <button 
              className={`tab-btn ${activeTab === 'privacy' ? 'active' : ''}`}
              onClick={() => { setActiveTab('privacy'); setSearchQuery(''); }}
            >
              <Shield size={16} />
              Privacy Policy
            </button>
            <button 
              className={`tab-btn ${activeTab === 'terms' ? 'active' : ''}`}
              onClick={() => { setActiveTab('terms'); setSearchQuery(''); }}
            >
              <FileText size={16} />
              Terms & Conditions
            </button>
          </div>
        </div>
      </section>

      {/* Main Body */}
      <main className="container" style={{ flexGrow: 1 }}>
        
        {/* Search Bar Panel */}
        <div className="glass-card animate-fade-in" style={{
          padding: '1.25rem',
          marginTop: '-24px',
          position: 'relative',
          zIndex: 5,
          display: 'flex',
          alignItems: 'center',
          gap: '12px'
        }}>
          <Search size={20} style={{ color: 'var(--text-tertiary)' }} />
          <input 
            type="text" 
            placeholder={`Search ONMINT ${activeTab === 'privacy' ? 'Privacy Policy' : 'Terms & Conditions'}...`}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: '100%',
              border: 'none',
              outline: 'none',
              background: 'transparent',
              fontSize: '1.05rem',
              color: 'var(--text-primary)',
              fontFamily: 'var(--font-sans)'
            }}
          />
          {searchQuery && (
            <button 
              onClick={() => setSearchQuery('')}
              style={{
                background: 'transparent',
                border: 'none',
                color: 'var(--text-tertiary)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: 600
              }}
            >
              Clear
            </button>
          )}
        </div>

        {/* Desktop Sidebar + Main Column Layout */}
        <div className="main-layout">
          
          {/* Sidebar Table of Contents */}
          <aside className="animate-slide-in" style={{ display: 'none' }}>
            {/* Table of contents will be visible only on desktop */}
            <style dangerouslySetInnerHTML={{__html: `
              @media (min-width: 1024px) {
                aside.animate-slide-in {
                  display: block !important;
                }
              }
            `}} />
            <div className="toc-sidebar glass-card">
              <div>
                <span className="toc-heading">Navigation</span>
                <ul className="toc-list">
                  {currentSections.map(section => (
                    <li key={section.id}>
                      <a 
                        href={`#${section.id}`} 
                        className={`toc-link ${activeSection === section.id ? 'active' : ''}`}
                        onClick={(e) => {
                          e.preventDefault();
                          document.getElementById(section.id)?.scrollIntoView({ behavior: 'smooth' });
                          setActiveSection(section.id);
                        }}
                      >
                        <ChevronRight size={14} />
                        {section.title.split('. ')[1] || section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          {/* Main Content List */}
          <section className="animate-fade-in" style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {filteredSections.length === 0 ? (
              <div className="glass-card" style={{ padding: '3rem', textAlign: 'center', color: 'var(--text-secondary)' }}>
                <AlertTriangle size={48} style={{ margin: '0 auto 16px auto', color: 'var(--text-tertiary)' }} />
                <h3>No sections match your search query</h3>
                <p style={{ marginTop: '8px' }}>Try typing different keywords or reset your filter.</p>
                <button 
                  onClick={() => setSearchQuery('')}
                  style={{
                    marginTop: '16px',
                    padding: '8px 20px',
                    borderRadius: '9999px',
                    background: 'var(--accent-gradient)',
                    color: '#ffffff',
                    border: 'none',
                    fontWeight: 600,
                    cursor: 'pointer'
                  }}
                >
                  Reset Search
                </button>
              </div>
            ) : (
              filteredSections.map(section => {
                const IconComponent = section.icon;
                return (
                  <article 
                    id={section.id} 
                    key={section.id} 
                    className="glass-card legal-section"
                    style={{ scrollMarginTop: '100px' }}
                  >
                    <div className="legal-title-wrapper">
                      <div className="legal-icon-container">
                        <IconComponent size={22} />
                      </div>
                      <h2 className="legal-title">{section.title}</h2>
                    </div>

                    <p className="legal-body">{section.description}</p>

                    {section.items && (
                      <ul className="legal-list">
                        {section.items.map((item, idx) => (
                          <li key={idx} className="legal-list-item">
                            <span className="legal-list-bullet">•</span>
                            <span className="legal-body">{item}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {section.contact && (
                      <div className="contact-grid">
                        <a href="mailto:onmintofficial@gmail.com" className="contact-card">
                          <div className="contact-icon-wrapper">
                            <Mail size={22} />
                          </div>
                          <div className="contact-details">
                            <span className="contact-label">Email Support</span>
                            <span className="contact-value">onmintofficial@gmail.com</span>
                          </div>
                        </a>
                        <a href="tel:+919565443382" className="contact-card">
                          <div className="contact-icon-wrapper">
                            <Phone size={22} />
                          </div>
                          <div className="contact-details">
                            <span className="contact-label">Phone Hotline</span>
                            <span className="contact-value">+91 95654 43382</span>
                          </div>
                        </a>
                      </div>
                    )}
                  </article>
                );
              })
            )}
          </section>

        </div>
      </main>

      {/* Footer */}
      <footer style={{
        background: 'var(--bg-secondary)',
        borderTop: '1px solid var(--card-border)',
        padding: '32px 0',
        marginTop: '60px',
        textAlign: 'center',
        color: 'var(--text-tertiary)',
        fontSize: '0.9rem'
      }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
            <HeartPulse size={18} style={{ color: 'var(--accent-color)' }} />
            <span style={{ fontWeight: 700, letterSpacing: '0.05em', color: 'var(--text-primary)' }}>ONMINT HEALTH</span>
          </div>
          <p>© {new Date().getFullYear()} ONMINT. All rights reserved.</p>
          <p style={{ marginTop: '8px', fontSize: '0.8rem' }}>
            Designed and built for transparency and clinical safety compliance.
          </p>
        </div>
      </footer>

    </div>
  );
}

export default App;
