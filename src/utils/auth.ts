import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
} from "firebase/auth";
import firebase from "@/utils/firebase";

export type Credentials = { email: string; password: string };

export type LoginResult = { uid: string; token: string };

export type SignupResult = {uid: string; token: string };

export async function loginWithCredentials({ email, password }: Credentials) {
    console.debug('loginWithCredentials', email);
    const loginResult = await signInWithEmailAndPassword(
        firebase.auth,
        email,
        password,
    );
    return { uid: loginResult.user.uid, token: '123' };
}

export async function signupWithCredentials({ email, password }: Credentials) {
    console.debug('signup');
    const loginResult = await createUserWithEmailAndPassword(
        firebase.auth,
        email,
        password,
    );
    return { uid: loginResult.user.uid, token: '123' };
}

export async function loginWithGoogle() {
    console.debug('loginWithGoogle');
    const provider = new GoogleAuthProvider();
    const loginResult = await signInWithPopup(firebase.auth, provider);
    return { uid: loginResult.user.uid, token: '123' };
}

export async function loginWithApple() {
    console.debug('loginWithApple');
    return { uid: '123', token: '123' };
}

export async function logout() {
    console.debug('logout');
    await firebase.auth.signOut();
}

export async function getCustomClaims() {
    console.log({ currentUser: firebase.auth.currentUser });
    const token = await firebase.auth.currentUser?.getIdToken(true);
    console.log({ token });
    const decodedToken = await firebase.auth.currentUser?.getIdTokenResult();
    console.log({ claims: decodedToken?.claims });
    return decodedToken?.claims;
}