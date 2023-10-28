import { UserModel, firestoreConverter } from "@/types/user_model";
import { auth, db } from "@/utils/firebase";
import { collection, doc, getDoc } from "firebase/firestore";

export async function getCurrentUser(): Promise<UserModel | null> {
    const currentUserId = auth.currentUser?.uid ?? null;
    if (!currentUserId) return null

    const currentUser = await getUser(currentUserId);

    return currentUser;
}

export async function getUser(userId: string): Promise<UserModel | null> {
    const collectionRef = collection(db, "users").withConverter(firestoreConverter);
    const docRef = doc(collectionRef, userId);

    const docSnap = await getDoc(docRef);
    const docData = docSnap.data() ?? null;

    return docData;
}