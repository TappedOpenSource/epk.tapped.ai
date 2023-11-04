import { EpkForm } from "./epk_form";

export type EpkProps = Omit<EpkForm, "id" | "userId" | "timestamp"> & {
    tiktokHandle: string | null;
    instagramHandle: string | null;
    twitterHandle: string | null;
    tappedRating: string | null;
}

export type EPKComponent = (props: EpkProps) => JSX.Element;