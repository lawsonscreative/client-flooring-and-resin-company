import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend only if API key is available
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      name,
      phone,
      email,
      enquiryType,
      propertyType,
      location,
      areaToWork,
      servicesInterested,
      message,
    } = body;

    // Validate required fields
    if (!name || !phone || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Build email content
    let emailContent = `
New Contact Form Submission

Name: ${name}
Phone: ${phone}
${email ? `Email: ${email}` : ''}

Enquiry Type: ${enquiryType === 'quote' ? 'Request a quote' : 'General enquiry'}
${propertyType ? `Property Type: ${propertyType}` : ''}
${location ? `Location: ${location}` : ''}
${areaToWork ? `Area to Work On: ${areaToWork}` : ''}
${servicesInterested && servicesInterested.length > 0 ? `Services Interested In: ${servicesInterested.join(', ')}` : ''}

Message:
${message}
`;

    // Check if Resend is configured
    if (!resend) {
      console.log('Resend not configured. Email data:', { name, phone, email, message });
      return NextResponse.json({
        success: true,
        message: 'Form received (email not configured)',
      });
    }

    // Send email using Resend
    const data = await resend.emails.send({
      from: 'The Flooring and Resin Company <noreply@tfrco.co.uk>',
      to: ['info@tfrco.co.uk'],
      replyTo: email || undefined,
      subject: `New ${enquiryType === 'quote' ? 'Quote Request' : 'Enquiry'} from ${name}`,
      text: emailContent,
    });

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message' },
      { status: 500 }
    );
  }
}
