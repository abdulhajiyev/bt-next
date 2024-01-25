// pages/api/sendMail.js

import { NextApiRequest, NextApiResponse } from "next";
import nodemailer from "nodemailer";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req, res) {
	const { name, phoneNumber, email, additionalNotes, tour } = await req.json();
	// Use nodemailer to send the email
	const transporter = nodemailer.createTransport({
		// configure your email service here
		host: "smtp-mail.outlook.com",
		port: 587,
		secure: false,
		auth: {
			user: "sttc@bookand.travel",
			pass: "test12345.",
		},
	});

	let text = "";
	if (name) text += `Name: ${name}\n`;
	if (phoneNumber) text += `Phone Number: ${phoneNumber}\n`;
	if (email) text += `Email: ${email}\n`;
	if (additionalNotes) text += `Additional Notes: ${additionalNotes}\n`;
	if (tour) text += `Tour: ${tour}`;

	const mailOptions = {
		from: "sttc@bookand.travel",
		to: "abdulhajiyev@gmail.com",
		subject: "Test Form",
		text: text,
	};

	try {
		transporter.sendMail(mailOptions);
		return NextResponse.json({ message: "Email sent successfully" });
	} catch (error) {
		return NextResponse.error();
	}
}
