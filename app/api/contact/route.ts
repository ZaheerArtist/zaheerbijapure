import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Set to true to log email data instead of actually sending emails
// Useful for testing when you don't have email credentials set up yet
const TEST_MODE = true;

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json();

    // Validate the data
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // If in test mode, log the data and return success
    if (TEST_MODE) {
      console.log('TEST MODE ACTIVE - Email would have been sent with the following data:');
      console.log({
        from: `"${name}" <zaheerartist@gmail.com>`,
        replyTo: email,
        to: 'zaheerartist@gmail.com',
        subject: `Contact Form: ${subject}`,
        message: message
      });
      
      return NextResponse.json(
        { message: 'Test mode: Email data logged to console' },
        { status: 200 }
      );
    }

    // Validate environment variables for real email sending
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error('Missing email credentials in environment variables');
      return NextResponse.json(
        { error: 'Server configuration error: Missing email credentials' },
        { status: 500 }
      );
    }

    // Configure nodemailer transport
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Email content
    const mailOptions = {
      from: `"${name}" <${process.env.EMAIL_USER}>`, // Using authenticated email as sender
      replyTo: email, // Set reply-to as the form submitter's email
      to: 'zaheerartist@gmail.com',
      subject: `Contact Form: ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br/>')}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        
        Message:
        ${message}
      `,
    };

    // Verify connection configuration
    try {
      await transporter.verify();
      console.log('SMTP connection verified successfully');
    } catch (verifyError) {
      console.error('SMTP connection verification failed:', verifyError);
      return NextResponse.json(
        { error: 'Failed to connect to email server. Please check your credentials.' },
        { status: 500 }
      );
    }

    // Send the email
    try {
      const info = await transporter.sendMail(mailOptions);
      console.log('Email sent successfully:', info.messageId);
      return NextResponse.json(
        { message: 'Email sent successfully' },
        { status: 200 }
      );
    } catch (sendError: any) {
      console.error('Error sending email:', sendError);
      return NextResponse.json(
        { error: `Failed to send email: ${sendError.message}` },
        { status: 500 }
      );
    }
  } catch (error: any) {
    console.error('Error in contact API route:', error);
    return NextResponse.json(
      { error: `Failed to process request: ${error.message}` },
      { status: 500 }
    );
  }
} 