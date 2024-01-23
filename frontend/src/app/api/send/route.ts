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

	const mailOptions = {
		from: "sttc@bookand.travel",
		to: "abdulhajiyev@gmail.com",
		subject: "Test Form",
		text: `Name: ${name}\nPhone Number: ${phoneNumber}\nEmail: ${email}\nAdditional Notes: ${additionalNotes}\nTour: ${tour}`,
	};

	try {
		transporter.sendMail(mailOptions);
		return NextResponse.json({ message: "Email sent successfully" });
	} catch (error) {
		return NextResponse.error();
	}
}
