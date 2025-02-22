import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

// Remove edge runtime as it might be causing issues
export const dynamic = 'force-dynamic'

// Create email transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export async function POST(request: Request) {
  try {
    const data = await request.json()
    console.log('Received data:', data)

    // Validate required fields
    if (!data.email) {
      return NextResponse.json(
        {
          success: false,
          message: 'Please fill all required fields',
        },
        { status: 400 }
      )
    }

    try {
      // Send email to admin
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: process.env.ADMIN_EMAIL || process.env.EMAIL_USER, // fallback to sender
        subject: 'New Subscription',
        html: `
          <h2>New Subscription Details:</h2>
          <p><strong>Email:</strong> ${data.email}</p>
          <p><strong>Submitted at:</strong> ${new Date().toLocaleString()}</p>
        `,
      })

      // Send confirmation email to customer
      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: data.email,
        subject: 'New Subscription',
        text: `New subscription from: ${data.email}`,
        html: `<p>New subscription from: <strong>${data.email}</strong></p>`,
      })

      console.log('Emails sent successfully')

      return NextResponse.json(
        {
          success: true,
          message: 'Form submitted successfully',
        },
        { status: 200 }
      )
    } catch (emailError) {
      console.error('Email sending failed:', emailError)
      return NextResponse.json(
        {
          success: false,
          message: 'Failed to send confirmation emails',
        },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error('Server error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Server error processing form',
      },
      { status: 500 }
    )
  }
}