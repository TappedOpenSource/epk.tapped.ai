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
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#15242d',
          color: 'white',
          padding: '20px', 
          paddingTop: '60px',
          position: 'relative',
        }}
      >
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#63b2fd',
            borderRadius: '50%',
            filter: 'blur(100px)',
            zIndex: -1,
            top: '20%',
            left: '-10%',
            width: '420px',
            height: '420px',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#63b2fd',
            borderRadius: '50%',
            filter: 'blur(100px)',
            zIndex: -1,
            top: '80%',
            right: '0%',
            width: '400px',
            height: '400px',
          }}
        ></div>
        <div
          style={{
            position: 'absolute',
            backgroundColor: '#63b2fd',
            borderRadius: '50%',
            filter: 'blur(100px)',
            zIndex: -1,
            bottom: '90%',
            left: '90%',
            width: '600px',
            height: '600px',
            transform: 'translateX(-50%)',
          }}
        ></div>


        <div
          style={{
            display: 'flex',
            position: 'relative',
            width: 512,
            height: 512,
          }}
        >
          <div
            style={{
              display: 'flex',
              width: '100%',
              height: '100%',
              overflow: 'hidden',
            }}
          >
            <img
              src="http://localhost:3000/niral.jpeg"
              alt="headshot of author"
              width={512}
              height={512}
              style={{
                objectFit: 'cover',
              }}
            />
            <div
              style={{
                display: 'flex',
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '50%',
                backgroundImage: 'linear-gradient(transparent, #15242d)',
              }}
            ></div>
          </div>
  
          <h1
            style={{
              display: 'flex',
              position: 'absolute',
              bottom: 10,
              left: '50%',
              transform: 'translateX(-50%)',
              padding: '5px 10px',
              fontSize: '48px'
            }}
          >
            Niral Desai
          </h1>
        </div>

        <p>Northern Virginia</p>
        <p>Musician, Model, Actor, Audio Engineer</p>
  
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            marginTop: 20,
            justifyContent: 'space-between',
            width: '100%',
            padding: '0 20px'
          }}
        >
          <div style={{display: 'flex', flexDirection: 'column', marginRight: '20px'}}>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              <div style={{ display: 'flex', marginBottom: '10px', alignItems: 'center', justifyContent:'center', padding: 5, borderRadius: 10,}}>
                <div
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                  }}
                >
                  <img
                    src="http://localhost:3000/spotify_icon.png"
                    alt="spotify icon"
                    width={35}
                    height={35}
                    style={{
                      objectFit: 'cover',
                      marginBottom: '5px',
                    }}
                  />
                  <img
                    src="http://localhost:3000/applemusic_icon.png"
                    alt="apple icon"
                    width={30}
                    height={35}
                    style={{
                      objectFit: 'cover',
                    }}
                  />
                </div>
                <p style={{ marginLeft: '20px', fontSize: '20px' }}>
                  Niral Desai | 6503 Monthly Listeners
                </p>
              </div>
  
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', paddingLeft: 5, paddingRight: 5, borderRadius: 10, }}>
                <img
                  src="http://localhost:3000/instagram_icon.png"
                  alt="Instagram icon"
                  width={35}
                  height={35}
                  style={{ objectFit: 'cover', }}
                />
                <p style={{ marginLeft: '20px', fontSize: '20px' }}>
                  @niraldesaiofficial | 1638 followers
                </p>
              </div>
  
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', paddingLeft: 5, paddingRight: 5, borderRadius: 10, }}>
                <img
                  src="http://localhost:3000/tiktok_icon.png"
                  alt="TikTok icon"
                  width={35}
                  height={35}
                  style={{ objectFit: 'cover', }}
                />
                <p style={{ marginLeft: '20px', fontSize: '20px' }}>
                  Niraldesai | 948 followers 
                </p>
              </div>
  
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px', paddingLeft: 5, paddingRight: 5, borderRadius: 10, }}>
                <img
                  src="http://localhost:3000/twitter_icon.png"
                  alt="Twitter icon"
                  width={35}
                  height={35}
                  style={{ objectFit: 'cover' }}
                />
                <p style={{ marginLeft: '20px', fontSize: '20px' }}>
                  @imniraldesai
                </p>
              </div>
              <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#202020', borderRadius: 10, color: '#63b2fd', paddingLeft: 4, paddingRight: 4}}>
                  <h2>Top Songs</h2>
                  <p style={{ fontSize: '20px', }}>Trust Issues: 46,621 | Winning: 30,612</p>
              </div>
            </div>
          </div>
  
          <div 
            style={{ 
              display: 'flex',
              flexDirection: 'column',
              width: '380px',
              borderRadius: 10,
              padding: 10,
            }}
          >
            <p style={{textAlign: 'center', fontSize: 19, color: 'white'}}>
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
          </div>
          {/*<p>sync + collabs</p>*/}
        </div>
        <p>agent contact: +15402523375</p>
      </div>
    ),
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