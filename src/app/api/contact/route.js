import nodemailer from "nodemailer";
import { google } from "googleapis";

export async function POST(request) {
  try {
    const data = await request.json();
    const { name, company, email, phone, type, location, message, lang, socialLinks, contentInfo, fitReason, roomTransformation, interest, profession } = data;

    const langMap = {
      'en': 'English',
      'fr': 'France',
      'de': 'German',
      'es': 'Spanish',
      'it': 'Italian',
      'pt': 'Portuguese'
    };
    const sheetName = lang ? (langMap[lang] || 'English') : 'English';

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    let emailHtml = `
      <h3>New B2B Trade Account Application</h3>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Company:</strong> ${company}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || "N/A"}</p>
      <p><strong>Type:</strong> ${type}</p>
      <p><strong>Location/Country:</strong> ${location}</p>
      <p><strong>Message:</strong> ${message || "N/A"}</p>
    `;

    if (profession === 'influencer' || type === 'Influencer') {
      emailHtml += `
        <hr/>
        <h4>Influencer Details</h4>
        <p><strong>Social Links:</strong> ${socialLinks || "N/A"}</p>
        <p><strong>Content Info:</strong> ${contentInfo || "N/A"}</p>
        <p><strong>Fit Reason:</strong> ${fitReason || "N/A"}</p>
        <p><strong>Room Transformation:</strong> ${roomTransformation || "N/A"}</p>
        <p><strong>Interest:</strong> ${interest || "N/A"}</p>
      `;
    }

    emailHtml += `
      <hr/>
      <p><small>This email was sent via the B2B contact form.</small></p>
    `;

    await transporter.sendMail({
      from: `"Wall Bed King B2B" <${process.env.GMAIL_USER}>`,
      to: "delivery@wallbedking.co.uk",
      replyTo: email,
      subject: `New B2B Application - ${company}`,
      html: emailHtml,
    });

    let sheetMessage = message || "-";
    if (profession === 'influencer' || type === 'Influencer') {
      sheetMessage = `Social Links: ${socialLinks}\nContent Info: ${contentInfo}\nFit Reason: ${fitReason}\nRoom Transformation: ${roomTransformation}\nInterest: ${interest}`;
    }

    // Google Sheets mentés
    try {
      const auth = new google.auth.GoogleAuth({
        credentials: {
          client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
          // A .env fájlban lévő \n karaktereket igazi sortörésekké kell alakítani
          private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets"],
      });

      const sheets = google.sheets({ version: "v4", auth });

      await sheets.spreadsheets.values.append({
        spreadsheetId: process.env.GOOGLE_SPREADSHEET_ID,
        range: `${sheetName}!A1`, // append to the specific sheet
        valueInputOption: "USER_ENTERED",
        requestBody: {
          values: [
            [
              new Date().toLocaleString("hu-HU"), // Dátum
              name,
              company,
              email,
              phone || "-",
              type,
              location,
              sheetMessage
            ],
          ],
        },
      });
    } catch (sheetError) {
      console.error("Google Sheets hiba:", sheetError);
      // Ha a táblázatba mentés sikertelen, attól még az email elment, így nem dobunk 500-as hibát a usernek.
    }

    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error in API route:", error);
    return new Response(
      JSON.stringify({ error: error.message || "Internal server error." }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      },
    );
  }
}
