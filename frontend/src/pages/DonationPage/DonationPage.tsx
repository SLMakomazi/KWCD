import React, { useState } from 'react';
import './DonationPage.css';

const DonationPage = () => {
  const [donationType, setDonationType] = useState('once');
  const [amount, setAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    postalCode: '',
    country: 'South Africa',
    message: '',
    anonymous: false,
    newsletter: true,
    terms: false
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = (e.target as HTMLInputElement).checked;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle donation submission
    console.log('Donation submitted:', { donationType, amount: amount || customAmount, ...formData });
    // Here you would typically integrate with a payment gateway
  };

  const donationAmounts = [100, 250, 500, 1000, 2500, 5000];

  return (
    <div className="donation-page">
      <section className="donation-hero">
        <div className="container">
          <h1>Support Our Cause</h1>
          <p>Your generous donation helps us continue our vital work in the Kayamandi community</p>
        </div>
      </section>

      <section className="donation-section">
        <div className="container">
          <div className="donation-container">
            {/* Donation Form */}
            <div className="donation-form-container">
              <h2>Make a Donation</h2>
              <p className="form-subtitle">All donations are tax-deductible</p>
              
              <form onSubmit={handleSubmit} className="donation-form">
                {/* Donation Type Toggle */}
                <div className="donation-type-toggle">
                  <button
                    type="button"
                    className={`toggle-option ${donationType === 'once' ? 'active' : ''}`}
                    onClick={() => setDonationType('once')}
                  >
                    One-time Donation
                  </button>
                  <button
                    type="button"
                    className={`toggle-option ${donationType === 'monthly' ? 'active' : ''}`}
                    onClick={() => setDonationType('monthly')}
                  >
                    Monthly Donation
                  </button>
                </div>

                {/* Donation Amount */}
                <div className="form-group">
                  <label>Select Amount (ZAR)</label>
                  <div className="amount-options">
                    {donationAmounts.map((amt) => (
                      <button
                        key={amt}
                        type="button"
                        className={`amount-option ${amount === amt.toString() ? 'selected' : ''}`}
                        onClick={() => {
                          setAmount(amt.toString());
                          setCustomAmount('');
                        }}
                      >
                        R{amt}
                      </button>
                    ))}
                  </div>
                  <div className="custom-amount">
                    <span>Or enter a custom amount:</span>
                    <div className="input-with-currency">
                      <span className="currency">R</span>
                      <input
                        type="number"
                        placeholder="0.00"
                        value={customAmount}
                        onChange={(e) => {
                          setCustomAmount(e.target.value);
                          setAmount('');
                        }}
                        min="1"
                        step="0.01"
                      />
                    </div>
                  </div>
                </div>

                {/* Donor Information */}
                <div className="form-group">
                  <h3>Your Information</h3>
                  <div className="form-row">
                    <div className="form-col">
                      <input
                        type="text"
                        name="firstName"
                        placeholder="First Name*"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-col">
                      <input
                        type="text"
                        name="lastName"
                        placeholder="Last Name*"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-col">
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address*"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-col">
                      <input
                        type="tel"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>

                {/* Billing Information */}
                <div className="form-group">
                  <h3>Billing Information</h3>
                  <div className="form-row">
                    <div className="form-col">
                      <input
                        type="text"
                        name="address"
                        placeholder="Street Address*"
                        value={formData.address}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-col">
                      <input
                        type="text"
                        name="city"
                        placeholder="City*"
                        value={formData.city}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="form-col">
                      <input
                        type="text"
                        name="postalCode"
                        placeholder="Postal Code*"
                        value={formData.postalCode}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-col">
                      <select
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        required
                      >
                        <option value="South Africa">South Africa</option>
                        <option value="United States">United States</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Canada">Canada</option>
                        <option value="Australia">Australia</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Payment Method */}
                <div className="form-group">
                  <h3>Payment Method</h3>
                  <div className="payment-methods">
                    <div className="payment-method">
                      <input
                        type="radio"
                        id="credit-card"
                        name="paymentMethod"
                        value="credit-card"
                        defaultChecked
                      />
                      <label htmlFor="credit-card">
                        <i className="fab fa-cc-visa"></i>
                        <i className="fab fa-cc-mastercard"></i>
                        <span>Credit/Debit Card</span>
                      </label>
                      <div className="card-details">
                        <div className="form-row">
                          <div className="form-col">
                            <input
                              type="text"
                              name="cardNumber"
                              placeholder="Card Number"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-col">
                            <input
                              type="text"
                              name="cardName"
                              placeholder="Name on Card"
                              required
                            />
                          </div>
                        </div>
                        <div className="form-row">
                          <div className="form-col">
                            <input
                              type="text"
                              name="expiryDate"
                              placeholder="MM/YY"
                              required
                            />
                          </div>
                          <div className="form-col">
                            <input
                              type="text"
                              name="cvv"
                              placeholder="CVV"
                              required
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="payment-method">
                      <input
                        type="radio"
                        id="payfast"
                        name="paymentMethod"
                        value="payfast"
                      />
                      <label htmlFor="payfast">
                        <img src="/images/payfast-logo.png" alt="PayFast" className="payfast-logo" />
                        <span>Pay with PayFast</span>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Additional Information */}
                <div className="form-group">
                  <h3>Additional Information</h3>
                  <textarea
                    name="message"
                    placeholder="Add a personal message or special instructions (optional)"
                    value={formData.message}
                    onChange={handleChange}
                    rows={3}
                  ></textarea>
                  
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="anonymous"
                      name="anonymous"
                      checked={formData.anonymous}
                      onChange={handleChange}
                    />
                    <label htmlFor="anonymous">Make this donation anonymously</label>
                  </div>
                  
                  <div className="form-checkbox">
                    <input
                      type="checkbox"
                      id="newsletter"
                      name="newsletter"
                      checked={formData.newsletter}
                      onChange={handleChange}
                    />
                    <label htmlFor="newsletter">Subscribe to our newsletter</label>
                  </div>
                  
                  <div className="form-checkbox terms">
                    <input
                      type="checkbox"
                      id="terms"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      required
                    />
                    <label htmlFor="terms">
                      I agree to the <a href="/terms" target="_blank">Terms of Service</a> and <a href="/privacy" target="_blank">Privacy Policy</a> *
                    </label>
                  </div>
                </div>

                {/* Submit Button */}
                <button type="submit" className="btn btn-donate" disabled={!formData.terms || (!amount && !customAmount)}>
                  {donationType === 'once' ? 'Donate Now' : 'Start Monthly Donation'}
                  <span>R{amount || customAmount || '0.00'}</span>
                </button>
                
                <p className="secure-notice">
                  <i className="fas fa-lock"></i> This is a secure 256-bit SSL encrypted payment
                </p>
              </form>
            </div>

            {/* Donation Sidebar */}
            <div className="donation-sidebar">
              <div className="donation-summary">
                <h3>Your Donation</h3>
                <div className="summary-item">
                  <span>Amount</span>
                  <span>R{amount || customAmount || '0.00'}</span>
                </div>
                <div className="summary-item">
                  <span>Frequency</span>
                  <span>{donationType === 'once' ? 'One-time' : 'Monthly'}</span>
                </div>
                <div className="summary-total">
                  <span>Total</span>
                  <span>R{amount || customAmount || '0.00'}</span>
                </div>
                
                <div className="donation-impact">
                  <h4>Your Impact</h4>
                  <ul>
                    <li><i className="fas fa-check"></i> R100 feeds a child for a week</li>
                    <li><i className="fas fa-check"></i> R500 provides school supplies for a month</li>
                    <li><i className="fas fa-check"></i> R1000 supports our trauma counseling services</li>
                  </ul>
                </div>
                
                <div className="donation-security">
                  <div className="security-badge">
                    <i className="fas fa-shield-alt"></i>
                    <span>Secure Donation</span>
                  </div>
                  <p>Your donation is secure and encrypted.</p>
                </div>
              </div>
              
              <div className="other-ways">
                <h3>Other Ways to Give</h3>
                <ul>
                  <li><a href="/bank-transfer">Bank Transfer</a></li>
                  <li><a href="/eft">EFT Payment</a></li>
                  <li><a href="/sponsor">Sponsor a Child</a></li>
                  <li><a href="/volunteer">Volunteer</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="faq-section bg-light">
        <div className="container">
          <div className="section-header">
            <h2>Frequently Asked Questions</h2>
          </div>
          
          <div className="faq-container">
            <div className="faq-item">
              <button className="faq-question">
                Is my donation tax-deductible?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>Yes, KWCD is a registered non-profit organization (NPO 123-456) and all donations are tax-deductible in South Africa. You will receive a Section 18A tax certificate for your donation.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                How will my donation be used?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>Your donation will be used to support our various programs including the CNDC Feeding Scheme, Trauma Support Services, and community development initiatives. You can specify a particular program if you wish.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                Can I cancel or modify my monthly donation?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>Yes, you can modify or cancel your monthly donation at any time by contacting us at donations@kwcd.org.za or calling +27 71 841 6784.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                What payment methods do you accept?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>We accept all major credit and debit cards through our secure payment gateway. We also accept EFT payments and bank transfers. For more information, please visit our <a href="/payment-options">Payment Options</a> page.</p>
              </div>
            </div>
            
            <div className="faq-item">
              <button className="faq-question">
                How can I get a receipt for my donation?
                <i className="fas fa-chevron-down"></i>
              </button>
              <div className="faq-answer">
                <p>You will receive an automated email receipt immediately after your donation is processed. If you need another copy or have any questions about your donation, please email us at donations@kwcd.org.za.</p>
              </div>
            </div>
          </div>
          
          <div className="contact-support">
            <p>Still have questions? <a href="/contact">Contact our support team</a> for assistance.</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DonationPage;
