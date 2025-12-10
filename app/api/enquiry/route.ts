import { NextResponse } from "next/server";
import { supabase } from "../../lib/supabaseClient";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, phone, email, childName, classApplying, message } = body;

    const { data, error } = await supabase.from("enquiries").insert([
      {
        name,
        phone,
        email,
        child_name: childName,
        class_applying: classApplying,
        message,
      },
    ]);

    if (error) {
      console.error("Supabase Error:", error);
      return NextResponse.json({ success: false, error }, { status: 500 });
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } 
  catch (err) {
    console.error("Server Error:", err);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
