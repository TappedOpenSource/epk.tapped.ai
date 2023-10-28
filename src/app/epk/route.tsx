import { ImageResponse } from "next/og";
import TappedTheme from "./tapped_theme";

// // @ts-ignore
// import QRCodeImpl from "qr.js/lib/QRCode";
// // @ts-ignore
// import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get('theme');
  const userString = searchParams.get('user') ?? '';
  const user = JSON.parse(userString);

  const {
    username,
    bio,
    profilePicture,
    overallRating,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyHandle,
    phoneNumber,
  } = user;
  console.log({
    username,
    bio,
    profilePicture,
    overallRating,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyHandle,
    phoneNumber,
  })
  // const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  // qrcode.addData("https://jonaylor.xyz");
  // qrcode.make();
  // const cells = qrcode.modules;
  console.log({ theme });

  return new ImageResponse(
    <TappedTheme
      username={username}
      bio={bio}
      profilePicture={profilePicture}
      overallRating={overallRating}
      tiktokHandle={tiktokHandle}
      instagramHandle={instagramHandle}
      twitterHandle={twitterHandle}
      spotifyHandle={spotifyHandle}
      phoneNumber={phoneNumber}
    />,
    {
      height: 1200,
      width: 900,
      debug: false,
    },
  );

}

{/* <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >

          <svg
            bgColor='white'
            bgD={cells
              .map((row, rowIndex) =>
                row.map((cell, cellIndex) => (!cell ? `M ${cellIndex} ${rowIndex} l 1 0 0 1 -1 0 Z` : "")).join(" "),
              )
              .join(" ")}
            fgColor='black'
            fgD={cells
              .map((row, rowIndex) =>
                row.map((cell, cellIndex) => (cell ? `M ${cellIndex} ${rowIndex} l 1 0 0 1 -1 0 Z` : "")).join(" "),
              )
              .join(" ")}
            size={256}
            viewBoxSize={cells.length}
            height={size} 
            viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`} width={256}>
            {'Niral Desai' ? <title>{'Niral Desai'}</title> : null}
            <path d={bgD} fill='white' />
            <path d={fgD} fill='black' />
          </svg>
        </div> */}