import { ImageResponse } from "next/og";
import { siteMetadata } from "@/lib/metadata";

export function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const title = searchParams.get("title") || siteMetadata.title;
    const description =
      searchParams.get("description") || siteMetadata.description;
    const tags = searchParams.get("tags")?.split(",") || [];
    const date = searchParams.get("date");

    return new ImageResponse(
      <div tw="w-full h-full bg-gray-900 text-white flex flex-col p-16">
        <div tw="flex justify-between items-center w-full">
          <h1 tw="text-6xl font-bold text-left">{title}</h1>
          {date ? <p tw="text-xl text-gray-400 text-right">{date}</p> : null}
        </div>
        {tags.length > 0 ? (
          <div tw="flex my-6">
            {tags.map((tag) => (
              <span
                key={tag}
                tw="border-2 mr-2 border-gray-700 px-4 py-2 rounded-full text-gray-300 text-lg"
              >
                #{tag}
              </span>
            ))}
          </div>
        ) : null}
        <p tw="text-2xl mt-4 text-gray-300">{description}</p>
        <p tw="absolute bottom-8 right-16 text-gray-400 text-xl">
          {siteMetadata.title}
        </p>
      </div>,
      {
        width: 1200,
        height: 630,
      },
    );
  } catch (error) {
    console.error(error);
    return new Response("Failed to generate image", { status: 500 });
  }
}
