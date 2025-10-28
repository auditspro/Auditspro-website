import nodemailer from 'nodemailer';

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  submittedAt: string;
}

// Create transporter
const createTransporter = () => {
  return nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
};

// Email template for contact form notifications
const createContactEmailTemplate = (data: ContactFormData) => {
  return {
    subject: `New Contact Form Submission from ${data.name}`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>New Contact Form Submission</title>
          <style>
            body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
            .container { max-width: 600px; margin: 0 auto; padding: 20px; }
            .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
            .content { background-color: #ffffff; padding: 20px; border: 1px solid #e9ecef; border-radius: 8px; }
            .field { margin-bottom: 15px; }
            .label { font-weight: bold; color: #495057; }
            .value { margin-top: 5px; padding: 10px; background-color: #f8f9fa; border-radius: 4px; }
            .footer { margin-top: 20px; padding: 15px; background-color: #e9ecef; border-radius: 8px; font-size: 12px; color: #6c757d; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h2>🔔 New Contact Form Submission</h2>
              <p>You have received a new contact form submission from your website.</p>
            </div>
            
            <div class="content">
              <div class="field">
                <div class="label">👤 Name:</div>
                <div class="value">${data.name}</div>
              </div>
              
              <div class="field">
                <div class="label">📧 Email:</div>
                <div class="value">${data.email}</div>
              </div>
              
              ${data.phone ? `
                <div class="field">
                  <div class="label">📞 Phone:</div>
                  <div class="value">${data.phone}</div>
                </div>
              ` : ''}
              
              ${data.company ? `
                <div class="field">
                  <div class="label">🏢 Company:</div>
                  <div class="value">${data.company}</div>
                </div>
              ` : ''}
              
              <div class="field">
                <div class="label">💬 Message:</div>
                <div class="value">${data.message}</div>
              </div>
              
              <div class="field">
                <div class="label">🕒 Submitted At:</div>
                <div class="value">${new Date(data.submittedAt).toLocaleString()}</div>
              </div>
            </div>
            
            <div class="footer">
              <p>This email was automatically generated from your AuditsAU contact form.</p>
              <p>Please respond to the customer directly at: ${data.email}</p>
            </div>
          </div>
        </body>
      </html>
    `,
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
${data.phone ? `Phone: ${data.phone}` : ''}
${data.company ? `Company: ${data.company}` : ''}
Message: ${data.message}
Submitted At: ${new Date(data.submittedAt).toLocaleString()}

Please respond to the customer directly at: ${data.email}
    `.trim(),
  };
};

// Send contact form notification email
export const sendContactFormNotification = async (data: ContactFormData): Promise<boolean> => {
  try {
    // Check if email configuration is available
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS || !process.env.EMAIL_TO) {
      console.log('Email configuration not complete, skipping email notification');
      return false;
    }

    const transporter = createTransporter();
    const emailTemplate = createContactEmailTemplate(data);

    const mailOptions = {
      from: `"AuditsAU Contact Form" <${process.env.EMAIL_FROM}>`,
      to: process.env.EMAIL_TO,
      subject: emailTemplate.subject,
      text: emailTemplate.text,
      html: emailTemplate.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Contact form notification email sent:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending contact form notification email:', error);
    return false;
  }
};

// Send auto-reply email to the customer
export const sendAutoReplyEmail = async (data: ContactFormData): Promise<boolean> => {
  try {
    // Check if email configuration is available
    if (!process.env.EMAIL_HOST || !process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.log('Email configuration not complete, skipping auto-reply email');
      return false;
    }

    const transporter = createTransporter();

    const autoReplyTemplate = {
      subject: '🎉 Welcome to AuditsAU - Your Audit Journey Starts Here!',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <title>Welcome to AuditsAU - Thank you for contacting us!</title>
            <style>
              body { font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #333; margin: 0; padding: 0; background-color: #f8f9fa; }
              .container { max-width: 600px; margin: 0 auto; padding: 20px; }
              .header { background: linear-gradient(135deg, #007bff 0%, #0056b3 100%); color: white; padding: 30px 20px; border-radius: 12px 12px 0 0; text-align: center; }
              .logo { font-size: 24px; font-weight: bold; margin-bottom: 10px; }
              .content { background-color: #ffffff; padding: 30px; border-radius: 0 0 12px 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
              .welcome-section { background: linear-gradient(135deg, #e3f2fd 0%, #f3e5f5 100%); padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
              .message-box { background-color: #f8f9fa; padding: 20px; border-left: 4px solid #007bff; border-radius: 4px; margin: 20px 0; font-style: italic; }
              .services-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0; }
              .service-item { background-color: #f8f9fa; padding: 15px; border-radius: 8px; text-align: center; }
              .service-icon { font-size: 24px; margin-bottom: 8px; }
              .cta-section { background-color: #e8f4fd; padding: 20px; border-radius: 8px; margin: 20px 0; text-align: center; }
              .cta-button { display: inline-block; background-color: #007bff; color: white; padding: 12px 24px; text-decoration: none; border-radius: 6px; font-weight: bold; margin: 10px 5px; }
              .footer { margin-top: 20px; padding: 20px; background-color: #f8f9fa; border-radius: 8px; font-size: 14px; color: #6c757d; text-align: center; }
              .contact-info { background-color: #fff3cd; padding: 15px; border-radius: 8px; margin: 15px 0; }
              @media (max-width: 600px) { .services-grid { grid-template-columns: 1fr; } }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <div class="logo">🔍 AuditsAU</div>
                <h2>Welcome ${data.name}! 🎉</h2>
                <p>Your trusted partner for professional audit services</p>
              </div>
              
              <div class="content">
                <div class="welcome-section">
                  <h3>🙏 Thank You for Reaching Out!</h3>
                  <p>We're excited to help you with your audit needs and appreciate you choosing AuditsAU for your business requirements.</p>
                </div>
                
                <p>Dear ${data.name},</p>
                
                <p>Thank you for contacting AuditsAU! We have successfully received your inquiry and our expert team is already reviewing your requirements.</p>
                
                <div class="message-box">
                  <strong>📝 Your Message:</strong><br>
                  "${data.message}"
                </div>
                
                <div class="contact-info">
                  <strong>⏰ What happens next?</strong><br>
                  • Our audit specialists will review your inquiry within 2-4 hours<br>
                  • You'll receive a personalized response within 24 hours<br>
                  • We'll schedule a consultation call if needed<br>
                  • Get a customized audit solution for your business
                </div>
                
                <div class="cta-section">
                  <h3>🚀 While You Wait, Explore Our Services</h3>
                  <p>Discover how AuditsAU can transform your business compliance and financial accuracy</p>
                  <a href="https://auditsau.com/services" class="cta-button">View Our Services</a>
                  <a href="https://auditsau.com/how-it-works" class="cta-button">How It Works</a>
                </div>
                
                <div class="services-grid">
                  <div class="service-item">
                    <div class="service-icon">📊</div>
                    <strong>Financial Audits</strong><br>
                    <small>Comprehensive financial reviews</small>
                  </div>
                  <div class="service-item">
                    <div class="service-icon">🔒</div>
                    <strong>Compliance Audits</strong><br>
                    <small>Regulatory compliance checks</small>
                  </div>
                  <div class="service-item">
                    <div class="service-icon">⚡</div>
                    <strong>Quick Audits</strong><br>
                    <small>Fast-track audit solutions</small>
                  </div>
                  <div class="service-item">
                    <div class="service-icon">🎯</div>
                    <strong>Custom Solutions</strong><br>
                    <small>Tailored to your needs</small>
                  </div>
                </div>
                
                <p><strong>Need immediate assistance?</strong><br>
                For urgent matters, feel free to call us directly or schedule a consultation through our website.</p>
                
                <p>We're committed to providing you with exceptional audit services and look forward to building a successful partnership with your business.</p>
                
                <p>Warm regards,<br>
                <strong>The AuditsAU Team</strong><br>
                <em>Your Audit Excellence Partners</em></p>
              </div>
              
              <div class="footer">
                <p><strong>📧 This is an automated welcome message</strong></p>
                <p>🌐 Visit us: <a href="https://auditsau.com" style="color: #007bff;">auditsau.com</a> | 📞 Call us for urgent matters</p>
                <p>📍 Serving businesses across Australia with professional audit services</p>
                <p><small>© 2024 AuditsAU. All rights reserved.</small></p>
              </div>
            </div>
          </body>
        </html>
      `,
      text: `
        🎉 WELCOME TO AUDITSAU - Your Audit Journey Starts Here!
        
        Dear ${data.name},

        🙏 THANK YOU FOR REACHING OUT!
        
        We're excited to help you with your audit needs and appreciate you choosing AuditsAU for your business requirements.

        Thank you for contacting AuditsAU! We have successfully received your inquiry and our expert team is already reviewing your requirements.

        📝 YOUR MESSAGE:
        "${data.message}"

        ⏰ WHAT HAPPENS NEXT?
        • Our audit specialists will review your inquiry within 2-4 hours
        • You'll receive a personalized response within 24 hours  
        • We'll schedule a consultation call if needed
        • Get a customized audit solution for your business

        🚀 WHILE YOU WAIT, EXPLORE OUR SERVICES:
        
        📊 Financial Audits - Comprehensive financial reviews
        🔒 Compliance Audits - Regulatory compliance checks  
        ⚡ Quick Audits - Fast-track audit solutions
        🎯 Custom Solutions - Tailored to your needs

        Visit our services: https://auditsau.com/services
        Learn how it works: https://auditsau.com/how-it-works

        NEED IMMEDIATE ASSISTANCE?
        For urgent matters, feel free to call us directly or schedule a consultation through our website.

        We're committed to providing you with exceptional audit services and look forward to building a successful partnership with your business.

        Warm regards,
        The AuditsAU Team
        Your Audit Excellence Partners

        ---
        📧 This is an automated welcome message
        🌐 Visit us: https://auditsau.com | 📞 Call us for urgent matters
        📍 Serving businesses across Australia with professional audit services
        © 2024 AuditsAU. All rights reserved.
      `.trim(),
    };

    const mailOptions = {
      from: `"AuditsAU" <${process.env.EMAIL_FROM}>`,
      to: data.email,
      subject: autoReplyTemplate.subject,
      text: autoReplyTemplate.text,
      html: autoReplyTemplate.html,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log('Auto-reply email sent to customer:', info.messageId);
    return true;
  } catch (error) {
    console.error('Error sending auto-reply email:', error);
    return false;
  }
};