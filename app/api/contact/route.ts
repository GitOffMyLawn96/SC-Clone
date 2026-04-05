import { NextResponse } from "next/server";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().min(2),
  email: z.email(),
  company: z.string().optional(),
  inquiryType: z.string().min(2),
  message: z.string().min(10),
});

export async function POST(request: Request) {
  const body = (await request.json()) as unknown;
  const result = contactSchema.safeParse(body);

  if (!result.success) {
    return NextResponse.json(
      { message: "Please complete all required fields before submitting." },
      { status: 400 },
    );
  }

  return NextResponse.json(
    {
      ok: true,
      message:
        "Submission captured. Wire this route into HubSpot, Resend, or your CRM of choice for production.",
    },
    { status: 200 },
  );
}
