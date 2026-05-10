# 📧 EmailJS Quick Setup Guide for Arista Secondary School

## ⚠️ Current Issue
Your contact form is not working because the EmailJS credentials are not configured. You need to set up EmailJS and add your credentials.

---

## 🚀 Quick Setup (5 Minutes)

### Step 1: Create EmailJS Account
1. Go to **https://www.emailjs.com/**
2. Click **"Sign Up"** (Free plan: 200 emails/month)
3. Verify your email address

### Step 2: Add Gmail Service
1. In EmailJS Dashboard, click **"Email Services"**
2. Click **"Add New Service"**
3. Select **"Gmail"**
4. Click **"Connect Account"** and sign in with: `mrspublicschool456@gmail.com`
5. **Copy the Service ID** (looks like `service_abc123`)
   - Save this - you'll need it in Step 5

### Step 3: Create Email Template
1. Go to **"Email Templates"** in the dashboard
2. Click **"Create New Template"**
3. **Template Name:** `MRS School Contact Form`
4. **Subject Line:** 
   ```
   New Contact Form - {{from_name}}
   ```
5. **Email Body (HTML):**
   ```html
   <h2>New Contact Form Submission</h2>
   
   <h3>Contact Information:</h3>
   <ul>
     <li><strong>Name:</strong> {{from_name}}</li>
     <li><strong>Email:</strong> {{from_email}}</li>
     <li><strong>Phone:</strong> {{phone}}</li>
   </ul>
   
   <h3>Message:</h3>
   <p><strong>Subject:</strong> {{subject}}</p>
   <p>{{message}}</p>
   
   <hr>
   <p><small>Submitted: {{contact_date}} at {{contact_time}}</small></p>
   ```

6. **Template Settings (Important!):**
   - **To Email:** `mrspublicschool456@gmail.com` (or use `{{to_email}}`)
   - **From Name:** `{{school_name}} Website`
   - **Reply To:** `{{reply_to}}`

7. Click **"Save"**
8. **Copy the Template ID** (looks like `template_xyz789`)
   - Save this - you'll need it in Step 5

### Step 4: Get Your Public Key
1. Click on your profile/account icon (top right)
2. Go to **"Account"** → **"General"**
3. Find **"Public Key"** section
4. **Copy your Public Key** (looks like `user_abc123xyz` or a long string)
   - Save this - you'll need it in Step 5

### Step 5: Update Your Website Configuration
1. Open the file: `src/config/emailjs.js`
2. Find lines 7-9 and replace with your actual credentials:

```javascript
serviceId: 'YOUR_SERVICE_ID',      // Paste Service ID from Step 2
templateId: 'YOUR_TEMPLATE_ID',     // Paste Template ID from Step 3
publicKey: 'YOUR_PUBLIC_KEY',       // Paste Public Key from Step 4
```

**Example (with fake credentials):**
```javascript
serviceId: 'service_abc123',
templateId: 'template_xyz789',
publicKey: 'user_abc123xyz',
```

3. Save the file

### Step 6: Test Your Contact Form
1. Start your development server:
   ```bash
   npm run dev
   ```
2. Open your website in the browser
3. Go to the **Contact** page
4. Fill out the form and click **Submit**
5. Check `mrspublicschool456@gmail.com` inbox for the test email

---

## 🔍 Troubleshooting

### Issue: "Failed to send message"
**Solution:** Check browser console (F12) for errors:
- **"Invalid public key"** → Double-check your Public Key in Step 4
- **"Service not found"** → Verify Service ID in Step 2
- **"Template not found"** → Verify Template ID in Step 3

### Issue: Email not received
**Possible causes:**
1. Check Gmail **Spam** folder
2. Verify the "To Email" in template settings (Step 3, point 6)
3. Check EmailJS dashboard for delivery status

### Issue: "Quota exceeded"
**Solution:** Free plan allows 200 emails/month. Upgrade plan or wait for next month.

---

## 📝 Quick Reference

**EmailJS Dashboard:** https://dashboard.emailjs.com/

**Your Configuration File:** `src/config/emailjs.js`

**School Email:** mrspublicschool456@gmail.com

**Need Help?** Check the detailed guide: `EMAILJS_SETUP_GUIDE.md`

---

## ✅ Checklist
- [ ] Created EmailJS account
- [ ] Connected Gmail service (got Service ID)
- [ ] Created email template (got Template ID)
- [ ] Copied Public Key
- [ ] Updated `src/config/emailjs.js` with all 3 credentials
- [ ] Tested contact form
- [ ] Received test email

---

**Last Updated:** 2025-11-21

