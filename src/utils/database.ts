import { UserModel, userModelConverter } from "@/types/user_model";
import { EpkForm, epkFormConverter } from "@/types/epk_form";
import { auth, db } from "@/utils/firebase";
import { collection, doc, getDoc, getDocs, limit, orderBy, query, setDoc } from "firebase/firestore";

export async function getCurrentUser(): Promise<UserModel | null> {
    const currentUserId = auth.currentUser?.uid ?? null;
    if (!currentUserId) return null

    const currentUser = await getUser(currentUserId);

    return currentUser;
}

export async function getUser(userId: string): Promise<UserModel | null> {
    const collectionRef = collection(db, "users").withConverter(userModelConverter);
    const docRef = doc(collectionRef, userId);

    const docSnap = await getDoc(docRef);
    const docData = docSnap.data() ?? null;

    return docData;
}

export async function addEpkForm({ userId, epkForm }: {
    userId: string;
    epkForm: EpkForm;
}): Promise<void> {
    const collectionRef = collection(
        db,
        `epkForms/${userId}/userForms`,
    ).withConverter(epkFormConverter);
    const docRef = doc(collectionRef, epkForm.id);

    await setDoc(docRef, epkForm);
}

export async function getLatestEpkFormByUserId(userId: string): Promise<EpkForm | null> {
    const collectionRef = collection(
        db,
        `epkForms/${userId}/userForms`,
    ).withConverter(epkFormConverter);
    const querySnapshot = query(
        collectionRef, 
        orderBy("timestamp", "desc"), 
        limit(1),
    ).withConverter(epkFormConverter);
    const queryDocs = await getDocs(querySnapshot);

    if (queryDocs.empty) {
        return null;
    }

    return queryDocs.docs[0].data();
}
