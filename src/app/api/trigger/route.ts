import { NextRequest, NextResponse } from "next/server";
import { revalidatePath } from "next/cache";

export const dynamic = "force-dynamic";

const ACCESS_TOKEN =
  process.env.NEXT_PUBLIC_CONTENTFUL_CONTENT_DELIVERY_API_ACCESS_TOKEN ?? "";

export async function POST(req: NextRequest) {
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

  // ref: https://nextjs.org/docs/app/api-reference/functions/revalidatePath
  // revalidatePath will revalidate all segments under a dynamic route segment.
  Promise.all([revalidatePath("/articles/[slug]")]).catch((err) => {
    console.error(err);
    return NextResponse.json(
      { message: "Fail to revalidate" },
      { status: 400 }
    );
  });

  return NextResponse.json({ revalidated: true, now: Date.now() });
}
