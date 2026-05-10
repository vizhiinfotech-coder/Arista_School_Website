/**
 * EmailJS Test Utility for Arista Secondary School
 * 
 * This utility helps test the EmailJS configuration
 * Use this in browser console or as a component for testing
 */

import { sendContactEmail, validateContactForm, emailjsConfig } from '../config/emailjs';

// Test data for contact form
const testFormData = {
  firstName: 'Test',
  lastName: 'User',
  email: 'test@example.com',
  phone: '+91 9876543210',
  subject: 'Test Email from Website',
  message: 'This is a test message to verify that the EmailJS configuration is working correctly. If you receive this email, the contact form is properly configured.'
};

/**
 * Test EmailJS configuration
 */
export const testEmailjsConfig = () => {
  console.log('🧪 Testing EmailJS Configuration...\n');
  
  // Check if configuration is properly set
  const config = emailjsConfig;
  
  console.log('📋 Current Configuration:');
  console.log(`Service ID: ${config.serviceId}`);
  console.log(`Template ID: ${config.templateId}`);
  console.log(`Public Key: ${config.publicKey}`);
  console.log(`School Email: ${config.schoolEmail}`);
  
  // Check if placeholder values are still present
  const hasPlaceholders = 
    config.serviceId.includes('your_') ||
    config.templateId.includes('your_') ||
    config.publicKey.includes('your_');
  
  if (hasPlaceholders) {
    console.warn('⚠️  Warning: Placeholder values detected in configuration!');
    console.warn('Please update src/config/emailjs.js with your actual EmailJS credentials.');
    return false;
  }
  
  console.log('✅ Configuration looks good!');
  return true;
};

/**
 * Test form validation
 */
export const testFormValidation = () => {
  console.log('\n🔍 Testing Form Validation...\n');
  
  // Test valid data
  const validResult = validateContactForm(testFormData);
  console.log('Valid form data test:', validResult.isValid ? '✅ PASS' : '❌ FAIL');
  
  // Test invalid data
  const invalidData = { ...testFormData, email: 'invalid-email' };
  const invalidResult = validateContactForm(invalidData);
  console.log('Invalid email test:', !invalidResult.isValid ? '✅ PASS' : '❌ FAIL');
  
  // Test missing required fields
  const incompleteData = { firstName: 'Test' };
  const incompleteResult = validateContactForm(incompleteData);
  console.log('Missing fields test:', !incompleteResult.isValid ? '✅ PASS' : '❌ FAIL');
  
  if (invalidResult.errors) {
    console.log('Validation errors:', invalidResult.errors);
  }
  
  return validResult.isValid && !invalidResult.isValid && !incompleteResult.isValid;
};

/**
 * Send test email
 */
export const sendTestEmail = async () => {
  console.log('\n📧 Sending Test Email...\n');
  
  try {
    // First check configuration
    if (!testEmailjsConfig()) {
      throw new Error('Configuration check failed');
    }
    
    // Send test email
    console.log('Sending test email to:', emailjsConfig.schoolEmail);
    const result = await sendContactEmail(testFormData);
    
    if (result.success) {
      console.log('✅ Test email sent successfully!');
      console.log('📬 Check the school email inbox:', emailjsConfig.schoolEmail);
      console.log('📄 Email details:', result.result);
      return true;
    } else {
      console.error('❌ Failed to send test email:', result.message);
      console.error('Error details:', result.error);
      return false;
    }
    
  } catch (error) {
    console.error('❌ Test email failed:', error);
    return false;
  }
};

/**
 * Run all tests
 */
export const runAllTests = async () => {
  console.log('🏫 Arista Secondary School - EmailJS Test Suite\n');
  console.log('=' .repeat(50));
  
  const configTest = testEmailjsConfig();
  const validationTest = testFormValidation();
  
  if (configTest && validationTest) {
    console.log('\n🚀 Running email test...');
    const emailTest = await sendTestEmail();
    
    console.log('\n' + '=' .repeat(50));
    console.log('📊 Test Results Summary:');
    console.log(`Configuration: ${configTest ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Validation: ${validationTest ? '✅ PASS' : '❌ FAIL'}`);
    console.log(`Email Sending: ${emailTest ? '✅ PASS' : '❌ FAIL'}`);
    
    if (configTest && validationTest && emailTest) {
      console.log('\n🎉 All tests passed! Your contact form is ready to use.');
    } else {
      console.log('\n⚠️  Some tests failed. Please check the configuration and try again.');
    }
    
    return configTest && validationTest && emailTest;
  } else {
    console.log('\n❌ Basic tests failed. Please fix configuration and validation issues first.');
    return false;
  }
};

/**
 * Browser console helper
 * Use this in browser console to test EmailJS
 */
export const browserTest = () => {
  console.log('🌐 Browser Test Mode');
  console.log('Run the following commands in console:');
  console.log('');
  console.log('// Test configuration');
  console.log('testEmailjsConfig()');
  console.log('');
  console.log('// Test validation');
  console.log('testFormValidation()');
  console.log('');
  console.log('// Send test email');
  console.log('await sendTestEmail()');
  console.log('');
  console.log('// Run all tests');
  console.log('await runAllTests()');
};

// Export test functions for browser console
if (typeof window !== 'undefined') {
  window.testEmailjsConfig = testEmailjsConfig;
  window.testFormValidation = testFormValidation;
  window.sendTestEmail = sendTestEmail;
  window.runAllTests = runAllTests;
  window.browserTest = browserTest;
}

export default {
  testEmailjsConfig,
  testFormValidation,
  sendTestEmail,
  runAllTests,
  browserTest
};
