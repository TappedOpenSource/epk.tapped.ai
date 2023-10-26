import { ImageResponse } from "next/server";

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get('theme');

  console.log({ theme });

  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 96,
          color: 'black',
          background: 'white',
          width: '100%',
          height: '100%',
          padding: '25px 100px',
          textAlign: 'center',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        👋 Hello
      </div>
    ),
    {
      width: 1200,
      height: 630,
    },
  );
}