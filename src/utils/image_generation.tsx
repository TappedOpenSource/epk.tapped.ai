
import TappedTheme from '@/app/epk/tapped_theme';
import { EpkForm } from '@/types/epk_form';
import satori from 'satori'

export async function generateEpkSvg({
    height,
    width,
    artistName,
    bio,
    imageUrl,
    tappedRating,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyId,
    phoneNumber,
    location,
    notableSongs,
    job,
}: Omit<EpkForm, "id" | "userId" | "timestamp"> & {
    height: number;
    width: number;
    tappedRating: string;
}): Promise<string> {
    const fontData = await fetch(
        new URL('../app/fonts/Inter-Medium.ttf', import.meta.url),
    ).then((res) => res.arrayBuffer());

    const result = await satori(
        <TappedTheme
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