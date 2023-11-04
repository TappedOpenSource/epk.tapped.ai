/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { EpkForm } from "@/types/epk_form";
import { getURL } from "@/utils/url";

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
}: Omit<EpkForm, "id" | "userId" | "timestamp"> & {
    tappedRating: string;
}) {
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
                borderRadius: '5%',
                paddingLeft: 20,
                paddingRight: 20,
                marginRight: 20,
                color: '#ff4433',
              }}
            >
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
                    position: 'relative',
                    width: 400,
                    height: 400,
                }}
            >
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        width: '100%',
                        position: 'relative',
                        overflow: 'hidden',
                        borderRadius: '5%',
                    }}
                >
                    <img
                        src={imageUrl}
                        alt="headshot of author"
                        width={400}
                        height={400}
                        style={{
                            objectFit: 'cover',
                        }}
                    />
                </div>
            </div>
            </div>
            <div style={{
                    display: 'flex',
                    position: 'absolute',
                    top: '44%',

                    backgroundColor: '#e3963e',
                    borderRadius: 10,
                    width: '90%',
                    height: '300px',
                }}
            ></div>
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    marginTop: 50,
                    borderRadius: 10,
                    paddingLeft: 20,
                    paddingTop: 20,
                    paddingBottom: 20,
                    backgroundColor: '#ffc000',
                    color: 'white',
                    height: '265px',
                }}
            >
                <p style={{ fontSize: 18, }}>
                    {bio}
                </p>
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
                    marginBottom: 40,
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
                        borderRadius: 10, 
                        color: 'black', 
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
            <div style={{
                    display: 'flex',
                    position: 'absolute',
                    bottom: '2%',
                }}
            >
                {(phoneNumber !== undefined && phoneNumber !== null && phoneNumber !== '')
                    ? <p>agent contact: {phoneNumber}</p>
                    : null}
            </div>
        </div >
    );
}