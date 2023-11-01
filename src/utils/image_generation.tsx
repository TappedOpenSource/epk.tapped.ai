
import TappedTheme from '@/app/epk/tapped_theme';
import FunkyTheme from '@/app/epk/funky_theme';
import { UserModel } from '@/types/user_model';
import satori from 'satori'

const themeComponents = {
    tapped: TappedTheme,
    funky: FunkyTheme,
};

export async function generateEpkSvg({
    theme,
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
    spotifyId,
    phoneNumber,
}: Omit<UserModel, "id"> & {
    theme: string,
    height: number;
    width: number;
    phoneNumber: string;
}): Promise<string> {
    const fontData = await fetch(
        new URL('../app/fonts/Inter-Medium.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const ThemeComponent = themeComponents[theme || 'tapped'];

    const result = await satori(
        <ThemeComponent
            artistName={artistName}
            username={username}
            bio={bio}
            profilePicture={profilePicture}
            overallRating={overallRating}
            tiktokHandle={tiktokHandle}
            instagramHandle={instagramHandle}
            twitterHandle={twitterHandle}
            spotifyId={spotifyId}
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