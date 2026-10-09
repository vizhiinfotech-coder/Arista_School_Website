// Web3Forms Configuration (Replaces EmailJS)
export const emailjsConfig = {
  schoolEmail: 'aristainternationalschool@gmail.com',
  schoolName: 'Arista International Senior Secondary School',

  messages: {
    success: 'Thank you for your message! We will get back to you soon.',
    error: 'Failed to send message. Please try again or contact us directly at aristainternationalschool@gmail.com',
  },

  validation: {
    required: ['firstName', 'lastName', 'email', 'subject', 'message'],
    emailPattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    phonePattern: /^[\+]?[1-9][\d]{0,15}$/,
    maxMessageLength: 1000
  }
};

// Helper function to send email using Web3Forms (using FormData to match standard HTML form submission)
export const sendContactEmail = async (formData) => {
  try {
    const data = new FormData();
    data.append('access_key', 'd19d698e-12a2-408d-a0ea-5e0634e490c9');
    
    // Form fields
    data.append('name', `${formData.firstName} ${formData.lastName}`);
    data.append('email', formData.email);
    data.append('phone', formData.phone || 'Not provided');
    data.append('subject', `New Inquiry: ${formData.subject}`);
    data.append('message', formData.message);
    
    // Web3Forms Settings
    data.append('from_name', emailjsConfig.schoolName);
    data.append('replyto', formData.email);

    // Note: Web3Forms free tier does not support custom HTML bodies.
    // It will format these fields into its own clean, standard email layout.

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: data
    });

    const responseText = await response.text();
    let result;
    try {
      result = JSON.parse(responseText);
    } catch (e) {
      console.error('API Error Response:', responseText);
      throw new Error('Invalid API response');
    }

    if (result.success) {
      return {
        success: true,
        message: emailjsConfig.messages.success,
        result
      };
    } else {
      throw new Error(result.message || 'Something went wrong');
    }
  } catch (error) {
    console.error('Web3Forms Error:', error);
    return {
      success: false,
      message: emailjsConfig.messages.error,
      error
    };
  }
};

export const validateContactForm = (formData) => {
  const errors = {};
  
  emailjsConfig.validation.required.forEach(field => {
    if (!formData[field] || formData[field].trim() === '') {
      errors[field] = `${field} is required`;
    }
  });
  
  if (formData.email && !emailjsConfig.validation.emailPattern.test(formData.email)) {
    errors.email = 'Please enter a valid email address';
  }
  
  if (formData.phone && formData.phone.trim() !== '' && !emailjsConfig.validation.phonePattern.test(formData.phone)) {
    errors.phone = 'Please enter a valid phone number';
  }
  
  if (formData.message && formData.message.length > emailjsConfig.validation.maxMessageLength) {
    errors.message = `Message must be less than ${emailjsConfig.validation.maxMessageLength} characters`;
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export default emailjsConfig;
