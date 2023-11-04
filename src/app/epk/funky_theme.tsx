/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { EpkProps } from "@/types/epk_component";
import { getURL } from "@/utils/url";
import { Arimo } from "next/font/google";

const arimo = Arimo({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const qrCodeDimensions = 150;

export default function FunkyTheme({
    artistName,
    bio,
    imageUrl,
    tappedRating,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyId,
    phoneNumber,
}: EpkProps) {
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${
        qrCodeDimensions
    }x${
        qrCodeDimensions
    }&bgcolor=010F16&color=cbd5e1&data=https://instagram.com/${
        instagramHandle
    }`
    return (
        <div
            className={arimo.className}
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: 'white',
                padding: '20px',
                paddingTop: '60px',
                position: 'relative',
            }}
        >
            <div style={{
                display: 'flex',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                zIndex: -1,
            }}>
                <div style={{
                    backgroundColor: '#e97451',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                }}>
                    <div style={{
                        backgroundColor: '#eedc82',
                        width: '70%',
                        height: '80%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 10
                    }}>
                        <div style={{
                            backgroundColor: 'orange',
                            width: '60%',
                            height: '70%',
                            borderRadius: 10
                        }} />
                    </div>
                </div>
            </div>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
              <div style={{
                display: 'flex', 
                flexDirection: 'column', 
                backgroundColor: '#fbf5df',
                borderRadius: 10,
                paddingLeft: 20,
                paddingRight: 20,
                color: '#ff4433',
              }}>
                  <h1
                      style={{
                          display: 'flex',
                          fontSize: '48px'
                      }}
                  >
                      {artistName}
                  </h1>
                  <p>Northern Virginia</p>
                  <p>{tappedRating} / 5 stars on Tapped</p>
                  <p>Musician, Model, Actor, Audio Engineer</p>
              </div>
              <div
                  style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '380px',
                      borderRadius: 10,
                      paddingLeft: 20,
                      paddingTop: 20,
                      paddingBottom: 20,
                      marginLeft: 30,
                      backgroundColor: '#ffc000',
                      color: 'white',
                  }}
              >
                  <p style={{ fontSize: 18, }}>
                      {bio}
                  </p>
              </div>
            </div>
            <div
                style={{
                    display: 'flex',
                    position: 'relative',
                    width: 512,
                    height: 512,
                    paddingTop: 10,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        height: '40vh',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '5%',
                    }}
                >
                    <img
                        src={imageUrl}
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
            </div>
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
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    marginRight: '20px',
                }}>
                    <div style={{ 
                      display: 'flex', 
                      color: 'black',
                      flexDirection: 'column',
                      alignItems: 'center',
                      flex: 1 }}
                    >
                        {(spotifyId !== undefined && spotifyId !== null && spotifyId !== '')
                            ? < div style={{
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'flex-start', 
                                paddingLeft: 5,
                                paddingRight: 5,
                                borderRadius: 10,
                                width: '100%'
                            }}>
                                <div
                                    style={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        justifyContent: 'center',
                                    }}
                                >
                                    <img
                                        src={getURL('/spotify_icon.png')}
                                        alt="spotify icon"
                                        width={35}
                                        height={35}
                                        style={{
                                            objectFit: 'cover',
                                            marginBottom: '5px',
                                        }}
                                    />
                                </div>
                                <p style={{ 
                                    marginLeft: '20px', 
                                    fontSize: '20px',
                                }}>
                                    open.spotify.com/artist/{spotifyId}
                                </p>
                            </div>
                            : null}
                        {(instagramHandle !== undefined && instagramHandle !== null && instagramHandle !== '')
                            ? <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'flex-start', 
                                paddingLeft: 5, 
                                paddingRight: 5, 
                                borderRadius: 10,
                                width: '100%'
                            }}>
                                <img
                                    src={getURL("/instagram_icon.png")}
                                    alt="Instagram icon"
                                    width={35}
                                    height={35}
                                    style={{ objectFit: 'cover', }}
                                />
                                <p style={{ marginLeft: '20px', fontSize: '20px' }}>
                                    @{instagramHandle}
                                </p>
                            </div>
                            : null}

                        {(tiktokHandle !== undefined && tiktokHandle !== null && tiktokHandle !== '')
                            ? <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'flex-start', 
                                paddingLeft: 5, 
                                paddingRight: 5, 
                                borderRadius: 10,
                                width: '100%'
                            }}>
                                <img
                                    src={getURL("/tiktok_icon.png")}
                                    alt="TikTok icon"
                                    width={35}
                                    height={35}
                                    style={{ objectFit: 'cover', }}
                                />
                                <p style={{ marginLeft: '20px', fontSize: '20px' }}>
                                    @{tiktokHandle}
                                </p>
                            </div>
                            : null}

                        {(twitterHandle !== undefined && twitterHandle !== null && twitterHandle !== '')
                            ? <div style={{ 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'flex-start', 
                                paddingLeft: 5, 
                                paddingRight: 5, 
                                borderRadius: 10,
                                width: '100%'
                            }}>
                                <img
                                    src={getURL("/twitter_icon.png")}
                                    alt="Twitter icon"
                                    width={35}
                                    height={35}
                                    style={{ objectFit: 'cover' }}
                                />
                                <p style={{ marginLeft: '20px', fontSize: '20px' }}>
                                    @{twitterHandle}
                                </p>
                            </div>
                            : null}
                    </div>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        flex: 1,
                    }}>
                        <img
                            src={qrCodeUrl}
                            width={qrCodeDimensions}
                            height={qrCodeDimensions}
                        />
                    </div>
                    <div style={{ 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center', 
                        backgroundColor: '#fa8072', 
                        borderRadius: 10, 
                        color: 'white', 
                        paddingLeft: 5, 
                        paddingRight: 5,
                        marginTop: 50, 
                        marginBottom: 50,
                        flex: 1,
                      }}>
                        <h2>Top Song</h2>
                        <p style={{ 
                            fontSize: '20px',
                        }}>Trust Issues: 46,621</p>
                    </div>
                </div>
            </div>
            {(phoneNumber !== undefined && phoneNumber !== null && phoneNumber !== '')
                ? <p>agent contact: {phoneNumber}</p>
                : null}
        </div >
    );
}