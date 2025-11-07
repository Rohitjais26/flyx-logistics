// server/controllers/contactController.js

const nodemailer = require('nodemailer');

// 1. Create a Transporter (using environment variables)
const transporter = nodemailer.createTransport({
    service: 'gmail', // Or 'smtp' for a custom host, or another service
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

// @route   POST /api/contact
// @desc    Handles multi-step contact form submission and sends email
const submitContactForm = async (req, res) => {
    // Destructure data from the multi-step form
    const { 
        name, 
        email, 
        phone, 
        company, 
        projectType, // From step 2
        budget,      // From step 2
        message      // Final message/details
    } = req.body;

    // Basic validation
    if (!name || !email || !message || !phone) {
        return res.status(400).json({ message: 'Please fill in required fields: Name, Email, Phone, and Message.' });
    }

    // 2. Format the Email Content
    const mailOptions = {
        from: `"${name} (Corporate Website)" <${process.env.EMAIL_USER}>`, // Sender's display name
        to: process.env.CONTACT_RECIPIENT, // The company's inbox
        subject: `New Project Inquiry: ${projectType || 'General'} from ${name}`,
        html: `
            <h2>New Contact Form Submission</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Company:</strong> ${company || 'N/A'}</p>
            <hr>
            <h3>Project Details (from Multi-Step Form)</h3>
            <p><strong>Project Type:</strong> ${projectType || 'Not specified'}</p>
            <p><strong>Estimated Budget:</strong> ${budget || 'Not specified'}</p>
            <p><strong>Message/Details:</strong></p>
            <p>${message}</p>
            <hr>
            <small>Sent from the corporate website contact form.</small>
        `,
    };

    // 3. Send the Email
    try {
        await transporter.sendMail(mailOptions);
        res.status(200).json({ 
            message: 'Message sent successfully! We will get back to you shortly.',
            success: true
        });
    } catch (error) {
        console.error('Nodemailer error:', error);
        res.status(500).json({ 
            message: 'Failed to send message. Please try again or call us directly.',
            error: error.message 
        });
    }
};

module.exports = {
    submitContactForm
};