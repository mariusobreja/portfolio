// api/contact.ts  — Vercel serverless function
// Deploy as-is; set env vars in Vercel dashboard:
//   SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, CONTACT_TO

import type { VercelRequest, VercelResponse } from '@vercel/node'
import nodemailer from 'nodemailer'

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
): Promise<VercelResponse | void> {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const { name, email, message } = req.body as {
    name?: string
    email?: string
    message?: string
  }

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required' })
  }

  // Basic email validation
  const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRe.test(email)) {
    return res.status(400).json({ error: 'Invalid email address' })
  }

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: Number(process.env.SMTP_PORT ?? 587),
    secure: false,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.SMTP_USER}>`,
      to: process.env.CONTACT_TO ?? 'marius.obreja9@gmail.com',
      replyTo: email,
      subject: `Portfolio enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
        <hr />
        <p>${message.replace(/\n/g, '<br />')}</p>
      `,
    })

    return res.status(200).json({ success: true })
  } catch (err) {
    console.error('Mail send error:', err)
    return res.status(500).json({ error: 'Failed to send email' })
  }
}
