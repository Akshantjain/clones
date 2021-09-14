import { getAuth, signInWithPopup, FacebookAuthProvider} from "firebase/auth";


export async function signInWithFacebook() {
    const auth = getAuth();
    var provider = new FacebookAuthProvider();
    await signInWithPopup(auth, provider);
}