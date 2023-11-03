import { httpsCallable } from "firebase/functions";
import { functions } from "@/utils/firebase";

export async function aiEnhanceBio() {
    const res = await httpsCallable<
        { text: string; },
        { enhancedBio: string; }
    >(functions, 'generateEnhancedBio')({
        text: 'bio'
    });

    const enhancedBio = res.data.enhancedBio;

    return enhancedBio;
};