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
  HeartPulse,
  Clock,
  Trash2,
  MapPin,
  Camera,
  Mic,
  Bell,
  Activity,
  CheckCircle2
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
      description: 'ONMINT collects information strictly necessary to provide healthcare connectivity and fulfill medical service bookings across our digital platform:',
      items: [
        'Personal Identity Information: Full name, mobile phone number, email address, gender, and date of birth for identity verification and account management.',
        'Healthcare & Medical Data: Doctor prescription uploads, consultation history, diagnostic test orders, and health concerns shared voluntarily to receive care.',
        'Address & Delivery Location: Residential/service address and geolocation coordinates for home nursing visits, pathology sample collections, and medicine doorstep delivery.',
        'Healthcare Provider / Partner KYC Data: Medical council registration numbers, nursing qualifications, pharmacy drug licenses, pathology lab certifications, and ambulance registration details.',
        'Payment & Transaction Metadata: Secure transaction identifiers, payment status, and order totals processed through authorized PCI-DSS compliant payment gateways (we do not store full credit/debit card numbers or CVVs).'
      ]
    },
    {
      id: 'app-permissions',
      title: '2. Device Permissions & Purpose Disclosures',
      icon: Lock,
      description: 'In strict accordance with Google Play User Data and Permissions policies, our apps request only permissions essential to their core healthcare functionality:',
      items: [
        'Location Permission (ACCESS_FINE_LOCATION / ACCESS_COARSE_LOCATION): Used to locate user addresses for emergency ambulance routing, assign nearest certified nurses, schedule home pathology sample pickup, and display nearby pharmacies.',
        'Camera & Storage / Photos (CAMERA / READ_MEDIA_IMAGES): Used exclusively to let users take or upload photos of medical prescriptions, lab reports, and profile pictures, and to allow healthcare partners to upload verification licenses.',
        'Microphone (RECORD_AUDIO): Used solely during live tele-consultation audio and video calls between patients and licensed doctors. Real-time audio streams are end-to-end transmitted and never recorded or stored without explicit mutual consent.',
        'Notifications (POST_NOTIFICATIONS): Used to deliver real-time booking updates, medicine dispatch tracking, doctor consultation reminders, and emergency ambulance status.'
      ]
    },
    {
      id: 'info-use',
      title: '3. Use of Information',
      icon: Info,
      description: 'Your information is used solely to provide, operate, and enhance ONMINT healthcare services:',
      items: [
        'Facilitating and managing healthcare service bookings and consultations.',
        'Connecting patients directly with verified independent doctors, nurses, pathology labs, pharmacies, and ambulance operators.',
        'Providing responsive customer support, dispute resolution, and critical service notifications.',
        'Maintaining platform security, authenticating logins via OTP, and preventing fraudulent activities.',
        'Complying with statutory healthcare, legal, and financial regulatory requirements in India.'
      ]
    },
    {
      id: 'info-sharing',
      title: '4. Information Sharing & Non-Sale Guarantee',
      icon: Share2,
      description: 'ONMINT enforces strict data privacy boundaries and never monetizes your personal data:',
      items: [
        'Zero Data Sale: ONMINT does NOT sell, rent, lease, or trade personal or health data to third-party advertisers, data brokers, or commercial marketing firms.',
        'Fulfillment Partners: Information is shared strictly with the specific healthcare professional (doctor, nurse, lab technician, pharmacist, ambulance driver) assigned to fulfill your requested booking.',
        'Authorized Service Providers: Secure data transmission with certified third parties (such as cloud hosting and payment processors) under strict confidentiality agreements.',
        'Legal Obligations: We may disclose information only when mandated by applicable law, court orders, or authorized government health directives.'
      ]
    },
    {
      id: 'data-security',
      title: '5. Data Security & Encryption',
      icon: Shield,
      description: 'We prioritize sensitive health data protection through enterprise-grade technical and organizational safeguards:',
      items: [
        'End-to-End Encryption: All data transferred between your mobile app and our servers is secured via TLS 1.3 / HTTPS encryption protocols.',
        'Access Controls: Strict role-based access restrictions ensuring only authorized personnel can access service logs for operational maintenance.',
        'Regular Security Audits: Periodic system vulnerability reviews and encrypted database storage to safeguard against unauthorized access or breaches.'
      ]
    },
    {
      id: 'data-retention',
      title: '6. Data Retention Policy & Schedules',
      icon: Clock,
      description: 'ONMINT maintains transparent, well-defined data retention schedules for all personal, medical, and operational data collected across our platforms:',
      items: [
        'User Profile & Account Information: Retained only for the active lifespan of your user account. Once you close or delete your account, your profile data is permanently purged.',
        'Medical Records & Prescriptions: Retained only for as long as necessary to provide clinical continuity and fulfill patient-requested healthcare services, or as required by applicable statutory medical documentation laws in India.',
        'Live Geolocation Data: Ephemeral. Real-time location coordinates used during active emergency ambulance routing, nurse home visits, or sample collections are retained only during the active service window and deleted within 24 hours of booking completion.',
        'Technical, Diagnostic & Server Logs: Retained for a maximum period of 90 days for system integrity, security auditing, and crash troubleshooting, after which logs are automatically and permanently purged.',
        'Healthcare Provider / Partner Verification Data: Retained during the active partnership period to verify clinical credentials and satisfy state medical licensing statutory compliance.',
        'Financial & Transaction Metadata: Basic transaction reference records are retained solely for tax compliance, accounting, and anti-fraud statutory periods as required by Indian financial regulations.'
      ]
    },
    {
      id: 'data-deletion',
      title: '7. User Data Deletion Policy & Step-by-Step Instructions',
      icon: Trash2,
      description: 'Users may request deletion of their ONMINT account and associated personal and health data at any time, subject to applicable legal, regulatory, security, and statutory data-retention requirements:',
      items: [
        'Method 1 — Dedicated Online Web Deletion Portal (No app required): Visit our official account deletion portal at https://onmint.in/delete-account, select your role, enter your registered mobile number or email with your password, and submit the request.',
        'Method 2 — Email Support Request: Send an email from your registered email address to onmintofficial@gmail.com with the subject "Account Deletion Request" and include your registered phone number or email address.',
        'Scope of Erasure: Upon processing and verification of a deletion request, eligible personal profile information, passwords, contact details, uploaded files, and other associated user data are permanently deleted from our active databases and cloud storage, subject to applicable legal and regulatory retention requirements.',
        'Fulfillment Timeline: Account deactivation is initiated after the deletion request is verified, and eligible data is permanently deleted from production systems. Data that must be retained for legal, regulatory, financial, security, or fraud-prevention purposes will be retained only for the period required by applicable law.',
        'Important: Account deletion is permanent and cannot be undone. Users who no longer have access to their ONMINT account may use the web deletion portal or email support to request deletion.'
      ]
    },
    {
      id: 'user-consent',
      title: '8. User Rights & Consent',
      icon: CheckCircle2,
      description: 'By accessing or using the ONMINT platform, you acknowledge and agree to:',
      items: [
        'Consent to the collection, processing, retention, and deletion protocols set forth in this Privacy Policy.',
        'Right to Access & Rectify: You may review, modify, or update your profile and communication preferences at any time within app settings.',
        'Right to Withdraw Consent: You can withdraw consent or delete your account at any time via in-app settings or our web deletion portal.'
      ]
    },
    {
      id: 'contact-us',
      title: 'Contact Us & Grievance Officer',
      icon: Phone,
      description: 'If you have questions, privacy inquiries, or require grievance resolution regarding ONMINT services, get in touch with our team:',
      contact: true
    }
  ];

  const termsSections = [
    {
      id: 'platform-services',
      title: '1. Platform Services',
      icon: HeartPulse,
      description: 'ONMINT is a digital healthcare platform that facilitates direct connectivity to the following healthcare services:',
      items: [
        'Online Doctor Consultations: Connecting users with certified independent medical practitioners for virtual advice.',
        'Home Nursing Care: In-home healthcare and nursing assistance provided by qualified nurses.',
        'Pathology & Lab Diagnostics: Booking lab tests with certified laboratories and home sample collection.',
        'Doorstep Medicine Delivery: Facilitating orders and deliveries from licensed local retail pharmacies.',
        'Ambulance Transit Services: Booking emergency and non-emergency ambulance patient transport.',
        'Blood Bank Connect: Assisting blood requirement matching and voluntary donor coordination.'
      ]
    },
    {
      id: 'user-resp',
      title: '2. User Responsibilities & Conduct',
      icon: User,
      description: 'To maintain a safe, respectful, and functional environment, all platform users agree to:',
      items: [
        'Provide accurate, authentic, and complete personal and medical history details.',
        'Use the platform in compliance with all applicable laws, guidelines, and terms.',
        'Strict Prohibition: Any misuse of emergency ambulance or healthcare services (such as prank requests or fraudulent bookings) is strictly prohibited and subject to legal action.'
      ]
    },
    {
      id: 'disclaimer',
      title: '3. Healthcare & Medical Emergency Disclaimer',
      icon: Stethoscope,
      description: 'Please review our technology facilitator role and medical emergency guidelines:',
      items: [
        'Technology Platform Role: ONMINT operates solely as a digital facilitator connecting users with independent licensed doctors, nurses, labs, and ambulance operators.',
        'Clinical Responsibility: Medical advice, diagnoses, treatment plans, lab accuracy, and emergency transit care are the sole clinical responsibility of the independent licensed healthcare professionals.',
        'Emergency Helplines: ONMINT virtual consultations are not a substitute for hospital emergency care. In acute or life-threatening medical emergencies, please call 108/112 or visit the nearest emergency medical center immediately.'
      ]
    },
    {
      id: 'payments',
      title: '4. Payments, Pricing & Refunds',
      icon: CreditCard,
      description: 'Transparent pricing and billing terms for services booked through ONMINT:',
      items: [
        'Transparent Charges: All consultation fees, test charges, medicine prices, and transit rates are clearly displayed prior to booking confirmation.',
        'Payment Processing: Payments are processed through secure, authorized payment gateways compliant with Indian financial regulations.',
        'Cancellations & Refunds: Eligible refunds for cancelled appointments or unavailable services are processed back to the original payment method in accordance with our cancellation policy.'
      ]
    },
    {
      id: 'liability',
      title: '5. Limitation of Liability',
      icon: AlertTriangle,
      description: 'To the maximum extent permissible under applicable law:',
      items: [
        'ONMINT shall not be liable for medical outcomes, professional practitioner conduct, or clinical delays by independent providers.',
        'No liability is accepted for third-party telecommunication interruptions, device incompatibility, or circumstances beyond reasonable platform control.'
      ]
    },
    {
      id: 'modifications',
      title: '6. Policy Modifications & Updates',
      icon: RefreshCw,
      description: 'Terms and policies are periodically reviewed to reflect enhancements in services or regulatory updates:',
      items: [
        'ONMINT reserves the right to revise these Terms & Conditions and Privacy Policy as required.',
        'Updated versions will be published on this legal portal with the effective revision date indicated.',
        'Continued usage of the ONMINT application constitutes acceptance of the latest updated terms.'
      ]
    },
    {
      id: 'contact-us-terms',
      title: 'Contact Us & Grievance Redressal',
      icon: Phone,
      description: 'For inquiries, complaints, or grievance redressal regarding these Terms & Conditions:',
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
            Last Updated: September 2026
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
            <style dangerouslySetInnerHTML={{
              __html: `
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
                        {section.items.map((item, idx) => {
                          const urlRegex = /(https?:\/\/[^\s,]+)/g;
                          const parts = item.split(urlRegex);
                          return (
                            <li key={idx} className="legal-list-item">
                              <span className="legal-list-bullet">•</span>
                              <span className="legal-body">
                                {parts.map((part, pIdx) => {
                                  if (part.match(urlRegex)) {
                                    return (
                                      <a
                                        key={pIdx}
                                        href={part}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        style={{
                                          color: 'var(--accent-color)',
                                          textDecoration: 'underline',
                                          fontWeight: 700,
                                          margin: '0 4px'
                                        }}
                                      >
                                        {part}
                                      </a>
                                    );
                                  }
                                  return part;
                                })}
                              </span>
                            </li>
                          );
                        })}
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
