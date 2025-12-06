import React, {useLayoutEffect} from 'react';
import Button from "react-bootstrap/Button";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const nav = useNavigate()

  useLayoutEffect(() => {
    document.title = "Privacy Policy"
  }, []);

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'system-ui, -apple-system, sans-serif' }}>
      <div className="container pb-5 d-grid">
        <Button variant='outline-primary' onClick={() => nav('/')}>Return to Homepage</Button>
      </div>
      <h1>Privacy Policy</h1>
      <p><strong>Last Updated: December 5, 2025</strong></p>

      <h2>1. Information We Collect</h2>
      <p>
        We collect the following information when you enter our giveaway:
      </p>
      <ul>
        <li>Your email address</li>
        <li>Your first name</li>
        <li>Your state of residence (for eligibility verification and winner announcements)</li>
      </ul>
      <p>
        We do not collect any other personal information, and we do not use cookies or tracking technologies
        on our website.
      </p>

      <h2>2. How We Use Your Information</h2>
      <p>Your email address and first name are used solely for:</p>
      <ul>
        <li>Entering you into the giveaway</li>
        <li>Notifying you if you win</li>
        <li>Announcing winners (first name and state only)</li>
        <li>Communicating essential information about the giveaway</li>
      </ul>
      <p>
        We do not use your information for marketing purposes or share it with third parties for their marketing use.
      </p>

      <h2>3. Data Storage and Security</h2>
      <p>
        Your email address is stored in a secure database with restricted access. We implement reasonable security
        measures to protect your information from unauthorized access, including firewall protection and access controls.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain your email address for the duration of the giveaway and 30 days afterward, or until you request deletion.
      </p>

      <h2>5. Your Rights</h2>
      <p>You have the right to:</p>
      <ul>
        <li>Request access to your data</li>
        <li>Request deletion of your data</li>
        <li>Withdraw from the giveaway at any time</li>
      </ul>
      <p>To exercise these rights, contact us at contact@freestudy.dev.</p>

      <h2>6. Children's Privacy</h2>
      <p>
        Our giveaway is not intended for individuals under the age of 18. We do not knowingly collect information
        from children.
      </p>

      <h2>7. International Users</h2>
      <p>
        This giveaway is only available to residents of the United States. If you are accessing our website from
        outside the United States, your entry will not be accepted.
      </p>

      <h2>8. Donations</h2>
      <p>
        If you donate via Ko-fi, that transaction is processed by Ko-fi and subject to their privacy policy.
        We do not receive or store your payment information. Donations are used for website operational costs
        and funding giveaway prizes.
      </p>

      <h2>9. Third-Party Services</h2>
      <p>
        This website uses the following third-party services:
      </p>
      <ul>
        <li>
          <strong>Vercel:</strong> Hosts our frontend website (does not have access to email data)
        </li>
        <li>
          <strong>Vultr:</strong> Hosts our backend server and database (stores email addresses for giveaway entries)
        </li>
        <li>
          <strong>Ko-fi:</strong> Processes donations. Ko-fi transactions are subject to
          <a href="https://ko-fi.com/home/privacy" target="_blank" rel="noopener noreferrer"> Ko-fi's privacy policy</a>.
          We do not receive or store your payment information.
        </li>
      </ul>
      <p>
        We do not use analytics, advertising, or tracking services. We do not share your email address with any
        third parties for marketing purposes. Hosting providers have access to data only as necessary to operate
        the technical infrastructure.
      </p>

      <h2>10. Data Controller Information</h2>
      <p>
        This giveaway is operated by an individual, not a company. Your personal data is controlled by:
      </p>
      <p>
        Data Controller: Marquel Rogers<br />
        Location: Bethalto, IL<br />
        Contact: contact@freestudy.dev
      </p>

      <h2>11. Changes to This Policy</h2>
      <p>
        We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated
        "Last Updated" date. Continued use of the website after changes constitutes acceptance of the updated policy.
      </p>

      <h2>12. Contact Us</h2>
      <p>
        For questions about this Privacy Policy or to exercise your data rights, contact:<br />
        contact@freestudy.dev
      </p>
    </div>
  );
};

export default PrivacyPolicy;