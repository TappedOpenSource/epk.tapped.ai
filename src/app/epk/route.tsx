import { ImageResponse } from "next/server";

// // @ts-ignore
// import QRCodeImpl from "qr.js/lib/QRCode";
// // @ts-ignore
// import ErrorCorrectLevel from "qr.js/lib/ErrorCorrectLevel";

export const runtime = 'edge';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const theme = searchParams.get('theme');

  console.log({ theme });

  // const qrcode = new QRCodeImpl(-1, ErrorCorrectLevel[level]);
  // qrcode.addData("https://jonaylor.xyz");
  // qrcode.make();
  // const cells = qrcode.modules;

  return new ImageResponse(
    (
      <div
        style={{
          height: '100%',
          width: '100%',
          display: 'flex',
          flexDirection: 'row',
          backgroundColor: 'white',
          justifyContent: 'space-between',
          color: 'black',
        }}
      >
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            width: 256,
          }}
          >
            <img
              src="http://localhost:3000/niral.jpeg"
              alt="headshot of author"
              width={256}
              height={256}
            />
          </div>
          <h1>
            Niral Desai
          </h1>
          <p>Northern Virginia</p>
          <p>
            Niral Desai, the Indian American rapper,
            has taken his unique blend of trap rap and R&B to new heights.
            He&apos;s been featured on Times Square billboards twice and
            gained over 100,000 streams on music platforms.
            In addition to his music, Niral is a
            powerful advocate for mental health and the
            Indian American community.
            He has already collaborated with big names in the U.S.
            music scene and performed at tour stops,
            including one in Virginia.
            With only six months of artistry under his belt,
            he&apos;s seen a 10,500% growth rate and doesn&apos;t plan on stopping.
          </p>
          <p>sync + collabs</p>
          <p>spotify</p>
          <p>apple music</p>
          <p>soundcloud</p>
          <p>instagram</p>
          <p>tiktok</p>
          <p>twitter</p>
          <br />
          <p>musician, model, actor, audio engineer</p>
          <p>agent contact: +15402523375</p>
        </div>
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
      </div>
    ),
    {
      height: 1200,
      width: 900,
      debug: true,
    },
  );
}