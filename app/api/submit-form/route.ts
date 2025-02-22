import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Remove edge runtime as it might be causing issues
export const dynamic = 'force-dynamic'

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log('Received data:', data)

    // Validate required fields
    if (!data.name || !data.email || !data.selectedPlan) {
      return NextResponse.json({
        success: false,
        message: 'Please fill all required fields'
      }, { status: 400 })
    }

    try {
      // Send email to admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // fallback to sender
        subject: 'New Form Submission - Agentia World',
        html: `
          <h2>New Customer Details:</h2>
          <p><strong>Name:</strong> ${data.name}</p>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Selected Plan:</strong> ${data.selectedPlan}</p>
          <p><strong>Company:</strong> ${data.company || 'Not provided'}</p>
          <p><strong>Use Case:</strong> ${data.useCase || 'Not provided'}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `
      })

      // Send confirmation email to customer
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: 'Welcome to Agentia World!',
        html: `
          <h2>Thank you for choosing Agentia World!</h2>
          <p>Dear ${data.name},</p>
          <p>We've received your request for the ${data.selectedPlan} plan. Our team will review your submission and get back to you shortly.</p>
          <p>Here's a summary of your submission:</p>
          <ul>
            <li>Selected Plan: ${data.selectedPlan}</li>
            <li>Company: ${data.company || 'Not provided'}</li>
            <li>Use Case: ${data.useCase || 'Not provided'}</li>
          </ul>
          <p>If you have any questions, feel free to reply to this email.</p>
          <br>
          <p>Best regards,</p>
          <p>The Agentia World Team</p>
        `
      })

      console.log('Emails sent successfully')

    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      return NextResponse.json({
        success: false,
        message: 'Failed to send confirmation emails'
      }, { status: 500 })
    }

    return NextResponse.json({
      success: true,
      message: 'Form submitted successfully'
    }, { status: 200 })

  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json({
      success: false,
      message: 'Server error processing form'
    }, { status: 500 })
  }
}