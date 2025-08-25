import { useState } from 'react';
import { FaCopy, FaCheck, FaLock, FaArrowRight } from 'react-icons/fa';
import './DonationPage.css';

const DonationPage = () => {
  const [copied, setCopied] = useState<{[key: string]: boolean}>({});
  const bankDetails = {
    bankName: 'Standard Bank',
    accountName: 'Kayamandi Women and Children Development',
    accountNumber: '0123456789',
    branchCode: '051001',
    reference: 'DONATION',
    swiftCode: 'SBZAZAJJ'
  };

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopied(prev => ({ ...prev, [field]: true }));
    
    setTimeout(() => {
      setCopied(prev => ({ ...prev, [field]: false }));
    }, 2000);
  };


  const renderBankDetail = (label: string, value: string, field: string) => (
    <div className="bank-detail" key={field}>
      <span className="label">{label}:</span>
      <div className="value-container">
        <span className="value">{value}</span>
        <button 
          onClick={() => copyToClipboard(value, field)}
          className="copy-btn"
          aria-label={`Copy ${label}`}
        >
          {copied[field] ? <FaCheck /> : <FaCopy />}
        </button>
      </div>
    </div>
  );

  return (
    <div className="donation-page">
      {/* Hero Section */}
      <section className="page-header">
        <div className="container">
          <h1>Support Our Cause</h1>
          <p>Your donation makes a difference in the lives of women and children in Kayamandi</p>
        </div>
      </section>

      <div className="donation-container">
        <div className="donation-main">
          <h1>Make a Donation</h1>
          <p className="intro-text">
            Your generous contribution will help us continue our mission to support women and children in need. 
            Every donation makes a difference in our community.
          </p>
          
          <div className="bank-transfer-section">
            <h2>Bank Transfer Details</h2>
            <p>Make a direct deposit to our bank account:</p>
            
            <div className="bank-details">
              {renderBankDetail('Bank Name', bankDetails.bankName, 'bankName')}
              {renderBankDetail('Account Name', bankDetails.accountName, 'accountName')}
              {renderBankDetail('Account Number', bankDetails.accountNumber, 'accountNumber')}
              {renderBankDetail('Branch Code', bankDetails.branchCode, 'branchCode')}
              {renderBankDetail('Reference', bankDetails.reference, 'reference')}
              {renderBankDetail('SWIFT Code', bankDetails.swiftCode, 'swiftCode')}
            </div>
            
            <button 
              className="copy-all-btn"
              onClick={() => {
                const allDetails = Object.entries(bankDetails)
                  .map(([key, value]) => `${key.replace(/([A-Z])/g, ' $1').trim()}: ${value}`)
                  .join('\n');
                copyToClipboard(allDetails, 'all');
              }}
            >
              {copied['all'] ? 'Copied!' : 'Copy All Details'}
            </button>
          </div>
        </div>
        
        <div className="donation-sidebar">
          <div className="impact-summary">
            <h3>Your Impact</h3>
            <div className="impact-item">
              <div className="impact-icon">🍲</div>
              <div className="impact-text">R100 feeds a child for a week</div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">📚</div>
              <div className="impact-text">R500 provides educational materials for a month</div>
            </div>
            <div className="impact-item">
              <div className="impact-icon">❤️</div>
              <div className="impact-text">R1000 supports trauma counseling sessions</div>
            </div>
            
            <div className="tax-info">
              <FaLock className="lock-icon" />
              <span>Your donation is tax-deductible</span>
            </div>
          </div>
          
          <div className="other-options">
            <h3>Other Ways to Give</h3>
            <a href="/sponsor" className="option-link">
              Sponsor a Child <FaArrowRight />
            </a>
            <a href="/volunteer" className="option-link">
              Volunteer <FaArrowRight />
            </a>
            <a href="/corporate" className="option-link">
              Corporate Partnerships <FaArrowRight />
            </a>
          </div>
          
          <div className="support-info">
            <h3>Need Help?</h3>
            <p>Contact us at <a href="mailto:donations@kwcd.org.za">donations@kwcd.org.za</a> for assistance with your donation.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DonationPage;
