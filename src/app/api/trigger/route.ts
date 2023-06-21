import { NextResponse, NextRequest } from "next/server";
import { revalidatePath } from "next/cache";

const ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN ?? "";

export const POST = async (req: NextRequest) => {
  if (
    req.method !== "POST" ||
    req.headers.get("x-rorydev-content-header") !== ACCESS_TOKEN
  ) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
  }

  const json = await req.json();
  const slug = json.fields.slug["en-US"] as string;

  if (!slug) {
    return NextResponse.json({ message: "Slug not found" }, { status: 400 });
  }

  Promise.all([revalidatePath(slug)]).catch((err) => {
    console.error(err);
    return NextResponse.json(
      { message: "Fail to revalidate" },
      { status: 400 }
    );
  });

  return NextResponse.json({ message: "Success" }, { status: 200 });
};
