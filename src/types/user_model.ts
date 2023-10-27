import { 
    DocumentData, 
    QueryDocumentSnapshot, 
    SnapshotOptions,
} from "firebase/firestore";

export type UserModel = {
    id: string;
    username: string;
    artistName: string;
    bio: string;
    profilePicture?: string;
};

export const firestoreConverter = {
    toFirestore(user: UserModel): DocumentData {
        return { ...user };
    },
    fromFirestore(
        snapshot: QueryDocumentSnapshot,
        options: SnapshotOptions
    ): UserModel {
        const data = snapshot.data(options)!;
        return {
            id: data.id,
            username: data.username,
            artistName: data.artistName,
            bio: data.bio,
            profilePicture: data.profilePicture,
        };
    },
};