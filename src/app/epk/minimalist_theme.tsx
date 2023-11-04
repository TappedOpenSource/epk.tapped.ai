/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { EpkProps } from "@/types/epk_component";
import { getURL } from "@/utils/url";

const qrCodeDimensions = 150;

export default function MinimalistTheme({
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
            style={{
                height: '100%',
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#fdf6e4',
                color: 'black',
                padding: '20px',
                paddingTop: '60px',
                position: 'relative',
            }}
        >
            {/* <div style={{
                display: 'flex',
                position: 'absolute',
                top: '57.5%',
                left: '-10%',
                backgroundColor: '#c3b1e1',
                borderRadius: 10, 
                marginBottom: '5px',
                width: '100%',
                height: '100px',
            }}>
            </div>
            <div style={{
                display: 'flex',
                position: 'absolute',
                top: '75.5%',
                left: '-10%',
                backgroundColor: '#c3b1e1',
                borderRadius: 10, 
                marginBottom: '5px',
                width: '100%',
                height: '100px',
            }}>
            </div> */}
            <div style={{
                display: 'flex',
                position: 'absolute',
                top: '38.8%',
                left: '-10%',
                backgroundColor: '#c3b1e1',
                borderRadius: 10, 
                marginBottom: '5px',
                width: '100%',
                height: '132px',
            }}></div>
            <div style={{display: 'flex', flexDirection: 'row', marginBottom: '25px', alignItems: 'flex-start', width: '100%',}}>
              <div
                  style={{
                      display: 'flex',
                      position: 'relative',
                      width: 350,
                      height: 350,
                  }}
              >
                  <div
                      style={{
                          display: 'flex',
                          width: '100%',
                          height: '100%',
                          overflow: 'hidden',
                          borderRadius: '5%',
                      }}
                  >
                      <img
                          src={imageUrl}
                          alt="headshot of author"
                          width={350}
                          height={350}
                          style={{
                              objectFit: 'cover',
                          }}
                      />
                  </div>
              </div>

              <div style={{
                display: 'flex',
                marginLeft: '20px',
                flexDirection: 'column',
                backgroundColor: '#c3b1e1',
                width: '100%',
                height: 350,
                borderTopLeftRadius: 10,
                borderBottomLeftRadius: 10,
                }}
              >
                <div style={{display: 'flex', flexDirection: 'column', padding: '0 20px', color: 'white'}}>
                  <h1 style={{ fontSize: '48px' }}>{artistName}</h1>
                  <p>Northern Virginia</p>
                  <p>{tappedRating} / 5 stars on Tapped</p>
                  <p>Musician, Model, Actor, Audio Engineer</p>
                </div>
              </div>
            </div>

            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#c3b1e1',
                borderRadius: 10, 
                color: 'white',
                paddingLeft: 4,
                paddingRight: 4,
                marginBottom: '5px',
                width: '100%',
            }}>
                <h2>Top Song</h2>
                <p style={{
                    fontSize: '20px',
                    marginLeft: '20px',
                    marginRight: '20px',
                }}>Trust Issues: 46,621</p>
            </div>

            <div 
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
                paddingLeft: '50px',
                paddingRight: '50px',
              }}
            >
                <div style={{
                  display: 'flex',
                  flexDirection: 'row',
                  width: '100%',
                  marginTop: '20px',
                  marginBottom: '20px',
                  backgroundColor: 'white',
                  borderStyle: 'solid',
                  borderWidth: '4px',
                  borderColor: '#c3b1e1',
                  borderRadius: 10,
                  paddingLeft: 10,
                  paddingRight: 10,
                  }}
                >
                  <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '50%',
                    }}
                  >
                    {(spotifyId !== undefined && spotifyId !== null && spotifyId !== '')
                        ? < div style={{
                            display: 'flex',
                            marginBottom: '10px',
                            alignItems: 'center',
                            justifyContent: 'center',
                            padding: 5,
                            borderRadius: 10,
                            height: '85px',
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
                            marginBottom: '10px',
                            paddingLeft: 5,
                            paddingRight: 5,
                            borderRadius: 10,
                            height: '85px',
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
                  </div>

                  <div style={{
                      display: 'flex',
                      flexDirection: 'column',
                      width: '50%',
                    }}
                  >
                    {(tiktokHandle !== undefined && tiktokHandle !== null && tiktokHandle !== '')
                        ? <div style={{
                            display: 'flex',
                            alignItems: 'center',
                            marginBottom: '10px',
                            paddingLeft: 5,
                            paddingRight: 5,
                            borderRadius: 10,
                            height: '85px',
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
                            marginBottom: '10px',
                            paddingLeft: 5,
                            paddingRight: 5,
                            borderRadius: 10,
                            height: '85px',
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
                </div>

                <div
                    style={{
                        display: 'flex',
                        width: '100%',
                        marginBottom: '15px',
                        backgroundColor: 'white',
                        borderRadius: 10,
                        borderStyle: 'solid',
                        borderWidth: '4px',
                        borderColor: '#c3b1e1',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <p style={{ textAlign: 'center', fontSize: 19, color: 'black', height: '130px' }}>
                        {bio}
                    </p>
                </div>
                <div style={{
                    display: 'flex',
                }}>
                    <img
                        src={qrCodeUrl}
                        width={qrCodeDimensions}
                        height={qrCodeDimensions}
                    />
                </div>
                {(phoneNumber !== undefined && phoneNumber !== null && phoneNumber !== '')
                    ? <p>agent contact: {phoneNumber}</p>
                    : null}
            </div>
        </div >
    );
}