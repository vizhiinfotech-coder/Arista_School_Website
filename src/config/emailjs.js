// EmailJS Configuration for Arista Secondary School
// Replace the placeholder values with your actual EmailJS credentials

export const emailjsConfig = {
  // EmailJS Service Configuration
  // TODO: Replace these with your actual EmailJS credentials from https://dashboard.emailjs.com/
  serviceId: 'service_77l6qwo',      // Get this from EmailJS Dashboard > Email Services
  templateId: 'template_kc4g5ii',     // Get this from EmailJS Dashboard > Email Templates
  publicKey: 'RZqpyTTAPj3A_DUHl',       // Get this from EmailJS Dashboard > Account > General
  
  // School Configuration
  schoolEmail: 'mrspublicschool456@gmail.com',
  schoolName: 'Arista Secondary School',
  
  // Template Parameters Generator
  getTemplateParams: (formData) => ({
    // Sender Information
    from_name: `${formData.firstName} ${formData.lastName}`,
    from_email: formData.email,
    phone: formData.phone || 'Not provided',
    
    // Message Content
    subject: formData.subject,
    message: formData.message,
    
    // School Information
    to_email: 'mrspublicschool456@gmail.com',
    school_name: 'Arista Secondary School',
    
    // Reply Configuration
    reply_to: formData.email,
    
    // Timestamp Information
    contact_date: new Date().toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }),
    contact_time: new Date().toLocaleTimeString('en-IN', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true
    }),
    
    // Additional Information
    inquiry_type: formData.subject || 'General Inquiry',
    website_source: 'Arista Secondary School Website',
    user_agent: navigator.userAgent || 'Unknown'
  }),
  
  // Email Template Configuration
  emailTemplate: {
    subject: 'New Contact Form Submission - {{school_name}}',
    
    // HTML Email Body Template
    htmlBody: `
      <!DOCTYPE html>
      <html>
      <head>
          <style>
              body { 
                  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; 
                  line-height: 1.6; 
                  color: #333; 
                  margin: 0; 
                  padding: 0; 
              }
              .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; }
              .header { 
                  background: linear-gradient(135deg, #54078f, #7c3aed); 
                  color: white; 
                  padding: 30px 20px; 
                  text-align: center; 
              }
              .header h1 { margin: 0; font-size: 24px; }
              .content { padding: 30px 20px; background-color: #f8f9fa; }
              .info-section { margin-bottom: 25px; }
              .info-row { 
                  margin: 12px 0; 
                  padding: 15px; 
                  background-color: white; 
                  border-left: 4px solid #54078f; 
                  border-radius: 0 8px 8px 0;
                  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
              }
              .label { 
                  font-weight: bold; 
                  color: #54078f; 
                  display: inline-block;
                  min-width: 100px;
              }
              .value { color: #333; }
              .message-content { 
                  background-color: #f8f9fa; 
                  padding: 15px; 
                  border-radius: 8px; 
                  margin-top: 10px;
                  border: 1px solid #e9ecef;
              }
              .footer { 
                  background-color: #333; 
                  color: white; 
                  padding: 20px; 
                  text-align: center; 
                  font-size: 14px; 
              }
              .footer a { color: #fbbf24; text-decoration: none; }
              .timestamp { 
                  background-color: #e3f2fd; 
                  padding: 10px; 
                  border-radius: 8px; 
                  font-size: 12px; 
                  color: #1565c0;
              }
          </style>
      </head>
      <body>
          <div class="container">
              <div class="header">
                  <h1>{{school_name}}</h1>
                  <p style="margin: 5px 0 0 0;">New Contact Form Submission</p>
              </div>
              
              <div class="content">
                  <div class="info-section">
                      <h3 style="color: #54078f; margin-bottom: 20px;">Contact Information</h3>
                      
                      <div class="info-row">
                          <span class="label">Name:</span>
                          <span class="value">{{from_name}}</span>
                      </div>
                      
                      <div class="info-row">
                          <span class="label">Email:</span>
                          <span class="value">{{from_email}}</span>
                      </div>
                      
                      <div class="info-row">
                          <span class="label">Phone:</span>
                          <span class="value">{{phone}}</span>
                      </div>
                      
                      <div class="info-row">
                          <span class="label">Subject:</span>
                          <span class="value">{{subject}}</span>
                      </div>
                  </div>
                  
                  <div class="info-section">
                      <h3 style="color: #54078f; margin-bottom: 15px;">Message</h3>
                      <div class="message-content">
                          {{message}}
                      </div>
                  </div>
                  
                  <div class="timestamp">
                      <strong>Submitted:</strong> {{contact_date}} at {{contact_time}}
                  </div>
              </div>
              
              <div class="footer">
                  <p><strong>{{school_name}}</strong></p>
                  <p>Transport Nagar, Gobichettipalayam, Erode, Tamil Nadu 638 456</p>
                  <p>Phone: +91 63825 59917 | Email: <a href="mailto:mrspublicschool456@gmail.com">mrspublicschool456@gmail.com</a></p>
                  <p style="margin-top: 15px; font-size: 12px; opacity: 0.8;">
                      This message was sent through the school website contact form.<br>
                      Reply directly to this email to respond to the sender.
                  </p>
              </div>
          </div>
      </body>
      </html>
    `
  },
  
  // Success/Error Messages
  messages: {
    success: 'Thank you for your message! We will get back to you soon.',
    error: 'Failed to send message. Please try again or contact us directly at mrspublicschool456@gmail.com',
    loading: 'Sending your message...'
  },
  
  // Validation Rules
  validation: {
    required: ['firstName', 'lastName', 'email', 'subject', 'message'],
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phonePattern: /^[\+]?[1-9][\d]{0,15}$/,
    maxMessageLength: 1000
  }
};

// Helper function to send email
export const sendContactEmail = async (formData) => {
  try {
    const { default: emailjs } = await import('@emailjs/browser');
    
    const templateParams = emailjsConfig.getTemplateParams(formData);
    
    const result = await emailjs.send(
      emailjsConfig.serviceId,
      emailjsConfig.templateId,
      templateParams,
      emailjsConfig.publicKey
    );
    
    return {
      success: true,
      message: emailjsConfig.messages.success,
      result
    };
  } catch (error) {
    console.error('EmailJS Error:', error);
    return {
      success: false,
      message: emailjsConfig.messages.error,
      error
    };
  }
};

// Helper function to validate form data
export const validateContactForm = (formData) => {
  const errors = {};
  
  // Check required fields
  emailjsConfig.validation.required.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = `${field} is required`;
    }
  });
  
  // Validate email format
  if (formData.email && !emailjsConfig.validation.emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  // Validate phone format (if provided)
  if (formData.phone && formData.phone.trim() !== '' && 
      !emailjsConfig.validation.phonePattern.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  // Validate message length
  if (formData.message && formData.message.length > emailjsConfig.validation.maxMessageLength) {
    errors.message = `Message must be less than ${emailjsConfig.validation.maxMessageLength} characters`;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default emailjsConfig;
