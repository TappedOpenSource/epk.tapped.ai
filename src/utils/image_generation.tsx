
import TappedTheme from '@/app/epk/tapped_theme';
import FunkyTheme from '@/app/epk/funky_theme';
import MinimalistTheme from '@/app/epk/minimalist_theme';
import { EpkForm } from '@/types/epk_form';
import satori from 'satori'
import { EPKComponent, EpkProps } from '@/types/epk_component';

const themeComponents: Record<string, EPKComponent> = {
    tapped: TappedTheme,
    funky: FunkyTheme,
    minimalist: MinimalistTheme,
};

let chosenFont: string;
let chosenFontItalic: string;
let chosenFontBold: string;

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
    twitterHandle,
    tiktokHandle,
    instagramHandle,
}: EpkProps & {
    theme: string,
    height: number;
    width: number;
    tappedRating: string;
}): Promise<string> {
    let fontDataRegular;
    let fontDataItalic;
    let fontDataBold;

    if (theme === 'funky'){
        chosenFont = 'JosefinSans';
        chosenFontItalic = 'JosefinSansItalic';
        chosenFontBold = 'JosefinSansBold'
        fontDataRegular = await fetch(
            new URL('../app/fonts/JosefinSans-Medium.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    
        fontDataItalic = await fetch(
            new URL('../app/fonts/JosefinSans-Italic.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    
        fontDataBold = await fetch(
            new URL('../app/fonts/JosefinSans-Bold.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    } else if (theme === 'minimalist'){
        chosenFont = 'Arimo';
        chosenFontItalic = 'ArimoItalic';
        chosenFontBold = 'ArimoBold'
        fontDataRegular = await fetch(
            new URL('../app/fonts/Arimo-Medium.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    
        fontDataItalic = await fetch(
            new URL('../app/fonts/Arimo-Italic.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    
        fontDataBold = await fetch(
            new URL('../app/fonts/Arimo-Bold.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    } else {
        chosenFont = 'Inter';
        chosenFontItalic = 'InterItalic';
        chosenFontBold = 'InterBold'
        fontDataRegular = await fetch(
            new URL('../app/fonts/Inter-Medium.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    
        fontDataItalic = await fetch(
            new URL('../app/fonts/InterTight-Italic.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    
        fontDataBold = await fetch(
            new URL('../app/fonts/Inter-Bold.ttf', import.meta.url)
        ).then((res) => res.arrayBuffer());
    }

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
                    name: chosenFont,
                    data: fontDataRegular,
                },
                {
                    name: chosenFontItalic,
                    data: fontDataItalic,
                },
                {
                    name: chosenFontBold,
                    data: fontDataBold,
                },
            ],
        },
    );

    return result;
}