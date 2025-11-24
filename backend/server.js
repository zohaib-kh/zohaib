// server.js
require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors()); // allow requests from your frontend
app.use(express.json()); // parse JSON body

// Create transporter using SMTP (Gmail example)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Simple health route
app.get("/", (req, res) => res.send("Mailer running"));

// POST /send endpoint
app.post("/send", async (req, res) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ success: false, message: "All fields are required." });
    }

    // Compose email
    const mailOptions = {
      from: `${name} <${email}>`, // shows sender
      to: process.env.RECIPIENT_EMAIL, // your receiving email
      subject: `New message from portfolio: ${name}`,
      text: `You have a new message from your portfolio contact form.\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h3>New message from portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message.replace(/\n/g, "<br/>")}</p>
      `,
    };

    // send mail
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent:", info.messageId);

    return res.json({ success: true, message: "Message sent successfully." });
  } catch (err) {
    console.error("Send error:", err);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});