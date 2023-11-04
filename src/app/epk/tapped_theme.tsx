/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { EpkProps } from "@/types/epk_component";
import { getURL } from "@/utils/url";

const qrCodeDimensions = 150;

export default function TappedTheme({
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
                backgroundColor: '#15242d',
                color: 'white',
                padding: '20px',
                paddingTop: '60px',
                position: 'relative',
            }}
        >
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    overflow: 'hidden',
                    // zIndex: -1,
                    top: '-5%',
                    left: '-40%',
                    width: '900px',
                    height: '900px',
                }}
            >
                <img 
                    src={getURL('/blue_circle_1.png')}
                    alt="Blurred Circle 1" 
                    width='900px'
                    height='900px'
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    overflow: 'hidden',
                    // zIndex: -1,
                    top: '75%',
                    right: '-30%',
                    width: '800px',
                    height: '800px',
                }}
            >
                <img 
                    src={getURL('/blue_circle_1.png')}
                    alt="Blurred Circle 2" 
                    width='800px'
                    height='800px'
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    position: 'absolute',
                    overflow: 'hidden',
                    // zIndex: -1,
                    bottom: '70%',
                    left: '95%',
                    width: '700px',
                    height: '700px',
                    transform: 'translateX(-50%)',
                }}
            >
                <img 
                    src={getURL('/blue_circle_3.png')}
                    alt="Blurred Circle 3" 
                    width='700px'
                    height='700px'
                    style={{
                        objectFit: 'cover',
                    }}
                />
            </div>
            <div style={{
                display: 'flex',
                position: 'absolute',
                overflow: 'hidden',
                top: '2%',
                left: '2%',
            }}>
                <img
                    src={qrCodeUrl}
                    width={qrCodeDimensions}
                    height={qrCodeDimensions}
                />
            </div>
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
                    {artistName}
                </h1>
            </div>

            <p>Northern Virginia</p>
            <p>{tappedRating} / 5 stars on Tapped</p>
            <p>Musician, Model, Actor, Audio Engineer</p>

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    marginTop: 20,
                    justifyContent: 'space-between',
                    width: '100%',
                    padding: '0 20px',
                }}
            >
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    marginRight: '20px',
                    flex: 1,
                    minWidth: 0,
                }}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        {(spotifyId !== undefined && spotifyId !== null && spotifyId !== '')
                            ? < div style={{
                                display: 'flex',
                                marginBottom: '10px',
                                alignItems: 'center',
                                justifyContent: 'center',
                                padding: 5,
                                borderRadius: 10,
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
                                marginBottom: '10px',
                                paddingLeft: 5,
                                paddingRight: 5,
                                borderRadius: 10,
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
                        <div style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: '#202020',
                            borderRadius: 10, color: '#63b2fd',
                            paddingLeft: 4,
                            paddingRight: 4,
                        }}>
                            <h2>Top Songs</h2>
                            <p style={{
                                fontSize: '20px',
                            }}>Trust Issues: 46,621</p>
                        </div>
                    </div>
                </div>

                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        borderRadius: 10,
                        padding: 10,
                        flex: 1,
                        minWidth: 0,
                    }}
                >
                    <p style={{ textAlign: 'center', fontSize: 19, color: 'white' }}>
                        {bio}
                    </p>
                </div>
            </div>
            {(phoneNumber !== undefined && phoneNumber !== null && phoneNumber !== '')
                ? <p>agent contact: {phoneNumber}</p>
                : null}
        </div >
    );
}