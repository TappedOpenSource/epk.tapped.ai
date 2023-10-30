/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { UserModel } from "@/types/user_model";
import { getURL } from "@/utils/url";

const qrCodeDimensions = 256;

export default function TappedTheme({
    artistName,
    bio,
    profilePicture,
    overallRating,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyId,
    phoneNumber,
}: Omit<UserModel, "id"> & {
    phoneNumber: string;
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
                    // zIndex: -1,
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
                    // zIndex: -1,
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
                    // zIndex: -1,
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
                        borderRadius: '5%',
                    }}
                >
                    <img
                        src={profilePicture}
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
            <p>{overallRating} / 5 stars on Tapped</p>
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
                <div style={{ 
                    display: 'flex', 
                    flexDirection: 'column', 
                    marginRight: '20px',
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
                                    open.spotify.com/artist/{spotifyId} | 6503 Monthly Listeners
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
                                    @{instagramHandle} | 1638 followers
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
                                    @{tiktokHandle} | 948 followers
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
                            backgroundColor: '#202020', 
                            borderRadius: 10, color: '#63b2fd', 
                            paddingLeft: 4, 
                            paddingRight: 4,
                         }}>
                            <h2>Top Songs</h2>
                            <p style={{ 
                                fontSize: '20px',
                            }}>Trust Issues: 46,621 | Winning: 30,612</p>
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
                    <p style={{ textAlign: 'center', fontSize: 19, color: 'white' }}>
                        {bio}
                    </p>
                </div>
                {/*<p>sync + collabs</p>*/}
            </div>
            {(phoneNumber !== undefined && phoneNumber !== null && phoneNumber !== '')
                ? <p>agent contact: {phoneNumber}</p>
                : null}
        </div >
    );
}