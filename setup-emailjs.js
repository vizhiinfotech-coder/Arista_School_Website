#!/usr/bin/env node

/**
 * EmailJS Setup Script for Arista Secondary School
 * 
 * This script helps you configure EmailJS for the contact form.
 * Run this script after setting up your EmailJS account.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log('\n🏫 Arista Secondary School - EmailJS Configuration Setup\n');
console.log('This script will help you configure EmailJS for the contact form.');
console.log('Make sure you have completed the EmailJS setup as described in EMAILJS_SETUP_GUIDE.md\n');

const questions = [
  {
    key: 'serviceId',
    question: 'Enter your EmailJS Service ID (e.g., service_mrs_school): ',
    default: 'service_mrs_school'
  },
  {
    key: 'templateId', 
    question: 'Enter your EmailJS Template ID (e.g., template_contact_form): ',
    default: 'template_contact_form'
  },
  {
    key: 'publicKey',
    question: 'Enter your EmailJS Public Key (e.g., user_abc123xyz): ',
    default: 'your_public_key_here'
  }
];

async function askQuestion(question, defaultValue) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim() || defaultValue);
    });
  });
}

async function main() {
  try {
    const config = {};
    
    // Ask for configuration values
    for (const q of questions) {
      config[q.key] = await askQuestion(q.question, q.default);
    }
    
    console.log('\n📝 Configuration Summary:');
    console.log(`Service ID: ${config.serviceId}`);
    console.log(`Template ID: ${config.templateId}`);
    console.log(`Public Key: ${config.publicKey}`);
    
    const confirm = await askQuestion('\nDo you want to update the configuration? (y/N): ', 'n');
    
    if (confirm.toLowerCase() === 'y' || confirm.toLowerCase() === 'yes') {
      // Update the configuration file
      const configPath = path.join(__dirname, 'src', 'config', 'emailjs.js');
      
      if (fs.existsSync(configPath)) {
        let configContent = fs.readFileSync(configPath, 'utf8');
        
        // Replace the placeholder values
        configContent = configContent.replace(
          /serviceId: '[^']*'/,
          `serviceId: '${config.serviceId}'`
        );
        configContent = configContent.replace(
          /templateId: '[^']*'/,
          `templateId: '${config.templateId}'`
        );
        configContent = configContent.replace(
          /publicKey: '[^']*'/,
          `publicKey: '${config.publicKey}'`
        );
        
        fs.writeFileSync(configPath, configContent);
        
        console.log('\n✅ Configuration updated successfully!');
        console.log('\n📧 Your contact form is now configured to send emails to: mrspublicschool456@gmail.com');
        console.log('\n🧪 Test your configuration:');
        console.log('1. Start your development server: npm run dev');
        console.log('2. Go to the Contact page');
        console.log('3. Fill out and submit the contact form');
        console.log('4. Check mrspublicschool456@gmail.com for the test email');
        
        console.log('\n📚 Additional Resources:');
        console.log('- EmailJS Dashboard: https://dashboard.emailjs.com/');
        console.log('- Setup Guide: ./EMAILJS_SETUP_GUIDE.md');
        console.log('- Configuration File: ./src/config/emailjs.js');
        
      } else {
        console.log('\n❌ Configuration file not found at:', configPath);
        console.log('Please make sure you are running this script from the project root directory.');
      }
    } else {
      console.log('\n❌ Configuration not updated.');
    }
    
  } catch (error) {
    console.error('\n❌ Error:', error.message);
  } finally {
    rl.close();
  }
}

// Display help information
function showHelp() {
  console.log('\n📖 EmailJS Setup Help\n');
  console.log('Before running this script, you need to:');
  console.log('1. Create an EmailJS account at https://www.emailjs.com/');
  console.log('2. Add a Gmail service for mrspublicschool456@gmail.com');
  console.log('3. Create an email template');
  console.log('4. Get your Service ID, Template ID, and Public Key');
  console.log('\nFor detailed instructions, see: EMAILJS_SETUP_GUIDE.md\n');
}

// Check command line arguments
const args = process.argv.slice(2);
if (args.includes('--help') || args.includes('-h')) {
  showHelp();
  process.exit(0);
}

// Run the main function
main().catch(console.error);

// Export for testing
module.exports = { main, showHelp };
