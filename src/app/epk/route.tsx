import { ImageResponse } from "next/og";
import TappedTheme from "./tapped_theme";
import FunkyTheme from "./funky_theme";
import MinimalistTheme from "./minimalist_theme";
import { EpkForm } from "@/types/epk_form";
import { EPKComponent } from "@/types/epk_component";

// // @ts-ignore
// import QRCodeImpl from "qr.js/lib/QRCode";
// // @ts-ignore
// import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";

const width = 900;
const height = 1200;

export const runtime = 'edge';

const themeComponents: Record<string, EPKComponent> = {
  tapped: TappedTheme,
  funky: FunkyTheme,
  minimalist: MinimalistTheme,
};

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get('theme');
  const tappedRating = searchParams.get('tappedRating');
  const epkString = searchParams.get('epkData') ?? '';
  const epkForm = JSON.parse(epkString) as EpkForm;

  const {
    artistName,
    bio,
    imageUrl,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyId,
    phoneNumber,
    notableSongs,
    location,
    job,
  } = epkForm;
  console.log({
    artistName,
    bio,
    imageUrl,
    tappedRating,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyId,
    phoneNumber,
  })
  // const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  // qrcode.addData("https://jonaylor.xyz");
  // qrcode.make();
  // const cells = qrcode.modules;
  console.log({ theme });

  const ThemeComponent: EPKComponent = themeComponents[theme || 'tapped'];

  return new ImageResponse(
    <ThemeComponent
      artistName={artistName}
      location={location}
      notableSongs={notableSongs}
      job={job}
      bio={bio}
      imageUrl={imageUrl}
      tappedRating={tappedRating}
      tiktokHandle={tiktokHandle}
      instagramHandle={instagramHandle}
      twitterHandle={twitterHandle}
      spotifyId={spotifyId}
      phoneNumber={phoneNumber}
    />,
    {
      height,
      width,
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