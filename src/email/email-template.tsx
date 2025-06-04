import * as React from 'react';

interface EmailTemplateProps {
  link: string;
}

export const VerifyEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  link,
}) => (
  <div style={containerStyle}>
    <div style={cardStyle}>
      <h1 style={headingStyle}>Welcome to DevSell!</h1>
      <p style={textStyle}>Thank you for signing up. Please verify your email address to complete your registration.</p>
      
      <a 
        href={link} 
        style={buttonStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        Verify Email Address
      </a>
      
      <p style={textStyle}>
        If you didn't request this email, you can safely ignore it.
      </p>
      
      <div style={footerStyle}>
        <p style={smallTextStyle}>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </div>
);
export const ResetPasswordEmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  link ,
}) => (
  <div style={containerStyle}>
    <div style={cardStyle}>
      <h1 style={headingStyle}>Thanks for requesting!</h1>
      <p style={textStyle}>Here's is your link to reset your password. Please click the link below to complete.</p>
      
      <a 
        href={link} 
        style={buttonStyle}
        target="_blank"
        rel="noopener noreferrer"
      >
        Verify Email Address
      </a>
      
      <p style={textStyle}>
        If you didn't request this email, you can safely ignore it.
      </p>
      
      <div style={footerStyle}>
        <p style={smallTextStyle}>© {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
      </div>
    </div>
  </div>
);
// Styling constants
const containerStyle: React.CSSProperties = {
  backgroundColor: '#f3f4f6',
  padding: '20px',
  fontFamily: "'Inter', Arial, sans-serif",
  lineHeight: '1.5',
  color: '#374151'
};

const cardStyle: React.CSSProperties = {
  maxWidth: '600px',
  margin: '0 auto',
  backgroundColor: '#ffffff',
  borderRadius: '8px',
  padding: '32px',
  boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)'
};

const headingStyle: React.CSSProperties = {
  fontSize: '24px',
  fontWeight: '600',
  color: '#111827',
  marginBottom: '20px'
};

const textStyle: React.CSSProperties = {
  fontSize: '16px',
  marginBottom: '24px',
  color: '#4b5563'
};

const buttonStyle: React.CSSProperties = {
  display: 'inline-block',
  backgroundColor: '#2563eb',
  color: '#ffffff',
  padding: '12px 24px',
  borderRadius: '6px',
  textDecoration: 'none',
  fontWeight: '500',
  fontSize: '16px',
  marginBottom: '24px',
  textAlign: 'center'
};

const footerStyle: React.CSSProperties = {
  marginTop: '32px',
  paddingTop: '16px',
  borderTop: '1px solid #e5e7eb'
};

const smallTextStyle: React.CSSProperties = {
  fontSize: '14px',
  color: '#6b7280',
  textAlign: 'center'
};