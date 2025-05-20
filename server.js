// Simple Node.js/Express backend for contact form
const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'en'))); // Serve static files from 'en' directory

// Contact form endpoint
app.post('/send-contact', async (req, res) => {
  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).send('All fields are required');
  }

  // Configure your SMTP transporter (use your real credentials)
  let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'saudicloudsolutions@gmail.com', // Replace with your email
      pass: 'your_app_password'     // Replace with your app password
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: 'saudicloudsolutions@gmail.com',
      subject: `Contact Form Message from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`
    });
    res.status(200).send('Message sent');
  } catch (err) {
    res.status(500).send('Error sending message');
  }
});

// Fallback to index.html for SPA
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'en', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
