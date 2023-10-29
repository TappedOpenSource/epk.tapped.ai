
import TappedTheme from '@/app/epk/tapped_theme';
import { UserModel } from '@/types/user_model';
import satori from 'satori'

export async function generateEpkSvg({
    height,
    width,
    artistName,
    username,
    bio,
    profilePicture,
    overallRating,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyHandle,
    phoneNumber,
}: Omit<UserModel, "id"> & {
    height: number;
    width: number;
    phoneNumber: string;
    spotifyHandle: string;
}): Promise<string> {
    const fontData = await fetch(
        new URL('../app/fonts/Inter-Medium.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const result = await satori(
        <TappedTheme
            artistName={artistName}
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
            height,
            width,
            fonts: [
                {
                    name: "Inter",
                    data: fontData,
                },
            ],
        },
    );

    return result;
}