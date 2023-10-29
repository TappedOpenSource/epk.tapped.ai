import { EPKTheme } from "@/types/themes";
import { UserModel } from "@/types/user_model";

export default function EPKSVG({
    artistName,
    bio,
    profilePicture,
    overallRating,
    tiktokHandle,
    instagramHandle,
    twitterHandle,
    spotifyHandle,
    phoneNumber,
    theme,
}: Omit<UserModel, "id"> & {
    phoneNumber: string;
    spotifyHandle: string;
    theme: EPKTheme;
}) {
    return (
        <>

        </>
    );
}