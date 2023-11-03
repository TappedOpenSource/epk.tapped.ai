
import TappedTheme from '@/app/epk/tapped_theme';
import FunkyTheme from '@/app/epk/funky_theme';
import MinimalistTheme from '@/app/epk/minimalist_theme';
import { UserModel } from '@/types/user_model';
import { EpkForm } from '@/types/epk_form';
import satori from 'satori'
import { EPKComponent } from '@/types/epk_component';

const themeComponents: Record<string, EPKComponent> = {
    tapped: TappedTheme,
    funky: FunkyTheme,
    minimalist: MinimalistTheme,
};

export async function generateEpkSvg({
    theme,
    height,
    width,
    artistName,
    bio,
    imageUrl,
    tappedRating,
    spotifyId,
    phoneNumber,
    location,
    notableSongs,
    job,
}: Omit<EpkForm, "id" | "userId" | "timestamp"> & {
    theme: string,
    height: number;
    width: number;
    tappedRating: string;
}): Promise<string> {
    const fontData = await fetch(
        new URL('../app/fonts/Inter-Medium.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const ThemeComponent: EPKComponent = themeComponents[theme || 'tapped'];

    const result = await satori(
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